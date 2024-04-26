import React, { useContext, useState } from 'react'
// @ts-ignore
import loginImg from '../assets/images/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utls/config'


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

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    // console.log(credentials)
    // verify user credentials
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers:{
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });
      const result = await res.json();

      if(result.status !== 200 ){
        alert(result.message);
      }else{
        dispatch({type: "LOGIN_SUCCESS", payload: result.data})
        navigate("/")
      }
      // console.log(result)
      
    } catch (error) {
      dispatch({type: "LOGIN_FAILURE", payload: error.message})
    }
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
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