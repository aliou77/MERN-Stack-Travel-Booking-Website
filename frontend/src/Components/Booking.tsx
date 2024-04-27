import React, { FormEvent, useContext, useState } from 'react'
import calculateAvgRating from '../utls/calculateAvgRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utls/config';

function Booking({tour}) {
    const { avgRating, totalRating} = calculateAvgRating(tour?.reviews);

    const {user} = useContext(AuthContext);

    const [booking, setBooking] = useState({
        userId: user && user._id,
        email: user && user.email,
        tourName: tour.title,
        fullName: "",
        phone: "",
        guestSize: 1,
        bookAt: "",
    })
    const navigate = useNavigate()

    const handleChange = (e: any) =>{
        // console.log( e)
        setBooking(prev => ({
            ...prev,
            [e.target?.name]: e.target?.value
        }))
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLElement>) =>{
        e.preventDefault()
        // console.log(credentials)

        // create a new booking
        try {
            if(!user || user === undefined || user === null){
                alert("Please sign in !")
            }

            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'post',
                headers: {
                  'content-type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify(booking)
            })
        
            const result = await res.json();
            if(result.status !== 200){
                return alert(result.message)
            } else{
                navigate("/thank-you");
            }
            
        } catch (error) {
            alert(error.message);
        }

        
    }

    const serviceFee = 10;
    const totalAmount = Number(tour.price) * Number(booking.guestSize) + Number(serviceFee);


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
                <form className='' onSubmit={(e)=> handleSubmit(e)}>
                    <div className="form-content flex flex-col gap-4">
                        <input type="text" name='fullName'  value={booking.fullName } onChange={handleChange}  placeholder='Full name' className='w-full outline-none bg-transparent ps-1 border-b' required />
                        <input type="text" name='phone' value={booking.phone } onChange={handleChange}   placeholder='Phone' className='w-full outline-none bg-transparent ps-1 border-b' required />
                        <div className="flex justify-between gap-8">
                            <input type="date" name='bookAt'  value={booking.bookAt } onChange={handleChange} className='w-full outline-none bg-transparent ps-1 border-b' required />
                            <input type="text" name='guestSize' value={booking.guestSize } onChange={handleChange}  placeholder='Guest'  className='w-full outline-none bg-transparent ps-1 border-b' required />
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