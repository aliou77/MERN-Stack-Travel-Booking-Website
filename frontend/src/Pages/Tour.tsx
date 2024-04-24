import React, { useEffect, useState } from 'react'
import SearchBar from '../Shared/SearchBar';
import TourCardList from '../Components/TourCardList';
import Newsletter from '../Components/Newsletter'
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utls/config';

function Tour() {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  // feching data from the server
  const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/tourCount`)
  
  // console.log(tours, tourCount);

  useEffect(()=>{
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    
    // scroll to top when 
    window.scrollTo(0,150);
    // console.log(pageCount, [...Array(pageCount)])
  }, [page, tourCount, tours])

  return (
    <main className='main-tours'>
        <div className="hero-tour">
          <div className="hero-tour-content flex justify-center items-center w-full h-full bg-[#0d0d0d5c]">
            <h1 className='text-[2rem] text-white'>All Tours</h1>
          </div>
        </div>
        <div className="conten desktop-width">
          <div className="searchbar-tour my-[5rem]">
            <SearchBar />
          </div>
          <div className="tours-list">
            <TourCardList tours={tours} />

            <div className="pagination flex gap-4 items-center justify-center mt-8">
              {
                loading && <h2 className='text-blue-900 text-xl text-center font-semibold'>Loading...</h2>
              }
              {
                error && <h2 className='text-red-700 text-xl text-center font-semibold'>{error.message}</h2>
              }
              {
                !loading && !error && [...Array(pageCount).keys()].map((item, index) =>{
                  return <span 
                          className={page === item ? 'pagination-item active' : "pagination-item"}
                          key={index} 
                          onClick={() => setPage(item)}
                          > {item + 1} </span>
                })
              }
            </div>
          </div>
        </div>
        <Newsletter />
    </main>
  )
}

export default Tour;