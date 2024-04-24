import React from 'react'
// import tours from '../assets/data/tours';
import TourCard from '../Components/TourCard';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utls/config';

function TourCardList() {

  const {loading, error, data} = useFetch(`${BASE_URL}/tours/search/featuredTours`)

  return (
    <div className="tours-content flex gap-8 flex-wrap">
      {
        loading && <h2 className='text-blue-900 text-xl font-semibold'>Loading...</h2>
      }
      {
        error && <h2 className='text-red-700 text-xl font-semibold'>{error.message}</h2>
      }
      {
        !loading && !error && data.map((tour, index) =>{
            return <TourCard tour={tour} key={index} />
        })
      }
    </div>
  )
}

export default TourCardList;