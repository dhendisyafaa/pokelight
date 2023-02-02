import React from 'react'

function Modal({ onClick, id, name, image, type, weight, height, stats, statsName }) {
  return (
    <div className='flex fixed top-0 left-0 z-20 w-full h-[100%] items-center justify-evenly bg-lime-500'>
      <div onClick={onClick} className='absolute top-[50px] right-[50px] rounded-full bg-red-400 py-1 px-2 text-white font-black cursor-pointer'>X</div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div className='flex items-center justify-around flex-col w-[450px] h-[500px]'>
        <div className="stat-con-tit ">
          <img src={image} alt={name} className='img-title w-[45px] min-h-[60px] mr-[10px]' />
          <p className='w-[180px] text-black'>No. {id}</p>
          <p>{name}</p>
          {/* <img src="" alt="" /> */}
          <div className='image h-6 w-7 mr-2 bg-red-500 '></div>
        </div>
        <img src={image} alt={name} />
        <div className='flex w-full'>
          <div className='stat-left bg-yellow-400 text-center flex flex-col w-[50%] text-lg'>
            <p>type</p>
            <p>height</p>
            <p>weight</p>
          </div>
          <div className='stat-right bg-purple-400 text-center flex flex-col w-[50%] text-lg'>
            <p>{type}</p>
            <p>{height} 0 cm</p>
            <p>{weight} lbs</p>
          </div>
        </div>
        <div className="base-stats flex w-full bg-white">
          <div className='text-center w-full'>
            {statsName.map((stats) => {
              <p className='stats'>{stats}</p>
            })}
          </div>
          <div className='text-center w-full'>
            {statsName.map((stats) => {
              <p className='stats'>{stats}</p>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal