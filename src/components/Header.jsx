import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

function Header() {
    return (
      
        <div className='flex flex-row px-40 py-6 bg-gradient-to-r from-red-700 to-red-300'>
            <div className='flex items-center '><IoArrowBackOutline  /></div>
            <ul className=' flex flex-row items-center gap-10 px-56'>
                <li className=' hover:bg-red-500 p-2 rounded-md'>Home</li>
                <li className='text-red-800 hover:bg-white p-2 rounded-md'>about</li>
                <li className=' hover:bg-red-500 p-2 rounded-md'>Cast</li>
                <li className=' hover:bg-red-500 p-2 rounded-md'>Trailer</li>
            </ul>
            <div> <img className="object-scale-down "
            src=" 
            https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" /></div>
        </div>
        
    )
}

export default Header
