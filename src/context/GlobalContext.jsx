import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [handleOrder, setHandleOrder] = useState(false)
  //lay item tu localStorage nếu ko có thì de rong

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems')
    const initialValue = JSON.parse(saved)
    return initialValue || ''
  })
  const [amount, setAmount] = useState(() => {
    const saved = localStorage.getItem('amount')
    const initialValue = JSON.parse(saved)
    return initialValue || 0
  })

  const navigate = useNavigate()

  //buy item
  const BuyItem = async (item) => {
    const exist = cartItems.find((x) => x._id === item._id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === item._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }])
    }
    setAmount(amount + 1)
  }

  //get user all cart

  //remove item

  const descreaseItem = async (item) => {
    const exist = cartItems.find((x) => x._id === item._id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== item._id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === item._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
    setAmount(amount - 1)
  }

  const removeItem = (item) => {
    setCartItems(cartItems.filter((x) => x._id !== item._id))
  }

  const OpenCart = () => {
    setOpen(true)
  }

  const CloseCart = () => {
    setOpen(false)
  }

  //save CartItems to localStorage

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    localStorage.setItem('amount', JSON.stringify(amount))
  }, [cartItems, amount])

  //checkout

  const checkOut = async (userId, total) => {
    const formatedCartItems = cartItems.map((item) => {
      return {
        productId: item._id,
        quantity: item.qty,
      }
    })
    // console.log(formatedCartItems)

    try {
      await axios.post('/api/order/create', {
        userId: userId,
        products: [...formatedCartItems],
        amount: amount,
        total: total,
      })
    } catch (error) {
      console.log(error)
    }
    setOpen(false)
    navigate('/myorder/' + userId)
  }

  return (
    <AppContext.Provider
      value={{
        open,
        CloseCart,
        OpenCart,
        handleOrder,
        setHandleOrder,
        cartItems,
        amount,
        BuyItem,
        removeItem,
        descreaseItem,
        setCartItems,
        checkOut,
        setAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
