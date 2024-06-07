import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="bg-gradient-to-r from-cyan-500 via-gray-500 to-blue-500 text-white h-14 p-5 flex justify-between items-center">
        
        <h1>Navbar</h1>
        <ul className="flex justify-center items-center gap-6">
            <li className='cursor-pointer p-3 hover:underline hover:bg-red-500'>Home</li>
            <li className='cursor-pointer p-3 hover:underline hover:bg-red-500'>About</li>
            <li className='cursor-pointer p-3 hover:underline hover:bg-red-500'>Skills</li>
            <li className='cursor-pointer p-3 hover:underline hover:bg-red-500'>Projects</li>
            <li className='cursor-pointer p-3 hover:underline hover:bg-red-500'>Contact</li>
        </ul>
        <div>

        </div>
        </div>

    </div>
  )
}

export default Navbar