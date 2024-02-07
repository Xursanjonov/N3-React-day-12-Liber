import React from 'react'

export const SliderCard = ({img, title}) => {
    return (
        <div className='slider-cards pb-[1rem]'>
            <div className="imgs"> <img src={img} alt="Code 8 img" /> </div>
            <p className='text-center font-semibold text-lg'>{title}</p>
        </div>
    )
}
