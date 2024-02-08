import React from "react"
export const Carousel = ({ children: slides }) => {
    const [img, setImg] = React.useState(0)
    const back = () => setImg(img => img == 0 ? slides.length - 1 : img - 1)
    const next = () => setImg(img => img == slides.length - 1 ? 0 : img + 1)
    
    return (
        <div className='carousel w-[450px] overflow-hidden relative'>
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${img *100}%)`}}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
                <button onClick={back} className="w-[3rem] rounded-full text-center  h-[2.5rem] pb-[2rem] bg-white text-black text-3xl">«</button>
                <button onClick={next} className="w-[3rem] rounded-full text-center  h-[2.5rem] pb-[2rem] bg-white text-black text-3xl">»</button>
            </div>
        </div>
    )
}
