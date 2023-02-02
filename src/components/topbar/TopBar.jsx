import React from 'react'
import '../topbar/TopBar.css'

const TopBar = () => {
  return (
    // <div className='bg-gray-200 px-3 py-2 w-full topbar'>
    //   <p>Pokelight</p>
    // </div>
    <div className='topbar flex items-center justify-between w-full h-[50px]'>
      <p className='font-bold ml-8 lg:ml-28 text-xl text-white'>Pokelight</p>
    </div>
  )
}

export default TopBar