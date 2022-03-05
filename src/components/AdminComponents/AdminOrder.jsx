import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function AdminOrder() {
  const { user } = useContext(AuthContext)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get('/api/order/allorder/' + user._id)
        setOrders(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getOrders()
  }, [])

  const handleDelete = async (orderId) => {
    try {
      await axios.delete('/api/order/delete/' + orderId)
      const res = await axios.get('/api/order/allorder/' + user._id)
      setOrders(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='p-8 mt-6 lg:mt-0 rounded shadow bg-white w-full'>
      {orders.length !== 0 ? (
        <table className='w-full py-4'>
          <thead className='border-2 border-gray-300'>
            <tr>
              <th
                data-priority='1'
                className='border-2 border-gray-300 hidden md:block'
              >
                OrderId
              </th>
              <th data-priority='2' className='border-2 border-gray-300'>
                Adress
              </th>
              <th data-priority='2' className='border-2 border-gray-300'>
                Status
              </th>
              <th data-priority='2' className='border-2 border-gray-300'>
                Total
              </th>
              <th data-priority='2' className='border-2 border-gray-300'>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {orders.map((order) => {
              return (
                <tr className='border-2 border-gray-300' key={order._id}>
                  <td className='border-2 border-gray-300 hidden md:block'>
                    {order._id}
                  </td>
                  <td className='border-2 border-gray-300'>
                    {order.address ? order.address : 'None'}
                  </td>
                  <td className='border-2 border-gray-300'>{order.status}</td>
                  <td className='border-2 border-gray-300'>{order.total}$</td>
                  <td
                    className='border-2 border-gray-300 text-red-600 cursor-pointer'
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <span className='text-4xl font-bold'>No Order</span>
      )}
    </div>
  )
}
