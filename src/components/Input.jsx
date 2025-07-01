import { EyeOff } from 'lucide-react'
import React from 'react'

const Input = ({ name, id, type, label }) => {
  return (
    <div className='flex flex-col gap-y-1'>
        {type != "password" ?
            <label className='font-medium text-slate-500' htmlFor={name}>{label}</label> :
            <div className='flex items-center justify-between'>
                <label className='font-medium text-slate-500' htmlFor={name}>{label}</label>
                <p className='text-slate-400 text-xs font-medium flex items-center gap-x-1'><EyeOff className='size-4' /> Hide</p>
            </div>
        }
        <input className='border outline-none border-gray-300 rounded-lg py-2 px-3' type={type} id={id} name={name} />
        {type == "password" &&
            <p className='text-xs text-slate-400 font-medium'>Use 8 or more characters with a mix of letters, numbers & symbols</p>}
    </div>
  )
}

export default Input