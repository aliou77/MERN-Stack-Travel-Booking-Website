import React, { useEffect, useState } from 'react'
import SearchBar from '../Shared/SearchBar';
import TourCardList from '../Components/TourCardList';
import Newsletter from '../Components/Newsletter'

function Tour() {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  

  useEffect(()=>{
    const pages = Math.ceil(5/4);
    setPageCount(pages);

    // console.log(pageCount, [...Array(pageCount)])
  }, [page])

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
            <TourCardList />

            <div className="pagination flex gap-4 items-center justify-center mt-8">
              {
                [...Array(pageCount).keys()].map((item, index) =>{
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