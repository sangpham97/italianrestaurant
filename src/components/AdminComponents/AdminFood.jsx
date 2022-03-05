import React, { useContext, useEffect } from 'react'
import useFetch from '../FetchData'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

export default function AdminFood() {
  const { data, isFetching, setData } = useFetch('/api/food/allfood')
  const { user } = useContext(AuthContext)

  const handleDeleteFood = async (e, id) => {
    e.preventDefault()
    try {
      await axios.delete(`/api/food/delete/${id}/${user._id}`)
      const res = await axios.get('/api/food/allfood')
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='md:p-8 p-2 mt-6 lg:mt-0 rounded shadow bg-white w-full '>
      <table className='w-full py-0 md:py-4 '>
        <thead className='border-2 border-gray-300'>
          <tr>
            <th data-priority='1' className='border-2 border-gray-300'>
              Name
            </th>
            <th data-priority='2' className='border-2 border-gray-300'>
              Price
            </th>
            <th data-priority='1' className='border-2 border-gray-300'>
              Description
            </th>
            <th data-priority='2' className='border-2 border-gray-300'>
              Type
            </th>
            <th data-priority='1' className='border-2 border-gray-300'>
              Image
            </th>
            <th data-priority='1' className='border-2 border-gray-300'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {isFetching && <span>Loading...</span>}
          {data &&
            data.map((food) => (
              <tr className='border-2 border-gray-300' key={food._id}>
                <td className='border-2 border-gray-300'>{food.name}</td>
                <td className='border-2 border-gray-300'>{food.price}$</td>
                <td className='border-2 border-gray-300'>{food.desc}</td>
                <td className='border-2 border-gray-300'>{food.type}</td>
                <td className='border-2 border-gray-300'>
                  <img src={food.image} alt='' className='max-h-32 w-full' />
                </td>
                <td
                  className='border-2 border-gray-300 text-red-600 cursor-pointer'
                  onClick={(e) => handleDeleteFood(e, food._id)}
                >
                  Delete
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
