import './App.css';
import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Trackers from './Components/Trackers'
import Profile from './Components/Profile'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import HomePage from './Components/HomePage'

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem("token") !== null;
  });


  return(
    <div className='app'>
      
      <Routes>
        <Route path='/' element={<HomePage isLogin={isLogin} setIsLogin={setIsLogin}/>}>
          <Route path='/login' element={<Login setIsLogin={setIsLogin}/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard isLogin={isLogin}/>}/>
          <Route path='/trackers' element={<Trackers/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    
    </div>
  );
}

export default App;
