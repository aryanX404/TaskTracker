import React from 'react'
import './HomePage.css'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function HomePage({isLogin, setIsLogin}) {
  return (
    <div className='homepage'>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
        <div className="content-container">
            <Outlet/>
        </div>
      
    </div>
  )
}
