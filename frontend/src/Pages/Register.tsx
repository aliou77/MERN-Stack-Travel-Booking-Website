import React, { useContext, useState } from 'react'
// @ts-ignore
import registerImg from '../assets/images/register.png'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utls/config'


function Register() {

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  })

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleChange = (e) =>{
    // console.log(e.target.id)
    setCredentials(prev => ({
        ...prev,
        [e.target?.name]: e.target?.value
    }))
  }

  const handleClick = async (e)=>{
    e.preventDefault();
    // console.log(credentials)
    try {
      // post user credentials to the server
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(credentials)
      });
      const result = await res.json();
      if (!result.ok){
        alert(result.message);
      } 

      // dispatch the state change
      dispatch({type: 'REGISTER_SUCCESS'});
      // got the login page
      navigate("/login");

    } catch (error) {
      alert(error.message);
    }
  }


  return (
    <main className='main-register p-[12rem] desktop-width'>
      <div className="content flex ">
        <div className="left w-[84rem]">
          <div className="img">
            <img src={registerImg} className='login-img' alt="login" />
          </div>
        </div>
        <div className="right relative w-full border-s border-blue-900">
          <div className="right-content flex flex-col justify-center items-center gap-4">
            <div className="icon absolute top-[-44px] flex justify-center w-full">
              <FontAwesomeIcon icon={faUserCircle} className=' text-[6rem] text-blue-900' />
            </div>
            <h1 className='text-[2rem] font-semibold mt-[4rem]'>Register</h1>
            <form onSubmit={handleClick} className="flex flex-col gap-7">
              <input type="text" name='username' 
                value={credentials.username} 
                onChange={handleChange} 
                placeholder='Username' 
                className='input-field'
                required
                autoFocus
                />
              <input type="email" name='email' 
                value={credentials.email} 
                onChange={handleChange} 
                placeholder='Email'  
                className='input-field'
                required
                />
              <input type="password" name='password' 
                value={credentials.password} 
                onChange={handleChange} 
                placeholder='password' 
                className='input-field'
                required
                />
              <div className="btn">
                <button type='submit' className='btn-submit w-full' >Create Account</button>
              </div>
            </form>
            <p>Already have an account? <Link to={"/login"} className='text-blue-900 hover:text-blue-800 hover:underline'>Login</Link> </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Register;