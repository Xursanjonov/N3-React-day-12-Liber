import React from 'react'

export const Rukunlar = ({ img, title }) => {
    return (
        <div className='rukunlar-card flex flex-col items-center justify-center'>
            <div className="ruknlar-img"> <img src={img} alt="" /> </div>
            <p className='text-lg font-bold text-white absolute flex pt-[7.5rem]'>{title}</p>
        </div>
    )
}
