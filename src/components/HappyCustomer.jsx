import React from 'react'
import { Customers } from '../DummyData'

export default function HappyCustomer() {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 py-20 px-5'>
        <div className='col-span-1 flex items-end justify-center pb-24'>
          <h2 className='text-5xl md:text-6xl font-serif capitalize'>
            happy customers...
          </h2>
        </div>
        {Customers.map((customer) => {
          return (
            <div
              className='col-span-1 text-center space-y-7 flex flex-col items-center justify-center md:p-4'
              key={customer.id}
            >
              <img src={customer.image} alt={customer.id} />
              <h3 className='text-2xl tracking-wide italic font-serif'>
                "{customer.comments}"
              </h3>
              <span>- {customer.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
