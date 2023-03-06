import React from 'react'
import './Home.module.css'

import card from './assets/card1.svg'
const Home = () => {
  const search = document.getElementById('search');
  let shops = [];
  if(search){
    search.addEventListener('keyup',(e)=>{
      const searchString= e.target.value;
      const filteredShops = shops.filter(character => {
        return character.name.includes(searchString);
      })
      console.log(filteredShops);
    });
  }
  return (
    <div className='my-10 mx-20'>
      <nav className='flex space-x-[100px] justify-between'>
        <h3 className='md:text-[25px] text-[20px] font-medium'>Restaurants Nearby</h3>
        {/* search */}
        <div className='md:block hidden mx-auto border'>
          <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </div>
              <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search" /> 
          </div>
        </div>
        {/* // */}
      </nav>
      <hr className='my-5'/>
      {/* shops*/}
      <div className='md:flex mb-20 pt-[25px] md:space-y-0 space-y-10 justify-between'>
          <div className='card md:max-w-[18vw]'>
              <div>
                <img src={card} className='w-full'/>
                <p className='text-black text-[14px] mt-4 mb-2 font-medium'>Butty Food Corner</p>
              </div>
              <div className='flex justify-between text-[12px] mb-4'>
                  <p className='text-[#727070]'>North Indian, South Indian</p>
                  <p className='font-medium'>from ₹40</p>
              </div>
              <hr/>
          </div>
        {/* // */}
      </div>
    </div>
  )
}

export default Home