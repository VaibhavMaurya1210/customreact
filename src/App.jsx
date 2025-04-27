// import { useState } from 'react'
import React, { useState } from 'react'


function App() {

  const [color, setColor] = useState()

  return (
    <>
        <div className='w-fullkl;"
         h-screen' style={{backgroundColor:color}}>
          <h1 className='flex justify-center animate-bounce text-5xl absolute inset-x-0 bottom-96 font-bold'>Change BackGround Color</h1>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
              <button className=' text-white outline-none px-4 py-1 rounded-full shadow-sm cursor-pointer' style={{backgroundColor: 'red'}} onClick={() => setColor("red")}>Red</button>
              <button className=' text-white outline-none px-4 py-1 rounded-full shadow-sm cursor-pointer' style={{backgroundColor: 'blue'}} onClick={() => setColor("Blue")}>Blue</button>
              <button className=' text-white outline-none px-4 py-1 rounded-full shadow-sm cursor-pointer' style={{backgroundColor: 'green'}} onClick={() => setColor('green')}>Green</button>
              <button className=' text-black outline-none px-4 py-1 rounded-full shadow-sm cursor-pointer' style={{backgroundColor: 'yellow'}} onClick={() => setColor('Yellow')}>Yellow</button>
              <button className=' text-white outline-none px-4 py-1 rounded-full shadow-sm cursor-pointer' style={{backgroundColor: 'orange'}} onClick={() => setColor('Orange')}>Orange</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
