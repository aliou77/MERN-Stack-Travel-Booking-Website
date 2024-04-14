import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
  return (
    <main>
        <div className="content w-max mx-auto my-[7rem]">
            <div className="check flex justify-center">
                <FontAwesomeIcon icon={faCircleCheck} className='text-[#008000] text-[3.5rem]' />
            </div>
            <h2 className='text-[3rem] font-bold font-[cursive] my-3 text-center'>Thank you</h2>
            <h4 className='text-xl font-medium text-center'>Your tour is booked !</h4>
            <div className='w-full mt-4'>
                <Link to={"/home"} className='block text-white bg-blue-900 hover:bg-blue-800 rounded-full text-center w-full py-2 font-medium'>Back to home</Link>
            </div>
        </div>
    </main>
  )
}

export default ThankYou