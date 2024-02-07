import React from 'react'
import { SliderCard } from './components/slider-card'
import { MiniCard } from './components/miniCard'
import { HeroTitle } from './components/hero-title'
import { Rukunlar } from '../Rukunlar/rukunlar'
// Image
import code8 from '../../assets/code-8-img.png'
import oruell from '../../assets/oruell.png'
import rich from '../../assets/rich.png'
import heroBg from '../../assets/hero-girl.png'
import jahon from '../../assets/jahon.png'
import uzbek from '../../assets/uzbek.png'
import biznes from '../../assets/biznes.png'
import bolalar from '../../assets/bolalar.png'
import ditectiv from '../../assets/ditectivlar.png'
import fantastic from '../../assets/fantasticlar.png'
// Image end


export const Home = () => {
  return (
    <>
      <section className="home-hero bg-white w-full px-[59px] pt-[1rem] pb-[3.5rem] flex items-center justify-center gap-8">
        <div className="slider-div rounded-md flex pt-[32px] text-black pe-[1rem] items-center justify-between bg-blue-200">
          <div className="hero-start flex flex-col items-center justify-between">
            <p className='hero-start-title w-100 text-2xl text-center font-bold text-black'>Кўп ўқилаётганлар</p>
            <div className="girlImg mb-[-1.55rem]"> <img className='w-100' src={heroBg} alt="" /> </div>
          </div>
          <button className="w-[3rem] h-[2rem] rounded-full text-4xl bg-white text-center text-black pb-[3rem]">«</button>
          <SliderCard img={oruell} title={'1984'} />
          <SliderCard img={code8} title={'Code 8'} />
          <SliderCard img={rich} title={'Rich dad poor dad'} />
          <button className="w-[3rem] h-[2rem] rounded-full text-4xl bg-white text-center text-black pb-[3rem]">»</button>
        </div>
        <HeroTitle />
      </section>
      <section className='home-minicards bg-white px-[75px] py-[3.5rem] grid grid-cols-4 gap-8'>
        <MiniCard icon={'fa-solid fa-bolt'} title={'Тезкор етказиш'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'} />
        <MiniCard icon={'fa-solid fa-shield'} title={'Тўлов химояси'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'} />
        <MiniCard icon={'fa-solid fa-thumbs-up'} title={'Юқори сифат'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'} />
        <MiniCard icon={'fa-solid fa-star'} title={'Энг capa китоблар'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'} />
      </section>
      <section className='rukunlar px-[75px] py-[40px] bg-white'>
        <h1 className='text-4xl text-black font-bold'>Рукнлар</h1>
        <div className="grid grid-cols-6 gap-4 mt-[32px] mb-[64px]">
          <Rukunlar img={jahon} title={'Жахон адабиёти'} />
          <Rukunlar img={uzbek} title={'Узбек адабиёти'} />
          <Rukunlar img={biznes} title={'Бизнес ва психология'} />
          <Rukunlar img={bolalar} title={'Болалар адабиёти '} />
          <Rukunlar img={ditectiv} title={'Детективлар'} />
          <Rukunlar img={fantastic} title={'Фантастика'} />
        </div>
      </section>
    </>
  )
}
