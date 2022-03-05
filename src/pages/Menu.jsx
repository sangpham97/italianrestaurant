import React from 'react'
import BannerTemplate from '../components/BannerTemplate'
import MenuPasta from '../components/MenuPasta'
import MenuPizza from '../components/MenuPizza'
import MenuPlatter from '../components/MenuPlatter'
import SEO from '../components/SEO'
import MenuBg from '../images/menu_bg.jpg'

export default function Menu() {
  return (
    <div>
      <SEO title='Menu' description='let take a look our menu' />
      <BannerTemplate bgImage={MenuBg} height='auto'>
        <div
          className='flex items-center justify-start ml-10'
          style={{ paddingTop: '12.5%', paddingBottom: '12.5%' }}
        >
          <h2 className='text-white text-6xl md:text-8xl capitalize font-serif underline italic py-12 md:py-0'>
            menu
          </h2>
        </div>
      </BannerTemplate>
      <MenuPasta />
      <MenuPizza />
      <MenuPlatter />
    </div>
  )
}
