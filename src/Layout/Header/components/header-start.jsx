import React from 'react'
import logo from '../../../assets/logo.svg'

export const HeaderStart = () => {
  return (
      <a href='/' className="header-start flex items-center justify-center gap-[.8rem]">
          <div className="w-[4rem] h-[4rem] p-2 header-log rounded-md bg-blue-800 flex items-center justify-center">
              <img className='w-[100%] h-[100%]' src={logo} alt="Logo" />
          </div>
          <div className="header-start-title">
              <h2 className='text-4xl mb-1 text-black font-bold bg-color'>Liber</h2>
              <p className='text-black'>Barcha turdagi kitoblar</p>
          </div>
      </a>
  )
}
