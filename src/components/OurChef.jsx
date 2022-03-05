import React from 'react'
import BannerTemplate from './BannerTemplate'
import ChefBg from '../images/chef_bg.jpg'
import { Chefs } from '../DummyData'
import Button from './Button'

export default function OurChef() {
  return (
    <BannerTemplate bgImage={ChefBg} height='auto'>
      <div className='mx-auto max-w-screen-xl py-20'>
        <h3 className='text-center text-white text-6xl capitalize font-serif underline'>
          our chefs
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-6 my-10 px-5 md:px-0'>
          {Chefs.map((chef) => {
            return chef.id !== 4 ? (
              <div
                key={chef.id}
                className='col-span-2 relative border-2 border-orange-300 '
              >
                <div className='overlay'></div>
                <img
                  src={chef.image}
                  alt={chef.name}
                  className='w-full h-full'
                />
                <div className='space-y-2 capitalize text-white absolute bottom-3 text-center right-1/2 translate-x-1/2'>
                  <h4 className='text-2xl'>{chef.name}</h4>
                  <p className='text-lg'>{chef.role}</p>
                </div>
              </div>
            ) : (
              <div
                key={chef.id}
                className='col-span-3 relative border-2 border-orange-300'
              >
                <div className='overlay'></div>
                <img
                  src={chef.image}
                  alt={chef.name}
                  className='w-full h-full'
                />
                <div className='space-y-2 capitalize text-white absolute bottom-3 text-center right-1/2 translate-x-1/2'>
                  <h4 className='text-2xl'>{chef.name}</h4>
                  <p className='text-lg'>{chef.role}</p>
                </div>
              </div>
            )
          })}
          <div className='col-span-3 relative border-2 border-orange-300'>
            <div className='overlay'></div>
            <img
              src='https://websitedemos.net/italian-restaurant-01/wp-content/uploads/sites/288/2018/10/pic61-free-img-1.jpg'
              className='w-full h-full'
            />
            <div className='space-y-2 capitalize text-white absolute bottom-6 text-center right-1/2 translate-x-1/2'>
              <h4 className='text-lg md:text-xl my-5'>
                Looking for Management Interns
              </h4>
              <div>
                <Button name='apply today' arrow='true' to='/contact' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerTemplate>
  )
}
