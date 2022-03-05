import React from 'react'
import AboutDesc from '../components/AboutDesc'
import BannerTemplate from '../components/BannerTemplate'
import OurChef from '../components/OurChef'
import RestaurantAmenties from '../components/RestaurantAmenties'
import SEO from '../components/SEO'
import AboutBg from '../images/about-bg.jpg'

export default function About() {
  return (
    <div>
      <SEO
        title='About Us'
        description='talk about our founder and our services'
      />
      <BannerTemplate bgImage={AboutBg} height='auto'>
        <div
          className='flex justify-start ml-10'
          style={{ paddingTop: '12.5%', paddingBottom: '12.5%' }}
        >
          <h2 className='text-white capitalize text-5xl md:text-7xl font-bold italic underline py-12'>
            about us
          </h2>
        </div>
      </BannerTemplate>
      <AboutDesc />
      <OurChef />
      <RestaurantAmenties />
    </div>
  )
}
