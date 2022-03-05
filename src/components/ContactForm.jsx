import axios from 'axios'
import React, { useState } from 'react'
import TextField from './TextField'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [mess, setMess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post('/api/contact/create', {
        name: name,
        email: email,
        number: number,
        text: mess,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='shadow-md bg-white p-7 rounded-md'>
      <h4 className='text-2xl font-semibold capitalize '>
        For Online Inquiries
      </h4>
      <span className='text-gray-600'>
        Excepteur, porttitor provident repudiandae nisi nisi. Lorem cupiditate.{' '}
      </span>

      <form className='mt-10 space-y-3' onSubmit={(e) => handleSubmit(e)}>
        <TextField type='text' placeHolder='Your name' setOption={setName} />
        <TextField type='email' placeHolder='Email' setOption={setEmail} />
        <TextField type='number' placeHolder='Number' setOption={setNumber} />
        <textarea
          className='mb-5 w-full p-1 border-2 border-gray-200'
          rows='6'
          placeholder='Message'
          onChange={(e) => setMess(e.target.value)}
        ></textarea>
        <button
          className='bg-orange-500 text-md font-thin capitalize hover:bg-orange-400 rounded-full p-2 text-white'
          type='submit'
        >
          send enquires
        </button>
      </form>
    </div>
  )
}
