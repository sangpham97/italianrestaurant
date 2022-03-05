import React from 'react'

export default function AdminNav() {
  return (
    <nav
      aria-label='menu nav'
      className='bg-gray-800 pt-2 md:py-2 pb-1 px-1 mt-0 md:h-auto w-full z-20 border-b-2 border-gray-600 shadow-2xl'
    >
      <div className='flex flex-wrap items-center justify-between'>
        <div className='flex flex-shrink md:w-1/3 justify-center md:justify-start text-white'>
          <span className='text-2xl pl-2 font-sans'>Admin Darshboard</span>
        </div>
        <div className='flex md:w-1/3 justify-end  text-white px-2 '>
          <span className='relative w-full'>
            <input
              aria-label='search'
              type='search'
              id='search'
              placeholder='Search'
              className='w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal'
            />
            <div
              className='absolute search-icon'
              style={{ top: '1rem', left: '.8rem' }}
            >
              <svg
                className='fill-current pointer-events-none text-white w-4 h-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
              </svg>
            </div>
          </span>
        </div>
      </div>
    </nav>
  )
}
