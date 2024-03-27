import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../Pages/Home';
import Tour from '../Pages/Tour';
import SearchResultList from '../Pages/SearchResultList';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import TourDetails from '../Pages/TourDetails';

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={"/home"} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tours' element={<Tour />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tours/search' element={<SearchResultList />} />
    </Routes>
  )
}

export default Routers