import React from 'react'

export default function BannerHome() {
  return (
    <div className='banner-home'>
      <div className='flex items-center justify-center'>
        <article className='text-center space-y-8'>
          <h1 className='text-white text-5xl md:text-9xl font-bold capitalize'>
            fresco.
          </h1>
          <h3 className='text-4xl capitalize text-orange-600'>
            italian specialities
          </h3>
          <h4 className='text-2xl capitalize text-white'>
            good food | good wine
          </h4>
        </article>
      </div>
    </div>
  )
}
