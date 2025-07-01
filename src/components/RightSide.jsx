import React from 'react'
import Input from './Input'
import captcha from '../assets/captcha.png'

const RightSide = () => {
  return (
    <div className='flex flex-col gap-y-5 lg:w-1/3'>
        <div className='space-y-1'>
            <h1 className='text-3xl font-medium text-slate-800'>Create an account</h1>
            <p className='text-sm font-medium text-slate-500'>Already have an account? <a href="#" className='underline text-slate-800 font-medium'>Log in</a></p>
        </div>

        <div className='flex flex-col gap-y-3'>
            <Input name={"username"} id={"username"} type={"text"} label={"User name"} />
            <Input name={"email"} id={"email"} type={"email"} label={"Email"} />
            <Input name={"password"} id={"password"} type={"password"} label={"Password"} />
        </div>

        <p className='max-w-68 text-sm my-4 font-medium text-slate-500'>By creating an account you agree to our <span className='text-slate-800 underline'>Terms of use</span> and <span className='text-slate-800 underline'>privacy Policy</span></p>
    
        <div className='px-3 py-2 max-w-88 rounded-lg flex items-center justify-between border border-slate-800'>
            <div className='flex items-center gap-2'>
                <input className='size-4' type="checkbox" id='notRobot' />
                <label className='text-sm text-slate-500 font-medium' htmlFor="notRobot">I'm not a robot</label>
            </div>

            <img className='w-20' src={captcha} alt="captcha" />
        </div>

        <div>
            <button className='rounded-full text-white font-medium text-lg px-7 py-3 bg-neutral-400'>
                Create account
            </button>
        </div>
        <p className='text-sm font-medium text-zinc-500 mt-[-15px]'>Already have an account? <a href="#" className='underline text-slate-800 font-medium'>Log in</a></p>
    </div>
  )
}

export default RightSide