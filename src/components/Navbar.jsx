import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { NavLinks } from '../DummyData'
import Cart from './Cart'
import DropDownUser from './DropDownUser'

export default function Navbar() {
  const path = useLocation()

  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const { user } = useContext(AuthContext)

  const UserFirstLetter = (username) => {
    const arr = username.split('')
    return arr[0]
  }

  // console.log(user)

  const [openUser, setOpenUser] = useState(false)

  const ActiveLink = (link, login) => {
    if (login) {
      if (link === path.pathname) {
        return 'cursor-pointer uppercase bg-black md:text-lg font-semibold px-5 py-3 text-white rounded-full '
      } else {
        return 'cursor-pointer uppercase bg-orange-500 md:text-lg font-semibold px-5 py-3 text-white rounded-full hover:bg-black '
      }
    } else {
      if (link === path.pathname) {
        return 'text-black cursor-pointer border-t-2 border-gray-200 py-2 md:border-t-0 md:py-0'
      } else {
        return 'border-t-2 border-gray-200 py-2 md:border-t-0 md:py-0'
      }
    }
  }

  const handleNavigate = (link) => {
    navigate(link)
    setIsOpen(false)
  }

  return (
    <header className=' bg-white shadow-xl border-b-2'>
      <nav className='flex justify-between items-center mx-auto max-w-screen-xl flex-wrap'>
        <Link to='/' className='flex-shrink-0'>
          <img
            src='https://websitedemos.net/italian-restaurant-01/wp-content/uploads/sites/288/2018/10/fresco-free-logo-1.svg'
            alt=''
            className='w-28 h-20 '
          />
        </Link>
        <div className='block md:hidden p-5' onClick={() => setIsOpen(!isOpen)}>
          <i className=' fas fa-bars text-xl text-orange-500 mr-5 cursor-pointer'></i>
        </div>
        <div
          className={
            isOpen
              ? 'w-full block md:flex md:items-center md:w-auto md:space-x-5'
              : 'w-full hidden md:flex md:items-center md:w-auto md:space-x-5'
          }
        >
          {/* Links */}
          <ul className='md:flex md:space-x-9 text-md capitalize text-orange-500 font-semibold'>
            {NavLinks.map((item) => (
              <li key={item.id} className={ActiveLink(item.link)}>
                <span
                  onClick={() => handleNavigate(item.link)}
                  className='cursor-pointer hover:text-black md:pl-0 pl-2'
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
          {/* End Links */}
          {/* Button */}
          <div className='relative  flex items-center p-2 border-t-2 border-gray-200 md:block md:p-2 md:border-t-0'>
            {user ? (
              <>
                <span
                  className='cursor-pointer uppercase bg-orange-500 md:text-lg font-semibold px-5 py-3 text-white rounded-full'
                  onClick={() => setOpenUser(!openUser)}
                >
                  {UserFirstLetter(user.username)}
                </span>
                <DropDownUser openUser={openUser} setOpenUser={setOpenUser} />
              </>
            ) : (
              <span
                className={ActiveLink('/login', 'login')}
                onClick={() => handleNavigate('/login')}
              >
                login
              </span>
            )}
          </div>
        </div>
      </nav>
      <Cart />
    </header>
  )
}
