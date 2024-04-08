import React from 'react'
import StyledTitle from '../Components/StyledTitle'
// @ts-ignore
import img1 from '../assets/images/hero-img01.jpg'; import img2 from '../assets/images/hero-img02.jpg'; import video from '../assets/images/hero-video.mp4';
import SearchBar from '../Shared/SearchBar';
import Title from '../Components/Title';
// @ts-ignore
import weather from "../assets/images/weather.png"; import guide from "../assets/images/guide.png"; import custom from "../assets/images/customization.png";
import tours from '../assets/data/tours';

import TourCard from '../Components/TourCard';

function Home() {
  return (
    <>
      <main className='main-content desktop-width'>
        <section className="hero-section flex gap-8 ">
          <div className="left w-full">
            <StyledTitle title={"know before you go"} />
            <Title title={"Traveling opens the door to creating"} spanTitle={"memories."} />
            <p className='text-[#000000bd]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum tenetur velit temporibus placeat quaerat dolorem distinctio autem quod harum dicta quia eligendi eveniet ipsam voluptas accusantium beatae, dignissimos nemo dolor.
            </p>
          </div>
          <div className="rigth w-full">
            <div className="imgs-video flex gap-3">
              <img src={img1} alt="hero-img-1" />
              <video src={video} autoPlay muted loop className='mt-4'></video>
              <img src={img2} alt="hero-img-2" className='mt-8' />
            </div>
          </div>
        </section>
        
        {/* ================== */}

        <section className='section-search-bar'>
          <SearchBar />
        </section>

        {/* ================= */}

        <section className='services-section mt-[7rem]'>
          <div className="content flex gap-8">
            <div className="left">
              <StyledTitle title={"what we serve"} />
              <Title title={"we offer our best "} spanTitle={"services."} />
            </div>
            <div className="right w-full flex gap-4">
              <div className="service-item">
                <span>
                  <img src={weather} alt="weather logo" />
                </span>
                <h5 className='font-bold text-lg'>Calculate Weather</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="service-item">
                <span>
                  <img src={guide} alt="guide logo" />
                </span>
                <h5 className='font-bold text-lg'>Best Tour Guide</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="service-item">
                <span>
                  <img src={custom} alt="weather logo" />
                </span>
                <h5 className='font-bold text-lg'>Cusomization</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= */}
        <section className='featured-tours-section'>
          <div className="content">
            <div className="head">
              <StyledTitle title={"explore"} />
              <Title title={"our featured"} spanTitle={"tours."} />
            </div>
            <div className="tours-content flex gap-8 flex-wrap">
              {
                tours.map((tour) =>{
                  return <TourCard tour={tour} />
                })
              }
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home