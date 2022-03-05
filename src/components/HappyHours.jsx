import React from 'react'
import Button from './Button'

export default function HappyHours() {
  return (
    <div className='mx-auto max-w-screen-xl py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='col-span-1'>
          <img
            src='https://websitedemos.net/italian-restaurant-01/wp-content/uploads/sites/288/2018/09/pic34-free-img.jpg'
            alt=''
            className='w-full px-8 md:px-0 rounded-md'
          />
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
          <article className='px-3 space-y-7 text-center md:text-left'>
            <h5 className='font-normal text-2xl capitalize'>
              Wednesdays Means
            </h5>
            <h2 className='font-bold text-6xl capitalize'>Happy Hours!</h2>
            <h3 className='font-normal tracking-wide text-3xl'>
              Half Price Bottles of Wine and Six Tasty Lunches for $9
            </h3>
            <p className='text-gray-800 tracking-wide'>
              Congue, gravida. Placeat nibh sunt semper elementum anim! Integer
              lectus debitis auctor. Nunc quisquam adipisicing leo, tempora
              ipsam pede nostrum. Turpis tempus fusce, sed, orci eligendi
            </p>
            <div>
              <Button name='discover offer' to='/about' />
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
