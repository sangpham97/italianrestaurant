import React from 'react'
import AdminAddFood from '../components/AdminComponents/AdminAddFood'
import AdminFood from '../components/AdminComponents/AdminFood'
import AdminLayout from '../components/AdminComponents/AdminLayout'

export default function AdminFoodPage() {
  return (
    <AdminLayout>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-2'>
        <div className='lg:col-span-2'>
          <AdminAddFood />
        </div>
        <div className='lg:col-span-3'>
          <AdminFood />
        </div>
      </div>
    </AdminLayout>
  )
}
