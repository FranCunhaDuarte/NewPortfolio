import React, { useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const LinkShine = ({link = '',label = 'Undefined', ref}) => {

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
        <Link to={link}>
            <div useRef={ref} onMouseEnter={shineAnimation}><a className='bg-[#1F1F1F] mx-auto w-min px-7 py-2 rounded-full border-white-50 border text-white overflow-hidden flex items-center group relative' rel="noopener noreferrer" target='blank'><div ref={shine} className='absolute h-[120%] w-[15px] bg-white opacity-10 top-[50%] translate-y-[-50%] -left-5 rotate-12'></div><span className='duration-300 text-nowrap'>{label}</span></a></div>
        </Link>
    </>
  )
}

export default LinkShine