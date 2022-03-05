import axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import useFetch from '../FetchData'

export default function AdminUser() {
  const { user } = useContext(AuthContext)
  const { data, isFetching, setData } = useFetch('/api/auth/users/' + user._id)

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/auth/users/${user._id}/${id}`)
      const res = await axios.get('/api/auth/users/' + user._id)
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {isFetching && <span>Loading...</span>}
      {data && (
        <div className='p-8 mt-6 lg:mt-0 rounded shadow bg-white w-full'>
          <table className='w-full py-4'>
            <thead className='border-2 border-gray-300'>
              <tr>
                <th data-priority='1' className='border-2 border-gray-300'>
                  Name
                </th>
                <th data-priority='2' className='border-2 border-gray-300'>
                  Email
                </th>
                <th data-priority='2' className='border-2 border-gray-300'>
                  Role
                </th>
                <th data-priority='2' className='border-2 border-gray-300'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {data.map((user) => (
                <tr className='border-2 border-gray-300' key={user._id}>
                  <td className='border-2 border-gray-300'>{user.username}</td>
                  <td className='border-2 border-gray-300'>{user.email}</td>
                  <td className='border-2 border-gray-300'>
                    {user.admin ? 'Admin' : 'Normal'}
                  </td>
                  <td
                    className='border-2 border-gray-300 text-red-500 cursor-pointer'
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
