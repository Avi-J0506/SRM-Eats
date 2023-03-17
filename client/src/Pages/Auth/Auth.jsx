import React,{useState} from 'react'
import './Auth.module.css'
const Auth = (props) => {

  return (
    <section className='auth-section bg-[#ffffff] flex min-h-[90vh] items-center justify-center'>
        <div className='auth-container min-w-[20%] w-[300px] items-center justify-center'>
          <div className='text-[30px] font-medium'>
            Login
          </div> 
          <div className='text-[#FA144B] text-[13px] px-1'>
            Login to your account
          </div>
          <div className='form-card rounded-lg my-3 py-3'>
          <form>
            <label htmlFor='number'>
              <input type='number' name='number' id='number' placeholder='Phone Number' className='border border-[#BABFC4] min-w-[90%] h-[50px] p-3 text-[13px]' required/>
            </label>
            <div className='mb-10'>
            <button type='submit' className='auth-btn bg-[#FA144B] mt-5 text-white text-[12px] py-3 min-w-[90%]'>
               Get OTP
            </button>
            </div>
          </form>
          </div>
        </div>
    </section>
  )
}

export default Auth