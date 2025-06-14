import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import TouristPlaces from './Pages/TouristPlaces'
import { ChevronUp } from 'lucide-react'

function ScrollTopButton() {
  return (
    <button 
      className='fixed bottom-5 right-5 flex justify-center items-center bg-[#171717] text-[#F3EDCD] 
                w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shadow-lg z-50 cursor-pointer
                hover:bg-[#efe598] hover:text-[#171717] transition-all duration-300'
      onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })}
    >
      <ChevronUp />
    </button>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <ScrollTopButton />
          <HomePage />
        </div>
      } />
      
      <Route path="/tourist-places" element={
        <div>
          <ScrollTopButton />
          <TouristPlaces />
        </div>
      } />
    </Routes>
  );
}

export default AppRoutes;
