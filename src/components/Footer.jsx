import React from 'react'

export default function Footer() {
  return (
    <footer className='footer_background-image pb-10'>
      <article className='flex items-center justify-center space-y-7 flex-col text-center'>
        <i className='fas fa-phone text-orange-400 text-5xl'></i>
        <h2 className='text-5xl font-semibold text-white font-serif'>
          Call for All Your​ Reservations
        </h2>
        <h3 className='text-4xl font-serif text-white'>+123-456-1010</h3>
        <span className='text-white capitalize'>
          copyright &copy; italian restaurant | Powered by italian restaurant
        </span>
      </article>
    </footer>
  )
}
