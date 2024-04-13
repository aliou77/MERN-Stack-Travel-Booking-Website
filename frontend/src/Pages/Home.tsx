import React from 'react'
import StyledTitle from '../Components/StyledTitle'
// @ts-ignore
import img1 from '../assets/images/hero-img01.jpg'; import img2 from '../assets/images/hero-img02.jpg'; import video from '../assets/images/hero-video.mp4';
import SearchBar from '../Shared/SearchBar';
import Title from '../Components/Title';
// @ts-ignore
import weather from "../assets/images/weather.png"; import guide from "../assets/images/guide.png"; import custom from "../assets/images/customization.png"; import experience from '../assets/images/experience.png';
import Gallery from '../Components/Gallery';
import Testmonial from '../Components/Testmonial';
import Newsletter from '../Components/Newsletter';
import TourCardList from '../Components/TourCardList';


function Home() {
  return (
    <>
      <main className='main-content'>
        <section className="hero-section flex gap-8 desktop-width">
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

        <section className='section-search-bar mt-[3rem] desktop-width'>
          <SearchBar />
        </section>

        {/* ================= */}

        <section className='services-section mt-[7rem] desktop-width'>
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
        <section className='featured-tours-section mt-[7rem] desktop-width'>
          <div className="content">
            <div className="head">
              <StyledTitle title={"explore"} />
              <Title title={"our featured"} spanTitle={"tours."} />
            </div>
            
            <TourCardList />
          </div>
        </section>

        {/* ================= */}
        <section className='experience-section mt-[7rem] desktop-width'>
            <div className="content flex justify-between gap-[10rem]">
              <div className="left">
                <div className="head">
                  <StyledTitle title={"experience"} />
                  <Title title={"with all our experience we will"} spanTitle={"serve you."} />
                  <p className='mt-4 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt autem doloribus ex delectus magni nobis.</p>
                </div>
                <div className='experience-rates flex gap-8'>
                  <div className="ex-item flex flex-col justify-center items-center">
                    <span className='ex-text'>12k+</span>
                    <p>Successful trip</p>
                  </div>
                  <div className="ex-item flex flex-col justify-center items-center">
                    <span className='ex-text'>2k+</span>
                    <p>Regular client</p>
                  </div>
                  <div className="ex-item flex flex-col justify-center items-center">
                    <span className='ex-text'>15</span>
                    <p>Year experience</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={experience} alt="experience img" />
              </div>
            </div>
        </section>

        {/* ================= */}
        <section className='gallery-section mt-[7rem] desktop-width'>
          <Gallery />
        </section>

        {/* ================= */}
        <section className='testmonial-section mt-[7rem] desktop-width'>
          <div className="content">
            <div className="head">
              <StyledTitle title={"fans love"} />
              <Title title={"what our fans say"} spanTitle={"about us."} />
            </div>

            <Testmonial />
          </div>
        </section>

        {/* ================= */}
        <Newsletter />
        
      </main>
    </>
  )
}

export default Home