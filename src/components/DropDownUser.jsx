import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logout } from '../context/AuthAction'
import { AuthContext } from '../context/AuthContext'
import { AppContext, useGlobalContext } from '../context/GlobalContext'

export default function DropDownUser({ openUser, setOpenUser }) {
  const { dispatch, user } = useContext(AuthContext)
  const { OpenCart, setCartItems, amount, setAmount } =
    useGlobalContext(AppContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(Logout())
    setOpenUser(false)
    setCartItems([])
    setAmount(0)
    navigate('/')
  }

  const navigateAdmin = () => {
    navigate('/admin/user')
    setOpenUser(false)
  }

  const navigateCart = () => {
    OpenCart()
    // console.log(open)
    setOpenUser(false)
  }

  const navigateOrder = (userId) => {
    navigate('/myorder/' + userId)
    setOpenUser(false)
  }

  return (
    <>
      {openUser && (
        <div className='origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40'>
          <div className='py-1 cursor-pointer'>
            {user.admin === true && (
              <span
                className='text-gray-700 block px-4 py-2 text-sm'
                onClick={() => navigateAdmin()}
              >
                Admin Darshboard
              </span>
            )}
            {user.admin === false && (
              <span
                className='text-gray-700 block px-4 py-2 text-sm'
                onClick={() => navigateCart()}
              >
                My Cart{' '}
                <span className='rounded-full text-white bg-blue-400 py-1 px-2'>
                  {amount}
                </span>
              </span>
            )}
            {user.admin === false && (
              <span
                className='text-gray-700 block px-4 py-2 text-sm'
                onClick={() => navigateOrder(user._id)}
              >
                My Order
              </span>
            )}
            <span
              className='text-gray-700 block px-4 py-2 text-sm'
              onClick={() => handleLogout()}
            >
              Log out
            </span>
          </div>
        </div>
      )}
    </>
  )
}
