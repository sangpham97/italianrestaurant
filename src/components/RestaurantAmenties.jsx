import React from 'react'
import { Amentities } from '../DummyData'

export default function RestaurantAmenties() {
  return (
    <div className='mx-auto max-w-screen-xl pb-40 pt-20 space-y-5'>
      <h2 className='text-3xl px-5 md:text-4xl capitalize underline mb-12'>
        Restaurant Amenities
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-4 px-10 md:px-20 gap-6'>
        {Amentities.map((item) => {
          return (
            <div
              className='col-span-1 flex items-center text-xl md:text-3xl'
              key={item.name}
            >
              <i className={item.icon}></i>
              <h4 className=' capitalize tracking-wide font-serif md:font-thin'>
                {item.name}
              </h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}
