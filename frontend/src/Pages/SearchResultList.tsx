import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import TourCard from '../Components/TourCard'

function SearchResultList() {
  const location = useLocation()

  // will get results from the search bar, gotta search how it works
  const [data] = useState(location.state)
  console.log(data)
  return (
    <main className='main-searchResultList'>
      <div className="content">
          <div className="hero-tour">
            <div className="hero-tour-content flex justify-center items-center w-full h-full bg-[#0d0d0d5c]">
              <h1 className='text-[2rem] text-white'>Tour Search Result</h1>
            </div>
          </div>
          <div className="result-list mt-[5rem] desktop-width">
            <div className="tours-content flex gap-8 flex-wrap">
              {
                data.length === 0 
                ?
                <h2 className='text-xl text-gray-700 text-center w-full'>No Tour Found !</h2>
                :
                data.map((tour, index) =>{
                    return <TourCard tour={tour} key={index} />
                })
              }
            </div>
          </div>
      </div>
    </main>
  )
}

export default SearchResultList