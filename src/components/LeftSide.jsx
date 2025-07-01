import React from 'react'
import leftSideImg from '../assets/leftSide.png'

const LeftSide = () => {
    return (
        <div className='h-full w-1/2 hidden sm:flex items-center justify-center'>
            <img className='h-full w-full' src={leftSideImg} alt="leftImg" />
        </div>
    )
}

export default LeftSide