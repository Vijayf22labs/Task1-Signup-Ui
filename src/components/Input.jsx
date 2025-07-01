import { EyeOff } from 'lucide-react'
import React from 'react'

const Input = ({ name, id, type, label }) => {
  return (
    <div className='flex flex-col gap-y-1'>
        {type != "password" ?
            <label className='font-[400] text-[16px] text-[#666666]' htmlFor={name}>{label}</label> :
            <div className='flex items-center justify-between'>
                <label className='font-[400] text-[16px] text-[#666666]' htmlFor={name}>{label}</label>
                <p className='text-[14px] sm:text-[18px] text-[#666666] font-[400] flex mr-[10px] items-center gap-x-1'><EyeOff className='size-4' /> Hide</p>
            </div>
        }
        <input className='border outline-none border-gray-300 rounded-lg py-2 px-3' type={type} id={id} name={name} />
        {type == "password" &&
            <p className='text-[14px] text-[#666666] mt-[-3px] font-[400]'>Use 8 or more characters with a mix of letters, numbers & symbols</p>}
    </div>
  )
}

export default Input