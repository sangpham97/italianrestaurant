import React from 'react'
import { Pizza } from '../DummyData'

export default function MenuPizza() {
  return (
    <div className='mx-auto max-w-screen-lg py-20'>
      <div className='grid grid-cols-1 md:grid-cols-6 gap-6 p-4'>
        <div className='md:col-span-3'>
          <h4 className='text-5xl font-bold capitalize mb-20 underline'>
            pizza
          </h4>
          <ul className='space-y-4'>
            {Pizza.map((item) => {
              return (
                <li className='flex justify-between' key={item.name}>
                  <article className='space-y-2 w-72 md:w-80'>
                    <h3 className='text-2xl md:text-3xl font-bold'>
                      {item.name}
                    </h3>
                    <p className='text-gray-600 tracking-normal font-thin max-w-sm'>
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
        <div className='md:col-span-3'>
          <img
            src='https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic62-free-img.jpg'
            alt=''
            className='rounded-lg menu-image md:w-fit w-full'
          />
        </div>
      </div>
    </div>
  )
}
