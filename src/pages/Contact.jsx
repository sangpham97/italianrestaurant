import React from 'react'
import BannerTemplate from '../components/BannerTemplate'
import ContactForm from '../components/ContactForm'
import Location from '../components/Location'
import SEO from '../components/SEO'
import ContactBg from '../images/contact_bg.jpg'

export default function Contact() {
  return (
    <>
      <SEO title='Contact' description='contact us now italiant foods' />
      <div className=' bg-pink-100'>
        <BannerTemplate bgImage={ContactBg} height='auto'>
          <div
            className=' space-y-7 md:ml-0 ml-5'
            style={{ paddingTop: '12.5%', paddingBottom: '12.5%' }}
          >
            <h3 className='text-4xl md:text-5xl font-bold capitalize italic underline text-white md:ml-10'>
              book a table
            </h3>
            <h3 className='text-2xl md:text-6xl font-serif capitalize italic underline text-white md:ml-10'>
              +123-456-1010
            </h3>
          </div>
        </BannerTemplate>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-5 mx-auto max-w-screen-lg'>
          <div className='md:col-span-2  flex flex-col justify-center py-20'>
            <Location />
          </div>
          <div className='md:col-span-3 py-20'>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
