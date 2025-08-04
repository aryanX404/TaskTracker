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
  const [isLogin, setIsLogin] = useState(false);
  if(!isLogin){
    localStorage.removeItem("username");
    localStorage.setItem("username","User");
  }
  return(
    <div className='app'>
      
      <Routes>
        <Route path='/' element={<HomePage isLogin={isLogin} setIsLogin={setIsLogin}/>}>
          <Route path='/login' element={<Login setIsLogin={setIsLogin}/>}/>
          <Route path='/signup' element={<SignUp isLogin={isLogin} setIsLogin={setIsLogin}/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/trackers' element={<Trackers/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        
      </Routes>
    
    </div>
  );
}

export default App;
