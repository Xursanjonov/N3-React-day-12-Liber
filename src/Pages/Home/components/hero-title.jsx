import React from 'react'

export const HeroTitle = () => {
    return (
        <div className="w-[261px] h-[366px] hero-title text-white rounded-xl px-[24px] py-[32px] bg-blue-800">
            <h2 className='text-2xl mt-3 font-bold'>Китоб ўқишни <br /> ёқтирасизми?</h2>
            <h5 className='pt-[20px] pb-[50px]'>Унда пулингизни тежаш <br /> учун ўзингиз йоқтирган <br /> рукнга обуна бўлинг</h5>
            <button className="btn bg-white w-[210px] h-[48px] flex items-center justify-center text-black font-bold">
                <i className="fa-solid fa-heart"></i>
                <span>Обуна бўлиш</span>
            </button>
        </div>
    )
}
