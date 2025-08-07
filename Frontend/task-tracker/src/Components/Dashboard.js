import React from 'react'
import './Dashboard.css'

export default function Dashboard({isLogin}) {
  return (
    <>
    <div className="dashboard-container">
      <div className='title'><h1>Dashboard</h1></div>
      {isLogin?(<>
        <div>Welcome back! <span>{localStorage.getItem('userName')}</span></div>
        <div className="containers">
          <div className="container">
            <h2>Tasks</h2>
            <p>Manage your tasks here.</p>
          </div>
          <div className="container">
            <h2>Trackers</h2>
            <p>View and manage your trackers.</p>
          </div>
          <div className="container">
            <h2>Profile</h2>
            <p>Update your profile information.</p>
          </div>
        </div>
        </>
      ):(<>
        <div>Please log in to access your dashboard.</div>
        <div className="containers">
          <div className="container">
            <h2>Tasks</h2>
            <p>Manage your tasks here.</p>
          </div>
          <div className="container">
            <h2>Trackers</h2>
            <p>View and manage your trackers.</p>
          </div>
          <div className="container">
            <h2>Profile</h2>
            <p>Update your profile information.</p>
          </div>
        </div>
      
        </>
      )}
    </div>
    
    </>
  )
}
