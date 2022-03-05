import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ name, arrow, to }) {
  return (
    <Link
      className='uppercase bg-orange-500 md:text-lg font-semibold px-5 py-3 text-white rounded-full hover:bg-black text-sm'
      to={to}
    >
      {name}
      {arrow && <i className='fas fa-arrow-down pl-2'></i>}
    </Link>
  )
}
