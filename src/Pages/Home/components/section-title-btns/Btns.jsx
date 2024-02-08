import React from 'react'

export const Btns = ({title}) => {
  return (
      <div className="w-[100%] newBook-title flex items-center justify-between">
          <h1 className='text-2xl font-bold text-black'>{title}</h1>
          <div className="flex justify-center h-[40px] items-center py-2 px-2 rounded-full gap-2 text-black">
              <button className="w-[2rem] h-[2.8rem] flex justify-center rounded-full text-3xl">«</button>
              <a href="#audio1" className="w-[15px] h-[15px] rounded-full bg-black active:w-[18px] active:h-[18px] active:bg-green-500"></a>
              <a href="#audio2" className="w-[15px] h-[15px] rounded-full bg-black active:w-[18px] active:h-[18px] active:bg-green-500"></a>
              <a href="#audio3" className="w-[15px] h-[15px] rounded-full bg-black active:w-[18px] active:h-[18px] active:bg-green-500"></a>
              <a href="#audio4" className="w-[15px] h-[15px] rounded-full bg-black active:w-[18px] active:h-[18px] active:bg-green-500"></a>
              <button className="w-[2rem] h-[2.8rem] flex justify-center rounded-full text-3xl">»</button>
          </div>
      </div>
  )
}
