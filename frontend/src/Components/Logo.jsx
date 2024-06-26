import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div className='logo'>
        <Link to={"/"} >
            <h2 className='sm:text-[32px] text-sm font-bold text-blue-900'>BookingTravel.com</h2>
        </Link>
    </div>
  )
}

export default Logo;