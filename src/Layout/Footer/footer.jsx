import React from 'react'
import { FooterNavbar } from './components/footer-nav'
import { FooterMobile } from './components/footer-mobile'
import img from '../../assets/humo.png'

export const Footer = () => {
    return (
        <footer className="w-full">
            <div className="w-full footer-top pt-[31px] pb-[63px] ps-[75px] grid items-start grid-cols-4 p-10 bg-sky-100">
                <FooterNavbar footerTitle={'Платформа хақида'} text1={'Liber ўзи нима?'} text2={'Фойдаланиш шартлари'} text3={'Ёрдам'} />
                <FooterNavbar footerTitle={'Обуна хақида'} text1={'Обуна бўлиш'} text2={'Қандай тўлаш'} />
                <FooterNavbar footerTitle={'Китоблар'} text1={'Аудио китоблар'} text2={'Электрон китоблар'} text3={'Китоблар'} />
                <FooterMobile />
            </div>
            <div className="w-full py-[2rem] px-[75px] bg-sky-950 footer-center flex items-start justify-between text-white">
                <aside className='footer-bottom-icons text-start w-[300px]'>
                    <p className='text-lg mb-4'>Ижтимоий тармоқлар</p>
                    <div className="footer-icons flex items-center justify-between text-2xl">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-tiktok"></i>
                        <i className="fa-brands fa-telegram"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </aside>
                <aside className='footer-bottom-contact'>
                    <p className='text-start mb-3'>Боғланиш</p>
                    <a href="tel" className='flex items-center justify-center gap-5'>+998 90 253 77 53 <span>support@liber.uz</span></a>
                </aside>
                <aside className='footer-bottom-card'>
                    <p className='text-start mb-3'>Биз қабул қиламиз</p>
                    <div className="flex items-center justify-center gap-2">
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                    </div>
                </aside>
            </div>
        </footer>
    )
}
