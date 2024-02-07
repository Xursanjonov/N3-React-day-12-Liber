import React from 'react'

export const MiniCard = ({icon, title, text}) => {
    return (
        <div className='w-[100%] p-[1rem] bg-white rounded-xl shadow-md hover:shadow-lg hover:shadow-gray-500 flex items-center justify-center gap-[20px]'>
            <div className="w-[115px] h-[45px] text-lg mini-card-img text-blue-600 flex items-center justify-center bg-blue-100 rounded-lg">
                <i className={icon}></i>
            </div>
            <div className="mini-title">
                <h3 className='font-bold text-black'>{title}</h3>
                <p className=''>{text}</p>
            </div>
        </div>
    )
}
