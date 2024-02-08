import React from 'react'
import uz from '../../../assets/uzb.svg'
import { Link } from 'react-router-dom'

export const HeaderEnd = () => {

    return (
        <div className="header-end flex bg-transparent items-center justify-cetner gap-3">
            <div className="select-lang rounded-lg bg-blue-100 relative flex items-center justify-between">
                <img src={uz} className='absolute left-[1rem] text-2xl z-[1]' alt="Select img" />
                <select className="select select-normal select-bordered w-[6.5rem] bg-transparent border h-[2.5rem] text-lg font-semibold text-blue-600 ps-[3rem] p-[.33rem] rounded-lg">
                    <option value="uz">Uz</option>
                    <option value="eng">Eng</option>
                    <option value="ru">Ru</option>
                </select>
            </div>
            <Link onClick={() => document.getElementById('my_modal_3').showModal()} className="w-[6rem] h-[3rem] rounded-lg p-3 font-semibold border-0 bg-blue-700 flex items-center justify-around text-white">
                <i className="fa-solid fa-user"></i>
                <p>Kirish</p>
            </Link>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-gray-200 text-black"> 
                    <h3 className="font-bold text-lg flex items-center gap-1"><i className="fa-solid fa-user"></i> Kirish</h3>
                    <h1 className='text-center text-black font-bold'>Ассалому алайкум <br /> Хуш келибсиз!</h1>
                    <form method="dialog">
                        <button className="btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="mt-[1.5rem] flex flex-wrap items-center justify-around gap-5">
                        <label htmlFor="telnumber"></label>
                        <input id='telnumber' className="input bg-white text-black font-bold w-full join-item" type="tel" placeholder='Mobile Number' />
                        <p className='font-semibold italic'>To register ? <a className='text-blue-600 not-italic font-bold' href="/registratsiya">Sing up</a></p>
                        <button className="btn btn-success text-white w-50 join-item rounded-r-lg">Subscribe</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
