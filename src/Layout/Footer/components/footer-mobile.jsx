import React from 'react'
import footerImg1 from '../../../assets/googleplay.svg'
import footerImg2 from '../../../assets/appstore.svg'

export const FooterMobile = () => {
  return (
      <div className="footermobile flex flex-col justify-center items-start gap-3">
          <h6 className='text-lg text-black font-bold'>Мобил илова</h6>
          <img className='w-[120px]' src={footerImg1} alt="img 1" />
          <img className='w-[120px]' src={footerImg2} alt="img 2" />
    </div>
  )
}
