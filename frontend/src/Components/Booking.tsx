import React from 'react'
import calculateAvgRating from '../utls/calculateAvgRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Booking({tour}) {
    const { avgRating, totalRating} = calculateAvgRating(tour?.reviews);


  return (
    <div className='sticky top-0'>
        <div className="content border border-blue-400 rounded-lg px-4 py-8">
            <div className="head flex justify-between">
                <h3 className='text-[2rem] font-bold'>${tour?.price} <span className='text-base text-gray-600'>/per person</span></h3>
                <div className="rating flex gap-2 items-center">
                    <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                    {avgRating === 0 ? null : avgRating} { totalRating === 0 ? "No rating" : "("+tour?.reviews.length+")"}
              </div>
            </div>
            <p className='pt-[1px] bg-blue-400 my-8'></p>
            <div className="form-informations">
                <h6 className='my-2 text-xl font-bold'>Informations</h6>
                <form className='flex flex-col gap-4'>
                    <input type="text" placeholder='Full name' className='w-full outline-none bg-transparent ps-1 border-b' required />
                    <input type="text" placeholder='Phone' className='w-full outline-none bg-transparent ps-1 border-b' required />
                    <div className="flex justify-between gap-8">
                        <input type="date"  className='w-full outline-none bg-transparent ps-1 border-b' required />
                        <input type="text" placeholder='Guest'  className='w-full outline-none bg-transparent ps-1 border-b' required />
                    </div>
                </form>
            </div>
            <div className="recap flex flex-col gap-4 mt-8">
                <div className='item flex justify-between'>
                    <span>${tour?.price} x 1 person</span>
                    <span className='text-blue-900'>${tour?.price}</span>
                </div>
                <div className='item flex justify-between'>
                    <span>Service charge</span>
                    <span className='text-blue-900'>$10</span>
                </div>
                <div className='item flex justify-between'>
                    <span className='font-bold'>Total</span>
                    <span className='text-blue-900 font-bold'>$109</span>
                </div>
            </div>
            <div className="btn-informations w-full mt-[3rem]">
                <button className=' w-full font-medium text-white bg-blue-900 py-2 rounded-full hover:bg-blue-800'>Book now</button>
            </div>
        </div>
    </div>
  )
}

export default Booking;