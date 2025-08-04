import {NavLink} from 'react-router-dom';
import './Navbar.css'

export default function Navbar({isLogin , setIsLogin}) {
    function Logout(){
        setIsLogin(false)
        alert("Logged out")
        localStorage.removeItem("username");

    }
    
  return (
    <div className='navbar'>
        <div className="left">
            <h1>TASK TRACKER</h1>
        </div>
        <div className="middle">
            <ul>
                <NavLink to='dashboard'>Dashboard</NavLink>
                <NavLink to='trackers'>Trackers</NavLink>
                <NavLink to='profile'>Profile</NavLink>
            </ul>
        </div>
        <div className="right">
            {isLogin? 
            <ul>
                <div className="profile"></div>
                <NavLink onClick={Logout} to='login'>Logout</NavLink>
            </ul> 
            :
            <ul>
                <NavLink to='login'>Login</NavLink>
                <NavLink to='signup'>Sign Up</NavLink>
            </ul>
            }

            
        </div>
    </div>
  )
}
