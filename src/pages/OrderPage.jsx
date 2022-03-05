import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import TextField from '../components/TextField'

export default function OrderPage() {
  const { user } = useContext(AuthContext)
  const [order, setOrder] = useState([])
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get('/api/order/' + user?._id)
        setOrder(res.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    getOrder()
  }, [user?._id, success])

  // console.log(order._id)

  return (
    <div className='bg-gray-200'>
      <div className='mx-auto max-w-screen-lg'>
        <div className='grid grid-cols-1 md:grid-cols-7 gap-3'>
          <div className='md:col-span-4'>
            <h3 className='text-3xl text-center my-10 underline'>My Order</h3>
            {order && order.length !== 0 ? (
              <OrderItems {...order} />
            ) : (
              <span className='text-5xl text-green-500'>You have no Order</span>
            )}
          </div>
          <div className='md:col-span-3'>
            <h3 className='text-3xl text-center my-10 underline'>My Account</h3>
            <div className='bg-white p-10 m-10 min-h-screen shadow-md'>
              <MyAccount
                orderStatus={order?.status}
                orderAddress={order?.address}
              />
              {order && (
                <OrderAction
                  order={order}
                  success={success}
                  setSuccess={setSuccess}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const OrderItems = (order) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(order.products)
  }, [order._id])

  return (
    <>
      <ul className='space-y-2 mb-20'>
        {products &&
          products.map((item) => <SingleOrderItem {...item} key={item._id} />)}
      </ul>
      <div className='mb-5 p-2 rounded-sm font-mono bg-red-300'>
        <span className='text-2xl'>Total:{order.total}$</span>
      </div>
    </>
  )
}

export const SingleOrderItem = (item) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const getUserOrder = async () => {
      try {
        const res = await axios.get('/api/food/' + item.productId)
        setProduct(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUserOrder()
  }, [item?._id])

  // console.log(product)

  return (
    <>
      {product && (
        <li className='flex items-center rounded-md shadow-md p-2 bg-white'>
          <img src={product.image} alt='' className=' w-52 h-32 rounded-md' />
          <div className='space-y-2 ml-20'>
            <h4 className='text-lg text-blue-800 font-bold capitalize'>
              {product.name}
            </h4>
            <p className='text-md'>
              <span className='text-green-600 underline'>Qty:</span>{' '}
              {item.quantity}
            </p>
            <p className='font-semibold'>
              {item.quantity} * {product.price}$
            </p>
          </div>
        </li>
      )}
    </>
  )
}

export const MyAccount = ({ orderAddress, orderStatus }) => {
  const { user } = useContext(AuthContext)
  return (
    <ul className='space-y-5'>
      <li>
        <span className='underline font-bold text-orange-400'>My Id:</span>{' '}
        {user._id}
      </li>
      <li>
        <span className='underline font-bold text-orange-400'>UserName:</span>{' '}
        {user.username}
      </li>
      <li>
        <span className='underline font-bold text-orange-400'>Email:</span>{' '}
        {user.email}
      </li>
      {orderAddress && (
        <li className='capitalize'>
          <span className='underline font-bold text-orange-400'>Address:</span>{' '}
          {orderAddress}
        </li>
      )}
      {orderStatus && (
        <li className=' capitalize'>
          <span className='underline font-bold text-orange-400'>Status:</span>{' '}
          {orderStatus}
        </li>
      )}
    </ul>
  )
}

export const OrderAction = ({ order, success, setSuccess }) => {
  const [address, setAddress] = useState('')
  const [OpenAdd, setOpenAdd] = useState(false)

  const addAddressToOrder = async (e) => {
    e.preventDefault()
    try {
      await axios.patch('/api/order/update-adresss/' + order?._id, {
        address: address,
        status: 'ordered',
      })
    } catch (error) {
      console.log(error)
    }
    setSuccess(true)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSuccess(false)
    }, 2000)
    return () => clearInterval(interval)
  }, [success])

  return (
    <div>
      <button
        className='bg-green-500 capitalize text-xl px-3 py-2 text-white rounded-sm mt-10 font-serif'
        onClick={() => setOpenAdd(true)}
      >
        add your address
      </button>
      {OpenAdd && (
        <div className='fixed top-0 right-0 left-0 bottom-0 '>
          <div className='flex items-center justify-center md:mt-40 mt-20'>
            <div className='overlay'></div>
            {success ? (
              <div className="bg-white relative space-y-3 p-20 border-2 border-gray-200 text-center'">
                <i
                  className='fa-solid fa-xmark absolute top-2 right-3 text-red-500 text-2xl font-bold cursor-pointer'
                  onClick={() => setOpenAdd(false)}
                ></i>
                <span className='text-2xl font-bold text-green-400'>
                  Ordered Success!
                </span>
              </div>
            ) : (
              <form
                className='bg-white relative space-y-3 p-20 border-2 border-gray-200 text-center'
                onSubmit={(e) => addAddressToOrder(e)}
              >
                <i
                  className='fa-solid fa-xmark absolute top-2 right-3 text-red-500 text-2xl font-bold cursor-pointer'
                  onClick={() => setOpenAdd(false)}
                ></i>
                <h3 className='capitalize text-3xl font-bold text-purple-500'>
                  your address here!
                </h3>
                <TextField
                  placeHolder='Address'
                  type='text'
                  setOption={setAddress}
                />

                <button
                  className='capitalize text-white bg-green-500 text-2xl px-2 py-1 rounded-md'
                  type='submit'
                >
                  send
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
