import React, { useRef } from 'react'
import gsap from 'gsap'

const TechBar = ({color = '#6C6C6C', techName = '', techDesc= '', svgIcon}) => {

    const shine = useRef(null)
    const shineTween = useRef(null)

    const shineAnimation = () =>{


        if (shineTween.current && shineTween.current.isActive()) {
            return;
        }
        
        shineTween.current = gsap.fromTo(shine.current,
            { x: -20 },
            { x: shine.current.parentElement.offsetWidth + 20, duration: 1, ease: 'none'}
        )
    }

  return (
    <>
        <div onMouseEnter={shineAnimation} className='flex w-full bg-[#161616] rounded-full border border-[#2F2F2F] relative overflow-hidden'>
            {/* Shine effect */}
            <div ref={shine} className='absolute h-[120%] w-[25px] bg-white opacity-10 top-[50%] translate-y-[-50%] -left-5 rotate-12'></div>

            {/* Background color gradient */}
            <div className='w-full h-full absolute top-0 left-0 z-[60] opacity-50' style={{backgroundImage: `linear-gradient(90deg,${color} 0%, rgba(22, 22, 22, 0) 100%)`}}></div>


            {/* Logo tech */}
            <div className='h-[65px] p-2 relative z-[70]'>
                <div className='h-full aspect-square rounded-[50%] flex items-center justify-center' style={{backgroundColor: color}}>
                    {svgIcon}
                </div>
            </div>

            {/* Text tech */}
            <div className='z-[70] flex flex-col text-start justify-center'>
                <span className='font-sfpro font-bold text-[1.2rem] uppercase text-white leading-5'>{techName}</span>
                <span className='font-sfpro text-[#d4d4d4] text-[.9rem] leading-4 skew-x-[-10deg]'>{techDesc}</span>
            </div>
        </div>
    </>
  )
}

export default TechBar