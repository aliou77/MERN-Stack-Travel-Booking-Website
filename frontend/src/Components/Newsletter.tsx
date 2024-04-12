import React from 'react'
// @ts-ignore
import img from '../assets/images/male-tourist.png';
import Title from './Title';

function Newsletter() {
  return (
    <section className='newsletter-section mt-[7rem] bg-[#a3bbfe]'>
        <div className="content flex gap-4 justify-between items-center py-[50px] desktop-width">
            <div className="left max-w-[37rem]">
                <Title title={"subscribe now to get useful traveling"} spanTitle={"information."} />
                <div className="form-newsletter flex gap-3 bg-white rounded-md p-1 my-[10px]">
                    <input type="text" className='ps-1 outline-none border-none w-full' placeholder='Enter your email' />
                    <button type='submit' className='btn-newsletter'>Subscribe</button>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptatibus veritatis distinctio provident iste quidem!</p>
            </div>
            <div className="right">
                <img src={img} alt="male tourist" />
            </div>
        </div>
    </section>
  )
}

export default Newsletter