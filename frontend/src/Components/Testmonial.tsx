import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// @ts-ignore
import av1 from '../assets/images/ava-1.jpg'; import av2 from '../assets/images/ava-2.jpg'; import av3 from '../assets/images/ava-3.jpg';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function Testmonial() {
  return (
    <div className='testimonals-container mt-8'>
        <div className="testimonals-content">
            <Carousel 
                responsive={responsive} 
                draggable={true}
                autoPlaySpeed={2000}
                infinite={true}
                autoPlay={true}
                >
                <div className="testimonial-item ">
                    <div className="head flex flex-col items-center justify-center gap-[10px]">
                        <div className="img w-[130px]">
                            <img src={av1} alt="avatar" className='rounded-full' />
                        </div>
                        <div className="desc text-center">
                            <h5 className='font-bold capitalize text-blue-900'>John doe</h5>
                            <p>Customer</p>
                        </div>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis, unde beatae illo earum quis, quod a providen.</p>
                    </div>
                </div>
                <div className="testimonial-item ">
                    <div className="head flex flex-col items-center justify-center gap-[10px]">
                        <div className="img w-[130px]">
                            <img src={av2} alt="avatar" className='rounded-full' />
                        </div>
                        <div className="desc text-center">
                            <h5 className='font-bold capitalize text-blue-900'>lia franklin</h5>
                            <p>Customer</p>
                        </div>
                        <p className='text-center text-[#000000c2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis, unde beatae illo earum quis, quod a providen.</p>
                    </div>
                </div>
                <div className="testimonial-item ">
                    <div className="head flex flex-col items-center justify-center gap-[10px]">
                        <div className="img w-[130px]">
                            <img src={av3} alt="avatar" className='rounded-full' />
                        </div>
                        <div className="desc text-center">
                            <h5 className='font-bold capitalize text-blue-900'>John doe</h5>
                            <p>Customer</p>
                        </div>
                        <p className='text-center text-[#000000c2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis, unde beatae illo earum quis, quod a providen.</p>
                    </div>
                </div>
                <div className="testimonial-item ">
                    <div className="head flex flex-col items-center justify-center gap-[10px]">
                        <div className="img w-[130px]">
                            <img src={av2} alt="avatar" className='rounded-full' />
                        </div>
                        <div className="desc text-center">
                            <h5 className='font-bold capitalize text-blue-900'>lia franklin</h5>
                            <p>Customer</p>
                        </div>
                        <p className='text-center text-[#000000c2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis, unde beatae illo earum quis, quod a providen.</p>
                    </div>
                </div>
            </Carousel>
            
        </div>
    </div>
  )
}

export default Testmonial;