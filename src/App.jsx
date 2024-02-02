import { useState } from 'react'
import Header from './components/Header'
import squidGameLogo from "./images/logo.png"
import gunman from "./images/man.png"
import imdb from "./images/imdb.png"
import { IoMdTrendingUp } from "react-icons/io";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <div className=' flex flex-row gap-28 px-20'>
        <div className='flex flex-col'>
        <img 
        className='object-scale-down'
        src={squidGameLogo} alt="" />
        <div className=''>
        Life is like a game, there are many players. 
        If you don’t play with them, they’ll play with you.
        </div>
        <div className='flex flex-row gap-1'>
        <IoMdTrendingUp/>
          Trending #1
        </div>
        <div className='text-center my-12'>
          <button className=" bg-red-600 rounded-xl">
            continue watching 
          </button>
          <div className='pt-9'>
          <div className='flex flex-row' >
            S1 E9 2021<div> <img src={imdb} alt="" /> </div>
            <div>8.2</div>
          </div>
          
          </div>
        </div>
          </div>
        <img src={gunman} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
