import React from 'react'

export const FooterNavbar = ({ footerTitle, text1, text2, text3, text4 }) => {
    return (
        <nav className='flex flex-col justify-center items-start gap-3'>
            <h6 className="text-lg font-bold text-black">{footerTitle}</h6>
            <a className="link text-black link-hover">{text1?text1:''}</a>
            <a className="link text-black link-hover">{text2?text2:''}</a>
            <a className="link text-black link-hover">{text3?text3:''}</a>
        </nav>
    )
}
