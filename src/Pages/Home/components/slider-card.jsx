import React from 'react'
import oruel from '../../../assets/BookImg/img-1.png'
import rich2 from '../../../assets/BookImg/img-2.png'
import code_8 from '../../../assets/BookImg/img-3.png'
import qiz from '../../../assets/BookImg/img-4.png'
import mark from '../../../assets/BookImg/img-5.png'
// Audio Kitoblar imgs
import audioImg1 from '../../../assets/BookImg/image-1.png'
import audioImg2 from '../../../assets/BookImg/image-2.png'
import audioImg4 from '../../../assets/BookImg/image-4.png'
import audioImg5 from '../../../assets/BookImg/image-5.png'

export const SliderCard = ({ img, title, name, janir, reyting, audio, book }) => {
    return (
        <div id='slider-cards' className='py-[1rem] cursor-pointer'>
            <div className="imgs"> <img src={img} alt="Code 8 img" /> </div>
            <p className='text-center font-semibold text-lg'>{title ? title : ''}</p>
            <p className='px-2 font-semibold text-lg text-black pt-4'>{name ? name : ''}</p>
            <p className='px-2 text-blue-500 text-[.8rem]'>{janir ? janir : ''}</p>
            <div className="flex items-center justify-between pt-2 px-2">
                {reyting ? (<p className='flex items-center gap-1.5 text-orange-500 font-bold'><i className="fa-solid fa-star"></i> {reyting}</p>) : ''}
                <div className="slider-card-icons flex items-center justify-center gap-3">
                    {audio ? <i class="fa-solid fa-headphones"></i> : ''}
                    {book ? <i class="fa-solid fa-book"></i> : ''}
                </div>
            </div>
        </div>
    )
}

export const NewCard = () => {
  return (
      <div className="newBooks-sliders carousel w-full">
          <div id='newBooks1' className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={oruel} name={'1984'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} book={true} />
          </div>
          <div className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={rich2} name={'Rich dad poor dad'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} book={true} />
          </div>
          <div className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={code_8} name={'Код 8'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} book={true} />
          </div>
          <div className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={qiz} name={'Даниел КИЗ'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} book={true} />
          </div>
          <div className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={mark} name={'Бепарволикнинг но...'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} book={true} />
          </div>
          <div id='newBooks2' className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={rich2} name={'Rich dad poor dad'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} book={true} />
          </div>
          <div id='newBooks3' className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={qiz} name={'Даниел КИЗ'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} book={true} />
          </div>
          <div id='newBooks4' className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={oruel} name={'1984'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} book={true} />
          </div>
      </div>
  )
}

export const AudioBooksDiv = () => {
  return (
      <div className="newBooks-sliders carousel w-full">
          <div id='newBooks1' className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={audioImg1} name={'1984'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} />
          </div>
          <div className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={audioImg2} name={'Rich dad poor dad'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.2} audio={true} />
          </div>
          <div className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={code_8} name={'Код 8'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} />
          </div>
          <div className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={mark} name={'Даниел КИЗ'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.2} audio={true} />
          </div>
          <div className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={audioImg4} name={'Бепарволикнинг но...'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} />
          </div>
          <div id='newBooks2' className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={audioImg5} name={'Rich dad poor dad'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.2} audio={true} />
          </div>
          <div id='newBooks3' className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={audioImg1} name={'Даниел КИЗ'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.7} audio={true} />
          </div>
          <div id='newBooks4' className="carousel-item flex items-center justify-center w-1/5">
              <SliderCard img={audioImg4} name={'1984'} janir={'SIYOSAT, FANTASTIKA'} reyting={4.2} audio={true} />
          </div>
      </div>
  )
}
