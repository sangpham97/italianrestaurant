import React from 'react'
import BannerHome from '../components/BannerHome'
import HappyCustomer from '../components/HappyCustomer'
import HappyHours from '../components/HappyHours'
import OurMenu from '../components/OurMenu'
import SEO from '../components/SEO'
import Welcome from '../components/Welcome'

export default function Home() {
  return (
    <div>
      <SEO title='Home' description='our home ' />
      <BannerHome />
      <Welcome />
      <OurMenu />
      <HappyHours />
      <HappyCustomer />
    </div>
  )
}
