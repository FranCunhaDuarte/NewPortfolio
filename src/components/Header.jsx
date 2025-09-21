import React, { useEffect, useState } from 'react'
import LinkShineExternal from './LinkShineExternal'
import { Link } from 'react-router-dom'

const Header = () => {

  const [atTop,setAtTop] = useState(false)
  const [show,setShow] = useState(true)
  const [lastScroll,setLastScroll] = useState(0)

  useEffect(()=>{

    const handleScroll = () =>{
      const currentScroll = window.scrollY

      if (currentScroll <= 10){
        setAtTop(true)
      } else{
        setAtTop(false)

        if(currentScroll > lastScroll){
          setShow(false)
        } else{
          setShow(true)
        }
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);

  },[lastScroll])



  return (
    <>
        <header className='w-full h-[75px] fixed top-0 left-0 z-30 transition-all duration-[.6s]' style={{top: show ? '0px' : '-75px'}}>
            <div className='grid xl:grid-cols-[1fr_70%_1fr] h-full z-40 relative'>
              <div></div>
              <div className='w-[95%] flex items-center justify-between mx-auto'>
                <Link to={'/'}>
                  <div className='flex flex-col items-start font-sfpro'>
                    <span className='text-white text-[1rem] xl:text-[1.2rem] leading-4'>Franco Cunha Duarte</span>
                    <span className='text-[#c9c9c9] font-normal text-[.8rem] xl:text-[1rem] skew-x-[-10deg] leading-4'>Front-end developer</span>
                  </div>
                </Link>
                <div className='flex flex-row justify-between'>
                  <LinkShineExternal link='https://www.linkedin.com/in/francocunhaduarte/' label='LinkedIn' />
                  <LinkShineExternal link='https://github.com/FranCunhaDuarte' label='GitHub' />
                </div>
              </div>
              <div></div>
            </div>
            <div className='absolute bottom-0 left-0 h-[1px] w-full z-40' style={{backgroundImage: 'linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0) 100%)'}}></div>
            <div className='absolute w-full h-full bg-[#00000000] backdrop-blur-2xl top-0 left-0 z-[35] transition-opacity duration-[.6s] ' style={{opacity: atTop ? '0' : '1' }}></div>
        </header>
    </>
  )
}

export default Header