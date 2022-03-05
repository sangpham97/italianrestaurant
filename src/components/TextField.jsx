import React from 'react'

export default function TextField({ type, placeHolder, setOption }) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className='w-full py-2 p-2 border-2 border-gray-200'
      min='1'
      onChange={(e) => setOption(e.target.value)}
    />
  )
}
