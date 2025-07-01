import React from 'react'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'

const App = () => {
  return (
    <main className='flex items-center justify-center my-7 lg:my-0 lg:justify-normal gap-x-20 w-full h-screen'>
      <LeftSide />
      
      <RightSide />
    </main>
  )
}

export default App