import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutMe = () => {

  const title = useRef(null)
  const titleLine = useRef(null)

  useEffect(() =>{
    if (!title ) return

    const tl = gsap.timeline()

    tl.fromTo(titleLine.current,{scaleX:0},{scaleX:1,duration: .6, ease:'power2', delay:.5})
    .fromTo(title.current,{yPercent: 100}, {yPercent: 0, duration: 1, ease: "back.out"})
  },[])

  useEffect(() =>{
    gsap.fromTo('.desc-para',
      { x: -50,
        opacity: 0 },

      { x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2',
        stagger: .8,
        delay: 1}
    )
  },[])

  const photoMe = useRef(null)

  useEffect(() =>{
    if(!photoMe) return

    gsap.fromTo(photoMe.current,
      { opacity: 0, y: 150 },
      { scrollTrigger: photoMe.current, opacity: 1, y: 0, duration: 1, ease: 'power2' }
    )
  },[])


  return (
    <>
        <div className='flex flex-col items-center justify-center gap-28 my-20' >
          <div className='grid grid-cols-2'>
            <div className='w-[90%] mx-auto' ref={photoMe}>
              <div className='w-full h-[650px] bg-primary border border-white-25 relative p-2 rounded-[1rem]' style={{boxShadow: '0px 0px 141px 0px rgba(255,255,255,0.25)'}}>
                <div className='w-[200px] h-[4px] absolute top-[-4px] left-1/2 -translate-x-1/2 bg-white rounded-t-full ' style={{boxShadow: '0px 0px 30px 0px rgba(255,255,255,0.75)'}}></div>
                <div className='w-full h-full border border-white-25 rounded-[.5rem] bg-no-repeat bg-cover' style={{backgroundImage: 'url(./media/images/myimage.jpg)'}}></div>
              </div>
            </div>
            <div className='w-[90%] mx-auto text-desc-cont'>
              <div className='overflow-hidden px-7 relative'><div ref={titleLine} className='line-gradient-to-right absolute bottom-0 left-0'></div><span ref={title} className='title-glow font-black inline-block xl:text-[3vw] text-nowrap text-[10.5vw] font-sfpro skew-x-[-15deg] bg-clip-text text-transparent' style={ {backgroundImage: "var(--gradient-primarywhite)"} }>BEHIND THE CODE</span></div>
              <p className='desc-para font-sfpro text-white text-start mb-10 mt-10 '>Hi, I'm Franco, a passionate Front-End Developer dedicated to creating modern, fast, and engaging digital experiences. I specialize in turning ideas into functional interfaces with a strong focus on performance, accessibility, and intuitive design.</p>
              <p className='desc-para font-sfpro text-white text-start mb-10 '>I enjoy combining the logic of code with the creativity of design, paying attention to every detail—from semantic HTML and smooth CSS, to optimized interactivity with JavaScript and frameworks like React.</p>
              <p className='desc-para font-sfpro text-white text-start mb-10 '>I'm constantly learning and exploring new technologies, staying up-to-date with best practices to build scalable and maintainable web applications. My goal is for every project not only to look great but also to deliver a solid and memorable user experience.</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default AboutMe