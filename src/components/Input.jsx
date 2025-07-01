import { EyeOff } from 'lucide-react'
import React from 'react'

const Input = ({ name, id, type, label }) => {
  return (
    <div className='flex flex-col gap-y-1'>
        {type != "password" ?
            <label className='font-normal dark:text-gray-300 text-base text-secondary' htmlFor={name}>{label}</label> :
            <div className='flex items-center justify-between'>
                <label className='font-normal dark:text-gray-300 text-base text-tertiary' htmlFor={name}>{label}</label>
                <p className='text-sm dark:text-gray-300 sm:text-lg text-tertiary font-normal flex mr-[10px] items-center gap-x-1'><EyeOff className='size-4' /> Hide</p>
            </div>
        }
        <input className='border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 border-gray-300 rounded-lg py-2 px-3' type={type} id={id} name={name} />
        {type == "password" &&
            <p className='text-sm dark:text-gray-300 text-tertiary mt-[-3px] font-normal'>Use 8 or more characters with a mix of letters, numbers & symbols</p>}
    </div>
  )
}

export default Input