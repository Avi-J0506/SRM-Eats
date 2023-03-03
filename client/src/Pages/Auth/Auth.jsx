import React,{useState} from 'react'
import './Auth.module.css'
const Auth = () => {
 const [isLogin, setisLogin] = useState(true);
 const handleSwitch = () =>{
  setisLogin(!isLogin);
}
  return (
    <section className='auth-section bg-[#ffffff] flex min-h-[90vh] items-center justify-center'>
        <div className='auth-container min-w-[20%] w-[300px] items-center justify-center'>
          <div className='text-[30px] font-medium'>
            {isLogin?'Login':'Sign up'}
          </div> 
          <div className='text-black text-[13px]'>or
          <button type='button' className='text-[#FA144B] text-[13px] px-1' onClick={handleSwitch}>{!isLogin?'Login to your account':'Create a new account '}</button>
          </div>
          <div className='form-card rounded-lg my-3 py-3'>
          <form>
            <label htmlFor='number'>
              <input type='number' name='number' id='number' placeholder='Phone Number' className='border border-[#BABFC4] min-w-[90%] h-[50px] p-3 text-[13px]' />
            </label>
            {
              !isLogin && 
              <>
              <label htmlFor='name'>
                 <input type='text' name='name' id='name' placeholder='Name' className='border border-[#BABFC4] min-w-[90%] h-[50px] p-3 text-[13px] my-3'/>
              </label>
              <label htmlFor='email'>
              <input type='email' name='email' id='email' placeholder='Email' className='border border-[#BABFC4] min-w-[90%] h-[50px] p-3 text-[13px]' />
            </label>
              </>
            }
            <div className='mb-10'>
            <button type='submit' className='auth-btn bg-[#FA144B] mt-5 text-white text-[12px] py-3 min-w-[90%]'>
              {!isLogin? 'Sign up':'Log in'}
            </button>
            </div>
          </form>
          </div>
        </div>
    </section>
  )
}

export default Auth