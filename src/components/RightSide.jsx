import React from 'react'
import Input from './Input'
import captcha from '../assets/captcha.png'

const RightSide = () => {
  return (
    <div className='sm:w-1/2 flex justify-center'>
        <div className='flex w-[90%] sm:w-[75%] lg:w-[70%] flex-col gap-y-5'>
            <div className='text-center sm:text-start'>
                <h1 className='text-[32px] font-[500] text-[#333333]'>Create an account</h1>
                <p className='text-[16px] font-[400] text-[#333333]'>Already have an account? <a href="#" className='underline text-[#111111] font-[400]'>Log in</a></p>
            </div>

            <div className='flex flex-col gap-y-4'>
                <Input name={"username"} id={"username"} type={"text"} label={"User name"} />
                <Input name={"email"} id={"email"} type={"email"} label={"Email"} />
                <Input name={"password"} id={"password"} type={"password"} label={"Password"} />
            </div>

            <p className='max-w-72 text-[16px] my-2 lg:my-3 font-[400] text-[#666666]'>By creating an account you agree to our <span className='text-[#111111] underline'>Terms of use</span> and <span className='text-[#111111] underline'>privacy Policy</span></p>

            <div className='px-3 py-2 max-w-88 rounded-2xl flex items-center justify-between border border-[#333333]'>
                <div className='flex items-center gap-2'>
                    <input className='size-[18px] accent-[#34A853]' type="checkbox" id='notRobot' />
                    <label className='text-[16px] text-[#333333] font-[300]' htmlFor="notRobot">I'm not a robot</label>
                </div>

                <img className='w-[60px] h-[46px]' src={captcha} alt="captcha" />
            </div>

            <div className='flex items-center justify-center sm:justify-start'>
                <button className='rounded-full text-white font-[500] text-[22px] px-7 py-3 bg-neutral-400'>
                    Create an account
                </button>
            </div>
            <p className='text-[16px] text-center sm:text-start font-[400] text-[#333333] mt-[-15px]'>Already have an account? <a href="#" className='underline text-[#111111] font-medium'>Log in</a></p>
        </div>
    </div>
  )
}

export default RightSide