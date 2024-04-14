import React, { useState } from 'react'
// @ts-ignore
import loginImg from '../assets/images/login.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function Login() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) =>{
    // console.log(e.target.id)
    setCredentials(prev => ({
        ...prev,
        [e.target?.name]: e.target?.value
    }))
  }

  const handleClick = (e)=>{
    e.preventDefault();
    // console.log(credentials)
  }


  return (
    <main className='main-login p-[12rem] desktop-width'>
      <div className="content flex ">
        <div className="left w-[84rem]">
          <div className="img">
            <img src={loginImg} className='login-img' alt="login" />
          </div>
        </div>
        <div className="right relative w-full border-s border-blue-900">
          <div className="right-content flex flex-col justify-center items-center gap-4">
            <div className="icon absolute top-[-44px] flex justify-center w-full">
              <FontAwesomeIcon icon={faUserCircle} className=' text-[6rem] text-blue-900' />
            </div>
            <h1 className='text-[2rem] font-semibold mt-[4rem]'>Login</h1>
            <form onSubmit={handleClick} className="flex flex-col gap-7">
              <input type="email" name='email' 
                value={credentials.email} 
                onChange={handleChange} 
                placeholder='Email' 
                className='input-field'
                required
                autoFocus
                />
              <input type="password" name='password' 
                value={credentials.password} 
                onChange={handleChange} 
                placeholder='password' 
                className='input-field'
                required
                />
              <div className="btn">
                <button type='submit' className='btn-submit w-full'>Login</button>
              </div>
            </form>
            <p>Don't have an account? <Link to={"/register"} className='text-blue-900 hover:text-blue-800 hover:underline'>Create</Link> </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login