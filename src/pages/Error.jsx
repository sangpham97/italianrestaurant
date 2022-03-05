import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext, useGlobalContext } from '../context/GlobalContext'

export default function Error() {
  const { setHandleOrder } = useGlobalContext(AppContext)
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/')
    setHandleOrder(false)
  }

  return (
    <div
      className='
    flex
    items-center
    justify-center
  
  '
    >
      <div className='px-40 py-20 bg-white rounded-md shadow-xl z-40'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-blue-600 text-9xl'>Attention!</h1>
          <h6 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
            <span className='text-red-500'>Oops!</span> you are not login
          </h6>
          <p className='mb-8 text-center text-gray-500 md:text-lg'>
            Please login first to order!
          </p>
          <span
            className='px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 cursor-pointer'
            onClick={() => handleClose()}
          >
            Back
          </span>
        </div>
      </div>
    </div>
  )
}
