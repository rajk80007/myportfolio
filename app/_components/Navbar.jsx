import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="bg-gradient-to-r from-cyan-500 via-gray-500 to-blue-500 text-white h-14 p-5 flex justify-between items-center">
        <div>
          <h1>
           <Link href='/'> <img src="/logo.png" alt="logo" width={60} height={60}/> </Link>
            </h1>
        
        </div>
        <ul className="flex justify-center items-center gap-6">
        <Link href='/'><li className='cursor-pointer p-3 hover:underline hover:bg-red-500 rounded-sm'> Home </li></Link>
        <Link href='/about'><li className='cursor-pointer p-3 hover:underline hover:bg-red-500 rounded-sm'>About</li> </Link>
        <Link href='/skills'><li className='cursor-pointer p-3 hover:underline hover:bg-red-500 rounded-sm'>Skills</li> </Link>
        <Link href='/projects'><li className='cursor-pointer p-3 hover:underline hover:bg-red-500 rounded-sm'>Projects</li> </Link>
        <Link href='/contact'><li className='cursor-pointer p-3 hover:underline hover:bg-red-500 rounded-sm'>Contact</li></Link>
        </ul>
        <div>
          <Link href='/resume'> <button className='px-3 py-2 hover:underline hover:bg-red-500 border border-red-500 rounded-lg'> Resume</button></Link>
        </div>
        </div>

    </div>
  )
}

export default Navbar