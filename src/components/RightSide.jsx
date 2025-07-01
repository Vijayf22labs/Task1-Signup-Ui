import React from 'react'
import Input from './Input'
import captcha from '../assets/captcha.png'

const RightSide = () => {
  return (
    <div className='sm:w-1/2 flex justify-center'>
        <div className='flex w-[90%] sm:w-[75%] lg:w-[70%] flex-col gap-y-5'>
            <div className='text-center sm:text-start'>
                <h1 className='text-3xl font-medium text-secondary'>Create an account</h1>
                <p className='text-base font-normal text-secondary'>Already have an account? <a href="#" className='underline text-primary font-normal'>Log in</a></p>
            </div>
``
            <div className='flex flex-col gap-y-4'>
                <Input name={"username"} id={"username"} type={"text"} label={"User name"} />
                <Input name={"email"} id={"email"} type={"email"} label={"Email"} />
                <Input name={"password"} id={"password"} type={"password"} label={"Password"} />
            </div>

            <p className='max-w-72 text-base my-2 lg:my-3 font-normal text-tertiary'>By creating an account you agree to our <span className='text-[#111111] underline'>Terms of use</span> and <span className='text-[#111111] underline'>privacy Policy</span></p>

            <div className='px-3 py-2 max-w-88 rounded-2xl flex items-center justify-between border border-secondary'>
                <div className='flex items-center gap-2'>
                    <input className='size-lg accent-green-600' type="checkbox" id='notRobot' />
                    <label className='text-base text-secondary font-light' htmlFor="notRobot">I'm not a robot</label>
                </div>

                <img className='w-[60px] h-[46px]' src={captcha} alt="captcha" />
            </div>

            <div className='flex items-center justify-center sm:justify-start'>
                <button className='rounded-full text-white font-medium text-xl px-7 py-3 bg-neutral-400'>
                    Create an account
                </button>
            </div>
            <p className='text-base text-center sm:text-start font-normal text-secondary mt-[-15px]'>Already have an account? <a href="#" className='underline text-primary font-medium'>Log in</a></p>
        </div>
    </div>
  )
}

export default RightSide