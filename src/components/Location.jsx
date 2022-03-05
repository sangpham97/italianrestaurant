import React from 'react'

export default function Location() {
  const locations = [
    {
      name: 'Park Street, 12th floor, NY Lane 2 ',
    },
    {
      name: '123 Fifth Avenue, New York, NY 10160',
    },
    {
      name: '2nd Bougainvillea, New York, NY 10160  ',
    },
  ]

  return (
    <div className='text-center md:text-left'>
      <h4 className='text-2xl font-sans capitalize'>our locations:</h4>
      <ul className='space-y-4 mt-8 text-2xl md:text-xl font-serif italic mb-10'>
        {locations.map((location) => (
          <li
            key={location.name}
            className='flex items-center flex-col md:flex-row'
          >
            <i className='fas fa-map-marker-alt text-orange-600  mr-1 md:mb-0 mb-5'></i>
            <span>{location.name}</span>
          </li>
        ))}
      </ul>
      <div className='md:block flex items-center justify-center'>
        <img
          src='https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/divider-free-img.png'
          alt=''
        />
      </div>
      <div className='space-y-3 mt-5 md:mt-10 text-center md:text-left'>
        <h4 className='text-2xl font-sans capitalize'>Check Reviews On</h4>
        <ul className='flex space-x-5 md:space-x-2 cursor-pointer items-center justify-center md:justify-start'>
          <i className='fab fa-facebook-f bg-orange-500 text-white px-4 py-3 rounded-full'></i>
          <i className='fab fa-twitter bg-orange-500 text-white p-3 rounded-full'></i>
        </ul>
      </div>
    </div>
  )
}
