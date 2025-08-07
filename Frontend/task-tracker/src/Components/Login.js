import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'

export default function SignUp({setIsLogin,isLogin}) {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('message');

    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleSpanClick(){
        navigate('/signup')
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
            const response = await fetch('http://localhost:8000/login',{
                method : 'POST',
                headers:{'content-type': 'application/json'},
                body:JSON.stringify(formData)
            })
            const data = await response.json();
            console.log('data: ', data);
            setMessage(data.message);
            setMessageClass(data.class);
            if(response.ok){
                if (data.token) {
                    localStorage.setItem('token', data.token);
                }
                localStorage.setItem('userName',data.user.firstName)
                setIsLogin(true)
                alert('Logged in Successfully')
                navigate('/dashboard')
            }
                


        }catch(error){
            setMessage("error occured at server");
            setMessageClass("message danger")
            console.log('error: ', error.message)
        }
    }

  return (
    <div className='form-container'>
        <h1>LOGIN</h1>

        <form 
        className="form" 
        onSubmit={handleSubmit}
        >
            <input 
            type="email" 
            name='email' 
            placeholder='Email'
            onChange={handleOnChange} 
            />

            <input 
            type='password' 
            name='password' 
            placeholder='Password'
            onChange={handleOnChange} 
            />

            <input 
            type='submit' 
            value='Login' 
            className='submit-btn'
            />

            <div className="is-account">Don't have an account?   
                <span onClick={handleSpanClick} id='register'> Sign Up</span>
            </div>
        </form>
        <div className={messageClass}>
            {message}
        </div>
    </div>
  )
}
