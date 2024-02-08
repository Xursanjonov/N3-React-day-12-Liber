import React from 'react'
import { Carousel } from './Carousel'

const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
]

export const Slider = () => {
    return (
        <main className='w-[500px] bg-cyan-600 mx-auto p-3'>
            <div className="w-full flex items-center justify-center gap-3">
                <Carousel>
                    {slides?.map((item) => (
                        <img src={item} />
                    ))}
                </Carousel>
            </div>
        </main>
    )
}
