import React from 'react'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'

const App = () => {
  return (
    <main className='flex transition-all duration-200 dark:bg-gray-900 max-w-[1440px] mx-auto items-center justify-center my-7 sm:my-0 sm:justify-normal w-full h-screen'>
      <LeftSide />
      
      <RightSide />
    </main>
  )
}

export default App