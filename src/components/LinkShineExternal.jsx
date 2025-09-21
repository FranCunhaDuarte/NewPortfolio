import React, { useRef } from 'react'
import ArrowCorner from '../assets/svg/ArrowCorner'
import gsap from 'gsap'

const LinkShineExternal = ({link = '',label = 'Undefined'}) => {

    const shine = useRef(null)
    const shineTween = useRef(null)

    const shineAnimation = () =>{

        if (shineTween.current && shineTween.current.isActive()) {
            return;
        }
        
        shineTween.current = gsap.fromTo(shine.current,
            { x: 0 },
            { x: 200, duration: 1, ease: 'none'}
        )
    }

  return (
    <>
        <div onMouseEnter={shineAnimation} className='w-[120px] xl:w-[130px] scale-[.85] xl:scale-100'><a className='bg-[#1F1F1F] mx-auto w-min px-4 py-1.5 rounded-[10px] border-[#a7a7a7] border text-white overflow-hidden flex items-center group relative' href={link} rel="noopener noreferrer" target='blank'><div ref={shine} className='absolute h-[120%] w-[15px] bg-white opacity-10 top-[50%] translate-y-[-50%] -left-5 rotate-12'></div><span className='xl:pr-0 xl:group-hover:pr-2 pr-2 duration-300 text-nowrap'>{label}</span><ArrowCorner className='w-[10px] xl:max-w-0 overflow-hidden xl:opacity-0 transition-all duration-300 xl:group-hover:max-w-[10px] opacity-100 xl:group-hover:opacity-100' /></a></div>
    </>
  )
}

export default LinkShineExternal