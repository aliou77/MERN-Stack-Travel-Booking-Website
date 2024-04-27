import React, { useContext, useRef, useState } from 'react'
import {useParams} from 'react-router-dom';
import calculateAvgRating from '../utls/calculateAvgRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLocationDot, faMoneyBill, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import avatar from '../assets/images/avatar.jpg';
import Booking from '../Components/Booking';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utls/config';
import { AuthContext } from '../context/AuthContext';

function TourDetails() {

  const {id} = useParams(); // get the id param set in this route (Routers.jsx)
  const {data: tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`) as any;
  const {user} = useContext(AuthContext);
  // console.log(tour);
  

  // const tour = TourData.find(tour => tour.id === "01");

  const { avgRating, totalRating} = calculateAvgRating(tour?.reviews || 0);

  // date format
  const options = {day: "numeric", month: "long", year: "numeric"}

  const [tourRating, setTourRating] = useState(0);
  const ratingRef = useRef('');
  
  // send data to the server
  const submitHandler = async (e) =>{
    e.preventDefault();
    // @ts-ignore
    if(ratingRef.current.value === ''){
      alert("field is empty !")
    } else if(tourRating === 0){
      alert("please select a rating value !")
    }


    // call api to submit the review
    try {
      const reviewText = ratingRef.current.value
      // alert("text: " + reviewText + " value: " + tourRating)

      if(!user || user === undefined || user === null){
        alert("Please sign in before submitting a review !")
      }

      const reviewObj = {
        username: user.username,
        reviewText,
        rating: tourRating,
      }

      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(reviewObj)
      })

      const result = await res.json();
      // console.log(result)
      if(result.status !== 200){
        alert(result.message)
      }else{
        alert(result.message)
      }

      
    } catch (error) {
      alert(error.message)
    }
  }
  

  return (
    <main className='main-tour-details pt-[3rem]'>
      {
        loading && <h2 className='text-blue-900 text-xl text-center font-semibold'>Loading...</h2>
      }
      {
        error && <h2 className='text-red-700 text-xl text-center font-semibold'>{error.message}</h2>
      }
      {
        !loading && !error && 
          <div className="content flex gap-4 desktop-width">
            
            <div className="left w-full">
              <div className="img">
                <img src={tour?.photo} alt={tour?.title} />
              </div>
              <div className="tour-infos border border-blue-500 rounded-lg px-8 py-[3rem] mt-8">
                <h1 className='text-blue-900 text-[2rem] capitalize'>{tour?.title}</h1>
                <div className="content flex gap-8 flex-wrap">
                  <div className="rating flex gap-2 items-center">
                    <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                    {avgRating === 0 ? null : avgRating} { totalRating === 0 ? "No rating" : "("+totalRating+")"}
                  </div>
                  <div className="location flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocation} />
                    <span>{tour?.address}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{tour?.city}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faMoneyBill} />
                    <span>${tour?.price} /per person</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faUserGroup} />
                    <span>{tour?.maxGroupSize} people</span>
                  </div>
                </div>
                <div className="tour-desc mt-8">
                  <h5 className='font-medium text-xl text-blue-900'>Description</h5>
                  <p>{tour?.desc} </p>
                </div>
              </div>
              <div className="tour-reviews border border-blue-500 mt-8 px-8 py-[3rem]">
                <h5 className='font-medium text-xl text-blue-900'>Reviews ({tour.reviews ? tour.reviews?.length : 0} reviews)</h5>
                <div className="star-rating flex items-center gap-4 mt-4">
                  <div className='flex gap-1 items-center cursor-pointer' onClick={() => setTourRating(1)}>
                    <span>1</span>
                    <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                  </div>
                  <div className='flex gap-1 items-center cursor-pointer' onClick={() => setTourRating(2)}>
                    <span>2</span>
                    <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                  </div>
                  <div className='flex gap-1 items-center cursor-pointer' onClick={() => setTourRating(3)}>
                    <span>3</span>
                    <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                  </div>
                  <div className='flex gap-1 items-center cursor-pointer' onClick={() => setTourRating(4)}>
                    <span>4</span>
                    <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                  </div>
                  <div className='flex gap-1 items-center cursor-pointer' onClick={() => setTourRating(5)}>
                    <span>5</span>
                    <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                  </div>
                </div>
                <div className="form-rating mt-4">
                  <form onSubmit={submitHandler} className='flex gap-4 border border-blue-900 rounded-full p-[5px]'>
                    <input type="text" ref={ratingRef} placeholder='Share your thoughts...' className='w-full outline-none bg-transparent text-lg ps-1' required />
                    <button className='px-5 py-2 rounded-full bg-blue-900 hover:bg-blue-700 text-white'>Submit</button>
                  </form>
                </div>

                <div className="reviews-content mt-8 flex flex-col gap-4">
                  {
                    tour.reviews && tour?.reviews.map((review, index) =>{
                      return <div className='review-item flex justify-between items-center' key={index}>
                          <div className="desc flex gap-4">
                            <div className="img">
                              <img src={avatar} alt="avatar" className='w-[80px]' />
                            </div>
                            <div className="desc">
                              <h6 className='font-bold text-lg text-blue-900 capitalize'>{review.username}</h6>
                              <p className='text-gray-600 text-sm'>
                                { // @ts-ignore
                                  new Date(review.createdAt).toLocaleDateString("en-US", options )
                                }
                              </p>
                              <p>{review.reviewText.lenght > 50 ? review.reviewText.substring(0, 50) + "..." : review.reviewText}</p>
                            </div>
                          </div>
                          <div className="rating-note">
                            ({review?.rating})<FontAwesomeIcon icon={faStar} className='text-orange-400' />
                          </div>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>

            <div className="right w-[50%]">
                <Booking tour={tour} />
            </div>
          </div>
      }
      
    </main>
  )
}

export default TourDetails