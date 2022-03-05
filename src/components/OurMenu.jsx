import React, { useContext, useEffect, useState } from 'react'
import BannerTemplate from './BannerTemplate'
import OurMenuBg from '../images/our_menu_bg.jpg'
// import { OurMenuProducts } from '../DummyData'
import useFetch from './FetchData'
import { AppContext, useGlobalContext } from '../context/GlobalContext'
import { AuthContext } from '../context/AuthContext'
import Error from '../pages/Error'
import { useNavigate } from 'react-router-dom'

export default function OurMenu() {
  const { handleOrder, setHandleOrder, BuyItem } = useGlobalContext(AppContext)
  const { user } = useContext(AuthContext)
  const [visible, setVisible] = useState(3)
  const [full, setFull] = useState(false)
  const [type, setType] = useState('all')
  const [url, setUrl] = useState('/api/food/allfood')
  const { data } = useFetch(url)

  const Order = (item) => {
    if (user) {
      BuyItem(item)
    } else {
      setHandleOrder(true)
    }
  }

  const handleShowMore = (data) => {
    setVisible((prevValue) => prevValue + 3)
    if (data.length - visible <= 3) {
      setFull(true)
    }
  }

  const handleShowLess = () => {
    setVisible(3)
    setFull(false)
  }

  return (
    <>
      <div className='mx-auto max-w-2xl py-10'>
        <article className='flex items-center justify-center flex-col space-y-4 text-center'>
          <h2 className='font-bold text-5xl capitalize'> our menu</h2>
          <h4 className='font-normal text-2xl'>
            Quality Ingredients, Tasty Meals
          </h4>
          <p className=' text-gray-800 tracking-normal'>
            Congue, gravida. Placeat nibh sunt semper elementum anim! Integer
            lectus debitis auctor. Molestias vivamus eligendi ut, cupidatat nisl
            iaculis etiam! Laboris aenean .
          </p>
        </article>
      </div>
      <BannerTemplate bgImage={OurMenuBg} height='auto'>
        {handleOrder ? (
          <Error />
        ) : (
          <>
            <SelectType setType={setType} setUrl={setUrl} type={type} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-lg py-16 px-10 lg:px-0'>
              {data &&
                data.slice(0, visible).map((item) => {
                  return (
                    <div className='md:col-span-1' key={item._id}>
                      <div className='border-2 border-orange-200 relative menu__product'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className=' w-full h-80'
                        />
                        <article className='text-center space-y-4 bg-white menu_desc'>
                          <h4 className='text-5xl capitalize font-semibold md:text-2xl'>
                            {item.name}
                          </h4>
                          <p className='text-gray-500 px-7 capitalize'>
                            {item.desc}
                          </p>
                          <div className='flex items-center justify-center flex-col'>
                            <h4 className='text-gray-600 font-bold border-t-2 border-b-2  border-black py-3 my-3 md:text-xl text-2xl'>
                              ${item.price}
                            </h4>
                            <button
                              className='text-md rounded-full capitalize p-2 bg-green-400 hover:bg-green-600 text-white'
                              onClick={() => Order(item)}
                            >
                              order now
                            </button>
                          </div>
                        </article>
                      </div>
                    </div>
                  )
                })}
            </div>
            {data && (
              <div className='flex items-center justify-center mb-5 text-xl'>
                {full ? (
                  <button
                    className='rounded-full px-4 py-2 bg-orange-500 text-white capitalize '
                    onClick={() => handleShowLess()}
                  >
                    show less <i className='fa-solid fa-arrow-up text-md'></i>
                  </button>
                ) : (
                  <button
                    className='rounded-full px-4 py-2 bg-orange-500 text-white capitalize '
                    onClick={() => handleShowMore(data)}
                  >
                    more food <i className='fa-solid fa-arrow-down text-md'></i>
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </BannerTemplate>
    </>
  )
}

export const SelectType = ({ setType, setUrl, type }) => {
  const navigate = useNavigate()

  const handleChange = (e) => {
    setType(e.target.value)
  }

  const QueryType = () => {
    if (type === 'all') {
      setUrl('/api/food/allfood')
      navigate('/')
    } else {
      setUrl('/api/food/allfood/?type=' + type)
      navigate('/?type=' + type)
    }
  }

  const options = [
    {
      name: 'All',
      value: 'all',
    },
    {
      name: 'Pizza',
      value: 'pizza',
    },
    {
      name: 'Platter',
      value: 'platter',
    },
    {
      name: 'Pasta',
      value: 'pasta',
    },
  ]
  return (
    <div className='flex items-center justify-center'>
      <select className='p-2 w-32' onChange={handleChange}>
        {options.map((item) => (
          <option
            value={item.value}
            key={item.value}
            onClick={() => QueryType()}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}
