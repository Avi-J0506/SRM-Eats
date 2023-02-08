import React from 'react'
import './Landing.module.css'
import main from './assets/main.svg'
import main2 from './assets/main2.svg'
import locateme from './assets/Group 8.svg'
import progress from './assets/Group 9.svg'

export const Landing = () => {
  return (
    <>
    <div className='flex'>
       <div className='py-12 md:my-12 my-5 md:px-5 md:mx-3 mx-2.5'>
          <div className='text-[#242424] md:text-[40px] text-[35px] font-bold mt-12 pt-5'>Meals on Tips?</div>
          <div className='text-[#727070] md:text-[25px] text-[18px] font-regular '>Order food from Java to your hostel.</div>
          <div className='flex mt-10 font-medium md:text-[15px]'>
            <textarea placeholder='Enter your delivery location' className='resize-none w-full pt-6 md:pt-5 pl-5'>

            </textarea>
            <button className='bg-white w-1/2 text-white text-[13px] px-3 pb-1'>
                <img src={locateme} className='md:hidden block w-20'/>
                <img src={locateme} className='md:block hidden w-25'/>
            </button>
            <button className='md:block hidden w-2/4 bg-[#FA144B] pl-6 pr-8 text-[13px] text-white font-bold '>
                FIND FOOD
            </button>
          </div>
       </div>
       {/* image */}
       <div className='lg:block hidden absolute right-0'>
          <img src={main} className='xl:block hidden'/>
          <img src={main2} className='xl:hidden md:block hidden'/>
       </div>
    </div>
    <div className='lg:block hidden mt-12 pt-8'>
        <img src={progress} className=''/>
    </div>
    </>
  )
}
