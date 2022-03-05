import React from 'react'
import AdminNav from './AdminNav'
import AdminSideBar from './AdminSideBar'

export default function AdminLayout({ children }) {
  return (
    <div>
      <AdminNav />
      <div className='flex flex-col md:flex-row min-h-screen'>
        <AdminSideBar />
        {children}
      </div>
    </div>
  )
}
