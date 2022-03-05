import React from 'react'
import Button from './Button'

export default function Welcome() {
  return (
    <div className='mx-auto max-w-screen-xl py-24'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div className='col-span-1 flex flex-col justify-center items-center'>
          <article className='px-1 space-y-6 text-center md:text-right mb-10 md:mb-0'>
            <h4 className='text-2xl capitalize italic font-normal'>
              country's most loved!
            </h4>
            <h2 className='text-4xl font-bold capitalize'>welcome</h2>
            <h3 className='capitalize tracking-normal text-3xl font-thin max-w-sm'>
              We Are Locally Crafted Food And Wine Serving since 1978
            </h3>
            <p className='text-gray-800 max-w-sm'>
              Congue, gravida. Placeat nibh sunt semper elementum anim! Integer
              lectus debitis auctor. Molestias vivamus eligendi ut, cupidatat
              nisl iaculis etiam! Laboris aenean .
            </p>
            <div>
              <Button name='more about us' arrow='true' to='/about-us' />
            </div>
          </article>
        </div>
        <div className='md:col-span-1 md:block hidden'>
          <img
            src='https://websitedemos.net/italian-restaurant-01/wp-content/uploads/sites/288/2020/01/Pizza-slice.jpg'
            alt=''
            className='rounded-md'
          />
        </div>
        <div className='col-span-1'>
          <img
            src='https://websitedemos.net/italian-restaurant-01/wp-content/uploads/sites/288/2020/01/food-table-meet.jpg'
            alt=''
            className='w-full md:w-fit px-5 md:px-0 rounded-md'
          />
        </div>
      </div>
    </div>
  )
}
