import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Register() {
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    await axios.post('/api/auth/register', {
      username: username,
      email: email,
      password: password,
    })
    navigate('/login')
  }
  return (
    <>
      <SEO title='/register' description='register' />
      <section className='min-h-screen flex flex-col my-10'>
        <div className='flex flex-1 items-center justify-center'>
          <div className='rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center'>
            <form className='text-center' onSubmit={(e) => handleRegister(e)}>
              <h1 className='font-bold tracking-wider text-3xl mb-8 w-full text-gray-600'>
                Register
              </h1>
              <div className='py-2 text-left'>
                <input
                  type='email'
                  className=' border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 '
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='py-2 text-left'>
                <input
                  type='name'
                  className=' border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 '
                  placeholder='Name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='py-2 text-left'>
                <input
                  type='password'
                  className=' border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 '
                  placeholder='Password'
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className='py-2'>
                <button
                  type='submit'
                  className='border-2 border-gray-100 focus:outline-none bg-orange-500 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-orange-600'
                >
                  Create
                </button>
              </div>
            </form>
            <div className='text-center'>
              <a href='#' className='hover:underline'>
                Forgot password?
              </a>
            </div>
            <div className='text-center mt-12'>
              <span>Don't have an account?</span>
              <Link
                to='/login'
                className='font-light text-md text-indigo-600 underline  hover:text-indigo-800'
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
