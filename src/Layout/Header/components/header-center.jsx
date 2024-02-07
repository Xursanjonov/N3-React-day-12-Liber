import React from 'react'
import dashboard from '../../../assets/dashboard-img.svg'

export const HeaderCenter = () => {
  return (
    <div className="header-center flex items-center justify-center gap-2">
      <div className="section bg-transparent relative flex items-center justify-between">
        <img src={dashboard} className='absolute left-[1rem] text-2xl z-[1] text-blue-600' alt="Rukunlar img" />
        <select className="select select-normal select-bordered max-w-xs w-[11rem] bg-transparent border h-[2.5rem] text-lg font-semibold text-blue-600 ps-[3rem] p-[.33rem] rounded-s-md">
          <option disabled selected>Rukunlar</option>
          <option>Phone</option>
          <option>Laptop</option>
          <option>Car</option>
        </select>
      </div>
      <div className="search-div w-[35rem] flex items-center justify-center">
        <input type="Search" className="w-full p-[.56rem] rounded-s-md bg-white z-[1] border-2 border-gray-300" placeholder='Search' />
        <i class="w-[3rem] ms-[-.5rem] text-end p-[.3rem] border-y-2 border-e-2 border-gray-300 rounded-lg text-2xl text-blue-600 fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
