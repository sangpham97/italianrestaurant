import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function AdminSideBar() {
  const location = useLocation()

  const activeClass = (link) => {
    if (link === location.pathname) {
      return 'block py-1 md:py-3 pl-1 align-middle text-white border-b-2 border-blue-500'
    } else {
      return 'block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500 '
    }
  }

  return (
    <nav aria-label='alternative nav'>
      <div className='bg-gray-800 shadow-xl h-20 md:relative md:h-full z-50 w-full md:w-48 content-center '>
        <div className='md:mt-12 md:w-48 md:absolute md:left-0 md:top-0 content-center md:content-start text-left justify-between'>
          <ul className='list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left'>
            <li className='mr-3 flex-1'>
              <Link to='/admin/user' className={activeClass('/admin/user')}>
                <i className='fas fa-user pr-0 md:pr-3' />
                <span className='pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block'>
                  Users
                </span>
              </Link>
            </li>
            <li className='mr-3 flex-1'>
              <Link
                to='/admin/contact'
                className={activeClass('/admin/contact')}
              >
                <i className='fa fa-phone pr-0 md:pr-3' />
                <span className='pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block'>
                  Contact
                </span>
              </Link>
            </li>
            <li className='mr-3 flex-1'>
              <Link to='/admin/order' className={activeClass('/admin/order')}>
                <i className='fas fa-chart-area pr-0 md:pr-3 ' />
                <span className='pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block '>
                  Order
                </span>
              </Link>
            </li>
            <li className='mr-3 flex-1'>
              <Link to='/admin/food' className={activeClass('/admin/food')}>
                <i className='fa fa-wallet pr-0 md:pr-3' />
                <span className='pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block'>
                  Foods
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
