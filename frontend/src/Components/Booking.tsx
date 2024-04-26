import React, { useState } from 'react'
import calculateAvgRating from '../utls/calculateAvgRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';

function Booking({tour}) {
    const { avgRating, totalRating} = calculateAvgRating(tour?.reviews);
    const [credentials, setCredentials] = useState({
        userId: '01',
        email: "test@gmail.com",
        fullName: "",
        phone: "",
        guestSize: 1,
        bookAt: "",
    })
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        // console.log( e)
        setCredentials(prev => ({
            ...prev,
            [e.target?.name]: e.target?.value
        }))
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) =>{
        e.preventDefault()
        // console.log(credentials)
        navigate("/thank-you");
    }

    const serviceFee = 10;
    const totalAmount = Number(tour.price) * Number(credentials.guestSize) + Number(serviceFee);


  return (
    <div className='sticky top-0'>
        <div className="content border border-blue-400 rounded-lg px-4 py-8">
            <div className="head flex justify-between">
                <h3 className='text-[2rem] font-bold'>${tour?.price} <span className='text-base text-gray-600'>/per person</span></h3>
                <div className="rating flex gap-2 items-center">
                    <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                    {avgRating === 0 ? null : avgRating} { totalRating === 0 ? "No rating" : "("+totalRating+")"}
              </div>
            </div>
            <p className='pt-[1px] bg-blue-400 my-8'></p>
            <div className="form-informations">
                <h6 className='my-2 text-xl font-bold'>Informations</h6>
                <form className='' onSubmit={()=> handleClick}>
                    <div className="form-content flex flex-col gap-4">
                        <input type="text" name='fullName'  value={credentials.fullName } onChange={handleChange}  placeholder='Full name' className='w-full outline-none bg-transparent ps-1 border-b' required />
                        <input type="text" name='phone' value={credentials.phone } onChange={handleChange}   placeholder='Phone' className='w-full outline-none bg-transparent ps-1 border-b' required />
                        <div className="flex justify-between gap-8">
                            <input type="date" name='bookAt'  value={credentials.bookAt } onChange={handleChange} className='w-full outline-none bg-transparent ps-1 border-b' required />
                            <input type="text" name='guestSize' value={credentials.guestSize } onChange={handleChange}  placeholder='Guest'  className='w-full outline-none bg-transparent ps-1 border-b' required />
                        </div>
                    </div>
                    <div className="recap flex flex-col gap-4 mt-8">
                        <div className='item flex justify-between'>
                            <span>${tour?.price} x 1 person</span>
                            <span className='text-blue-900'>${tour?.price}</span>
                        </div>
                        <div className='item flex justify-between'>
                            <span>Service charge</span>
                            <span className='text-blue-900'>${serviceFee}</span>
                        </div>
                        <div className='item flex justify-between'>
                            <span className='font-bold'>Total</span>
                            <span className='text-blue-900 font-bold'>${totalAmount}</span>
                        </div>
                    </div>
                    <div className="btn-informations w-full mt-[3rem]">
                        <button type='submit' className='w-full btn-submit'>Book now</button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Booking;