import { useState } from 'react'
import Header from './components/Header'
import squidGameLogo from "./images/logo.png"
import gunman from "./images/man.png"
import imdb from "./images/imdb.png"
import { IoMdTrendingUp } from "react-icons/io";
import background from "./images/Background.png"

function App() {

  return (
    <>
      <div className=' bg-gradient-to-r from-pink-500 to-pink-800 h-'>
        <img className='w-full h-100% absolute '
        src={background} alt="" />
        <Header />
        <div className=' flex flex-row gap-10 px-20'>
          <div className='flex flex-col '>
            <img
              className='object-scale-down '
              src={squidGameLogo} alt="" />
            <div className='px-24 text-white'>
              Life is like a game, there are many players.
              If you don’t play with them, they’ll play with you.
            </div>
            <div className='flex flex-row gap-1 px-24 py-2' >
              <div className='py-1'><IoMdTrendingUp /></div>
              Trending #1
            </div>
            <div className='text-center my-12'>
              <button className=" bg-gradient-to-r from-red-500 to-red-700 rounded-xl px-3 py-1">
                continue watching
              </button>
              <div className='pt-9 '>
                <div className='flex flex-row center justify-center gap-5' >
                  S1 E9 2021<div className='py-1'> <img src={imdb} alt="" /> </div>
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
