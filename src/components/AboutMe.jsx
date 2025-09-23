import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TechBar from './TechBar'

// Icons SVG
import Figma from '../assets/svg/Figma'
import Html5 from '../assets/svg/Html5'
import Tailwind from '../assets/svg/Tailwind'
import Javascript from '../assets/svg/Javascript'
import ReactIcon from '../assets/svg/ReactIcon'
import Git from '../assets/svg/Git'
import Python from '../assets/svg/Python'
import Postgresql from '../assets/svg/Postgresql'
import Java from '../assets/svg/Java'
import MongoDB from '../assets/svg/MongoDB'
import Php from '../assets/svg/Php'

const AboutMe = () => {

  const title = useRef(null)
  const titleLine = useRef(null)

  // Animation Text Glow
  useEffect(() =>{
    if (!title ) return

    const tl = gsap.timeline()

    tl.fromTo(titleLine.current,{scaleX:0},{scrollTrigger: titleLine.current, scaleX:1,duration: .6, ease:'power2', delay: 1})
    .fromTo(title.current,{yPercent: 100}, {scrollTrigger: title.current, yPercent: 0, duration: 1, ease: "back.out"})
  },[])

  // Animation desc about me
  useEffect(() =>{
    gsap.fromTo('.desc-para',
      { y: 50,
        opacity: 0 },

      { y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2',
        stagger: .8,
        delay: .5}
    )
  },[])

  const photoMe = useRef(null)

  // Animation photo
  useEffect(() =>{
    if(!photoMe) return

    gsap.fromTo(photoMe.current,
      { opacity: 0, y: 150 },
      { scrollTrigger: photoMe.current, opacity: 1, y: 0, duration: 1, ease: 'power2'}
    )
  },[])


  return (
    <>
        <div className='flex flex-col items-center justify-center gap-28 my-20' >
          {/* About Me Text & Photo */}
          <div className='grid grid-cols-2'>
            {/* Photo Profile */}
            <div className='w-[90%] mx-auto' ref={photoMe}>
              <div className='w-full max-w-[500px] h-[650px] bg-primary border border-white-25 relative p-2 rounded-[1rem] mx-auto' style={{boxShadow: '0px 0px 141px 0px rgba(255,255,255,0.25)'}}>
                <div className='w-[200px] h-[4px] absolute top-[-4px] left-1/2 -translate-x-1/2 bg-white rounded-t-full ' style={{boxShadow: '0px 0px 30px 0px rgba(255,255,255,0.75)'}}></div>
                <div className='w-full h-full border border-white-25 rounded-[.5rem] bg-no-repeat bg-cover bg-center' style={{backgroundImage: 'url(./media/images/myimage.jpg)'}}></div>
              </div>
            </div>
            {/* About Me Text */}
            <div className='w-[90%] mx-auto text-desc-cont'>
              <div className='overflow-hidden px-7 relative'><div ref={titleLine} className='line-gradient-to-right absolute bottom-0 left-0'></div><span ref={title} className='title-glow font-black inline-block xl:text-[3vw] text-nowrap text-[10.5vw] font-sfpro skew-x-[-15deg] bg-clip-text text-transparent' style={ {backgroundImage: "var(--gradient-primarywhite)"} }>BEHIND THE CODE</span></div>
              <p className='desc-para font-sfpro text-white text-start mb-10 mt-10 '>Hi, I'm Franco, a passionate Front-End Developer dedicated to creating modern, fast, and engaging digital experiences. I specialize in turning ideas into functional interfaces with a strong focus on performance, accessibility, and intuitive design.</p>
              <p className='desc-para font-sfpro text-white text-start mb-10 '>I enjoy combining the logic of code with the creativity of design, paying attention to every detail—from semantic HTML and smooth CSS, to optimized interactivity with JavaScript and frameworks like React.</p>
              <p className='desc-para font-sfpro text-white text-start mb-10 '>I'm constantly learning and exploring new technologies, staying up-to-date with best practices to build scalable and maintainable web applications. My goal is for every project not only to look great but also to deliver a solid and memorable user experience.</p>
            </div>
          </div>
          
          {/* Main Stack List */}
          <div className='w-[90%] mx-auto'>
            <div className='overflow-hidden px-7 relative w-fit mx-auto'><div ref={titleLine} className='line-gradient-to-right absolute bottom-0 left-0'></div><span ref={title} className='title-glow font-black inline-block xl:text-[3vw] text-nowrap text-[10.5vw] font-sfpro skew-x-[-15deg] bg-clip-text text-transparent' style={ {backgroundImage: "var(--gradient-primarywhite)"} }>MAIN STACK</span></div>
            <div className='mx-auto grid grid-cols-2 gap-5 mt-10'>
              <TechBar color='#FF6200' techName='HTML5' techDesc='Structure & semantics' svgIcon={<Html5 />} />
              <TechBar color='#006FFF' techName='Tailwind' techDesc='Utility-first styling' svgIcon={<Tailwind />} />
              <TechBar color='#FFBB00' techName='Javascript' techDesc='Logic & interactivity' svgIcon={<Javascript />} />
              <TechBar color='#009DFF' techName='React' techDesc='UI & state management' svgIcon={<ReactIcon />} />
              <TechBar color='#DD2D2D' techName='Figma' techDesc='Design & prototyping' svgIcon={<Figma />} />
              <TechBar color='#EE513B' techName='Git' techDesc='Versioning & collaboration' svgIcon={<Git />} />
            </div>
          </div>

          {/* Explored */}
          <div className='w-[90%] mx-auto'>
            <div className='overflow-hidden px-7 relative w-fit mx-auto'><div ref={titleLine} className='line-gradient-to-right absolute bottom-0 left-0'></div><span ref={title} className='title-glow font-black inline-block xl:text-[3vw] text-nowrap text-[10.5vw] font-sfpro skew-x-[-15deg] bg-clip-text text-transparent' style={ {backgroundImage: "var(--gradient-primarywhite)"} }>EXPLORED</span></div>
            <div className='mx-auto grid grid-cols-2 gap-5 mt-10'>
              <TechBar color='#0066FF' techName='PYTHON - FASTAPI' techDesc='API & auth' svgIcon={<Python />} />
              <TechBar color='#126FE8' techName='Postgresql' techDesc='Data & reliability' svgIcon={<Postgresql />} />
              <TechBar color='#FF6200' techName='Java' techDesc='OOP & enterprise' svgIcon={<Java />} />
              <TechBar color='#3CDD2D' techName='Mongo DB' techDesc='Documents & scalability' svgIcon={<MongoDB />} />
              <TechBar color='#8359E4' techName='PHP' techDesc='Backend & web apps' svgIcon={<Php />} />
            </div>
          </div>
        </div>
    </>
  )
}

export default AboutMe