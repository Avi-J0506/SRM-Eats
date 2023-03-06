import React from 'react'
import {Link} from 'react-router-dom'
import './Landing.module.css'
import main from './assets/main.svg'
import main2 from './assets/main2.svg'
import progress from './assets/Group 9.svg'
import carousel1 from './assets/carousel1.svg'
import Dropdown from '../../Components/Dropdown/dropdown'

export const Landing = (props) => {
  return (
    <>
    <div className='flex'>
       <div className='py-12 md:my-12 my-5 lg:px-5 px-3 md:mx-3 mx-auto md:text-left text-center'>
          <div className='text-[#242424] md:text-[40px] text-[35px] font-bold mt-12 pt-5'>Meals on Tips?</div>
          <div className='text-[#727070] md:text-[25px] text-[18px] font-regular '>Order food from Java to your hostel</div>
          <div className='flex mt-10 font-medium md:text-[13px] text-[10px]'>
            <Dropdown/>
              <button className='md:block hidden w-2/4 bg-[#FA144B] pl-6 pr-6 text-[13px] text-white font-bold '>
               {
                props.state?<Link to='/Home'>FIND FOOD</Link>:<Link to='/Auth'>FIND FOOD</Link>
               }
              </button>
          </div>
          <div className='md:hidden block mt-10 text-center'>
              <button className='w-2/4 bg-[#FA144B] mx-auto py-3 text-[13px] text-white font-bold '>
              {
                props.state?<Link to='/Home'>FIND FOOD</Link>:<Link to='/Auth'>FIND FOOD</Link>
               }
              </button>
          </div>
          
       </div>
       {/* image */}
       <div className='lg:block hidden absolute right-0'>
          <img src={main} className='xl:block hidden'/>
          <img src={main2} className='xl:hidden md:block hidden'/>
       </div>
    </div>
    <div className='lg:block hidden mt-12 pt-10'>
        <img src={progress}/>
    </div>
    <div className='slider lg:hidden block mt-10 py-12 bg-[#242424] text-white text-center justify-center'>
        <div id='img'>
        <img src={carousel1} className='mx-auto'/>
        <p className='pt-5'>Select Food</p>
        </div>
    </div>
    </>
  )
}
