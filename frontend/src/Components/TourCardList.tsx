import React from 'react'
import tours from '../assets/data/tours';
import TourCard from '../Components/TourCard';

function TourCardList() {
  return (
    <div className="tours-content flex gap-8 flex-wrap">
        {
        tours.map((tour, index) =>{
            return <TourCard tour={tour} key={index} />
        })
        }
    </div>
  )
}

export default TourCardList;