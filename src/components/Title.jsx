import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Title = () => {

    const title1 = useRef(null)
    const title2 = useRef(null)

    const title1Line = useRef(null)
    const title2Line = useRef(null)
    
    useEffect(() => {
        if(!title1) return
        if(!title2) return

        gsap.fromTo(title1Line.current,{scaleX:0},{scaleX:1,duration: 1, ease:'power2', delay:.5})
        gsap.fromTo(title2Line.current,{scaleY:0},{scaleY:1,duration: 1, ease:'power2', delay:1.3})

        gsap.fromTo(title1.current,{yPercent: -100}, {yPercent: 0, duration: 1, ease: "back.out", delay: 1})
        gsap.fromTo(title2.current,{xPercent: -120}, {xPercent: 0, duration: 1, ease: "back.out(1)", delay: 1.9})

    },[])

  return (
    <>
      <div className='flex flex-col items-start mx-auto w-fit pt-20 overflow-y-hidden'>
        <div className='overflow-hidden px-7 pb-3 relative'><div ref={title1Line} className='line line-gradient-to-right'></div><span ref={title1} className='title-glow inline-block xl:text-[8vw] text-[10.5vw] italic font-gloock skew-x-[-15deg] bg-clip-text text-transparent' style={ {backgroundImage: "var(--gradient-primarywhite)"} }>Creativity Knows</span></div>
        <div className='overflow-hidden px-7 pr-10 relative'><div ref={title2Line} className='line line-gradient-to-top'></div><span ref={title2} className='title-glow inline-block xl:text-[8vw] text-[10.5vw] italic font-gloock skew-x-[-15deg] bg-clip-text text-transparent' style={ {backgroundImage: "var(--gradient-primarywhite)"} }>No Limits</span></div>
      </div>
    </>
  )
}

export default Title