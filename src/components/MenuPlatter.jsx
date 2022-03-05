import React from 'react'
import { Platter } from '../DummyData'

export default function MenuPlatter() {
  return (
    <div className='mx-auto max-w-screen-lg py-20'>
      <div className='grid grid-cols-1 md:grid-cols-6 gap-2 p-4'>
        <div className='md:col-span-3 '>
          <img
            src='https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/platter-img.jpg'
            alt=''
            className='rounded-lg menu-image w-full md:w-fit '
          />
        </div>
        <div className='md:col-span-3 p-3'>
          <h4 className='text-5xl font-bold capitalize mb-10 md:mb-20 underline'>
            platter
          </h4>
          <ul className='space-y-4'>
            {Platter.map((item) => {
              return (
                <li className='flex justify-between' key={item.name}>
                  <article className='space-y-2 w-72 md:w-80'>
                    <h3 className='text-2xl md:text-3xl font-bold '>
                      {item.name}
                    </h3>
                    <p className='text-gray-600 tracking-normal font-thin'>
                      {item.desc}
                    </p>
                  </article>
                  <h4 className='text-xl md:text-3xl font-bold'>
                    ${item.price}
                  </h4>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
