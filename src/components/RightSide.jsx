import React, { useEffect, useState } from 'react'
import Input from './Input'
import captcha from '../assets/captcha.png'
import { Moon, Sun } from 'lucide-react'

const RightSide = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    function toggleTheme() {
        setIsDarkMode(!isDarkMode)
        console.log(isDarkMode)
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        const prefersDark = storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        setIsDarkMode(prefersDark)
        document.documentElement.classList.toggle('dark', prefersDark)
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', isDarkMode)
    }, [isDarkMode])

  return (
    <div className='sm:w-1/2 flex justify-center'>
        <div className='flex w-[90%] sm:w-[75%] lg:w-[70%] flex-col gap-y-5'>

            <div className='flex justify-end'>
                <button onClick={() =>toggleTheme()} className='text-secondary dark:text-white cursor-pointer transition-colors' aria-label="Toggle theme">
                    {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
                </button>
            </div>

            <div className='text-center sm:text-start'>
                <h1 className='text-3xl font-medium text-secondary dark:text-white'>Create an account</h1>
                <p className='text-base font-normal text-secondary dark:text-gray-300'>Already have an account? <a href="#" className='underline text-primary font-normal'>Log in</a></p>
            </div>

            <div className='flex flex-col gap-y-4'>
                <Input name={"username"} id={"username"} type={"text"} label={"User name"} />
                <Input name={"email"} id={"email"} type={"email"} label={"Email"} />
                <Input name={"password"} id={"password"} type={"password"} label={"Password"} />
            </div>

            <p className='max-w-72 text-base my-2 lg:my-3 font-normal text-tertiary dark:text-gray-300'>By creating an account you agree to our <span className='text-primary dark:text-white underline'>Terms of use</span> and <span className='text-primary dark:text-white underline'>privacy Policy</span></p>

            <div className='px-3 dark:border-gray-600 py-2 max-w-88 rounded-2xl flex items-center justify-between border border-secondary'>
                <div className='flex items-center gap-2'>
                    <input className='size-4 accent-green-600' type="checkbox" id='notRobot' />
                    <label className='text-base dark:text-gray-300  text-secondary font-light' htmlFor="notRobot">I'm not a robot</label>
                </div>

                <img className='w-[60px] h-[46px]' src={captcha} alt="captcha" />
            </div>

            <div className='flex items-center justify-center sm:justify-start'>
                <button className='rounded-full dark:bg-neutral-700 text-white font-medium text-xl px-7 py-3 bg-neutral-400'>
                    Create an account
                </button>
            </div>
            <p className='text-base dark:text-gray-300 text-center sm:text-start font-normal text-secondary mt-[-15px]'>Already have an account? <a href="#" className='underline text-primary font-medium'>Log in</a></p>
        </div>
    </div>
  )
}

export default RightSide