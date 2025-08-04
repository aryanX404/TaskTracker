import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'

export default function SignUp({isLogin,setIsLogin}) {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('message');
    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        email: '',
        password: ''
    });

    function handleSpanClick(){
        navigate('/login')
    }

    function handleOnChange(e){
        setFormData(prev=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8000/signup',{
                method : 'POST',
                headers:{'content-type': 'application/json'},
                body:JSON.stringify(formData)
            })
            const data = await response.json();
            console.log('data: ', data);
            setMessage(data.message);
            setMessageClass(data.class);
            if(response.ok){
                localStorage.setItem("username", data.user.firstName)
                navigate('/dashboard')
                setIsLogin(true)
            }

        }catch(error){
            setMessage("error occured at server");
            setMessageClass("message danger")
            console.log('error: ', error.message)
        }
    }

  return (
    <div className='form-container'>
        <h1>SIGN UP</h1>
        <form onSubmit={handleSubmit} className="form">
            <input 
            type="text" 
            name='firstName' 
            placeholder='First Name' 
            value={formData.firstName}
            onChange={handleOnChange} 
            />

            <input 
            type="text" 
            name='lastName' 
            placeholder='Last Name' 
            value={formData.lastName}
            onChange={handleOnChange} 
            />

            <input 
            type="email" 
            name='email' 
            placeholder='Email' 
            value={formData.email}
            onChange={handleOnChange} 
            />

            <input type='password' name='password' placeholder='Password' 
            value={formData.password}
            onChange={handleOnChange} 
            />

            <input 
            type='submit' 
            value='Sign Up' 
            className='submit-btn'
            />

            <div className="is-account">Already have an account?  <span onClick={handleSpanClick} id='register'> Login</span></div>
        </form>
        <div className={messageClass}>
            {message}
        </div>
    </div>
  )
}
