import React from 'react'
import './HomePage.css'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='homepage'>
        <Navbar/>
        <div className="content-container">
            <Outlet/>
        </div>
      
    </div>
  )
}
