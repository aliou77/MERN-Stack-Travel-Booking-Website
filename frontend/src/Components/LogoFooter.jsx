import React from 'react'
import { Link } from 'react-router-dom'

function LogoFooter() {
  return (
    <div className='logo'>
        <Link to={"/"} >
            <h2 className='text-[32px] font-bold text-blue-900'>BookingTravel.com</h2>
        </Link>
    </div>
  )
}

export default LogoFooter;