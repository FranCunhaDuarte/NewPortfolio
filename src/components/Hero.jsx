import React from 'react'
import Title from './Title'
import Download from '../assets/svg/Download'

const Hero = () => {
  return (
    <div className='h-[60vh] xl:h-screen pt-[70px] relative flex flex-col justify-between'>
      <h1 className="sr-only">
        Franco Duarte – Frontend Developer Portfolio
      </h1>
      <Title />
      <div className='self-center py-14 flex items-center'>
        <a href="/portfolio.pdf" download="Franco_Duarte_Portfolio.pdf" className='flex relative h-min w-fit mx-auto'>
                <div className='h-10 w-full xl:w-min bg-[#2F2F2F] border border-white-50 items-center flex justify-center px-4 rounded-l-[10px]'>
                    <span className='cursor-pointer text-nowrap text-white' >Download CV</span>
                </div>
                <div className='cursor-pointer flex justify-center items-center h-10 w-12 bg-[#212121] border border-l-0 border-white-50 rounded-r-[10px]'>
                    <Download className='w-6' />
                </div>
            </a>
      </div>
    </div>
  )
}

export default Hero