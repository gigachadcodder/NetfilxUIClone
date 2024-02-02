import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

function Header() {
    return (
      
        <div className='flex flex-row px-40 py-6 '>
            <div className='flex items-center '><IoArrowBackOutline  /></div>
            <ul className=' flex flex-row items-center gap-10 px-56 pl'>
                <li className=''>Home</li>
                <li className='text-red-600'>about</li>
                <li>Cast</li>
                <li>Trailer</li>
            </ul>
            <div> <img className="object-scale-down "
            src=" 
            https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" /></div>
        </div>
        
    )
}

export default Header
