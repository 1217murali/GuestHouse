import React from 'react'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div
          className="bg-[url('./assets/Home.webp')] bg-cover bg-center h-screen w-full"
        ><Navbar />
      </div>

    </div>
  )
}

export default App
