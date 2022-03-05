import axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import useFetch from '../FetchData'

export default function AdminContact() {
  const { user } = useContext(AuthContext)
  const { data, isFetching } = useFetch('/api/contact/allcontact/' + user._id)

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/contact/delete/${id}/${user._id}`)
    } catch (error) {
      console.log(error)
    }
    location.reload()
  }

  return (
    <div className='p-8 mt-6 lg:mt-0 rounded shadow bg-white w-full'>
      {isFetching && loading}
      {data && (
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
                Number
              </th>
              <th data-priority='2' className='border-2 border-gray-300'>
                Message
              </th>
              <th data-priority='2' className='border-2 border-gray-300'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {data.map((guest) => (
              <tr className='border-2 border-gray-300' key={guest._id}>
                <td className='border-2 border-gray-300'>{guest.name}</td>
                <td className='border-2 border-gray-300'>{guest.email}</td>
                <td className='border-2 border-gray-300'>{guest.number}</td>
                <td className='border-2 border-gray-300'>{guest.text}</td>
                <td
                  className='border-2 border-gray-300 text-red-600 cursor-pointer'
                  onClick={() => handleDelete(guest._id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
