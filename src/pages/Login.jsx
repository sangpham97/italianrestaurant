import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import { LoginAction } from '../context/AuthApiCalls'
import { AuthContext } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const { dispatch, isFetching } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    LoginAction({ email: email, password: password }, dispatch)
    navigate('/')
  }

  return (
    <>
      <SEO title='Login' description='login our page' />
      <section className='min-h-screen flex flex-col my-10'>
        <div className='flex flex-1 items-center justify-center'>
          <div className='rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center'>
            <form className='text-center' onSubmit={(e) => handleLogin(e)}>
              <h1 className='font-bold tracking-wider text-3xl mb-8 w-full text-gray-600'>
                Sign in
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
                  Sign In
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
                to='/register'
                className='font-light text-md text-indigo-600 underline  hover:text-indigo-800'
              >
                Create One
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
