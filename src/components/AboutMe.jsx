import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TechBar from './TechBar'

gsap.registerPlugin(ScrollTrigger);

// Icons SVG
import * as Icons from '../assets/svg/Techs.jsx';

const AboutMe = () => {

  

  // Animation Text Glow
  useEffect(() =>{

    const tl = gsap.timeline()

    tl.fromTo('.titleLine',{scaleX:0},{ scaleX:1,duration: .6, ease:'power2', delay: 1, scrollTrigger: { trigger: '.titleLine', start: 'top 80%', toggleActions: 'play none none reverse'} })
    .fromTo('.titleGlow',{yPercent: 100}, { yPercent: 0, duration: 1, ease: "back.out", scrollTrigger: { trigger: '.titleGlow', start: 'top 80%', toggleActions: 'play none none reverse'} })
  },[])


  // Animation photo
  useEffect(() =>{

    gsap.fromTo('.showAnim',
      { opacity: 0, y: 150 },
      {  opacity: 1, y: 0, duration: 1.3, stagger: .2, ease: 'power2'}
    )
  },[])


  // Show tech animation
  useEffect(() => {
      

      gsap.utils.toArray('.techBarContainer').forEach((container, i) => {
        const tl = gsap.timeline({ delay: i * 0.1 , scrollTrigger: {
          trigger: '.techBarContainer', 
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        }} )

        tl
        .to('.containerListTech',
          {opacity: 1}
        )
        .fromTo(container,
          { width: '0', opacity: 0 },
          { width: '100%', opacity: 1, duration: 0.5, ease: 'power2'}
        )
        .fromTo(container.querySelector('.logoTech'),
          { scale: 0 },
          { scale: 1, duration: 1, ease: 'power2' , delay: -.2},
        )
        .fromTo(container.querySelector('.gradientTech'),
          { xPercent: -100 },
          { xPercent: 0, duration: 1, ease: 'power2' , delay: -.8},
        )
        .fromTo(container.querySelector('.textTech'),
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: -.6 })
      })
  }, [])


  return (
    <>
        <div className='flex flex-col items-center justify-center gap-28 my-20' >
          {/* About Me Text & Photo */}
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Photo Profile */}
            <div className='showAnim w-[90%] mx-auto'>
              <div className='w-full max-w-[500px] h-[650px] bg-primary border border-white-25 relative p-2 rounded-[1rem] mx-auto' style={{boxShadow: '0px 0px 141px 0px rgba(255,255,255,0.25)'}}>
                <div className='w-[200px] h-[4px] absolute top-[-4px] left-1/2 -translate-x-1/2 bg-white rounded-t-full ' style={{boxShadow: '0px 0px 30px 0px rgba(255,255,255,0.75)'}}></div>
                <div className='w-full h-full border border-white-25 rounded-[.5rem] bg-no-repeat bg-cover bg-center' style={{backgroundImage: 'url(./media/images/myimage.jpg)'}}></div>
              </div>
            </div>
            {/* About Me Text */}
            <div className='showAnim w-[85%] sm:w-[90%] mx-auto text-desc-cont'>
              <div className='overflow-hidden px-7 relative w-fit mx-auto'><div className='titleLine line-gradient-to-right absolute bottom-0 left-0'></div><span className='title-glow font-black inline-block text-nowrap text-[8vw] mt-10 md:mt-0 md:text-[4.5vw] xl:text-[3vw] font-sfpro skew-x-[-15deg] bg-clip-text text-transparent' style={ {backgroundImage: "var(--gradient-primarywhite)"} }>BEHIND THE CODE</span></div>
              <p className='desc-para font-sfpro text-white text-start mb-10 mt-10 '>Hi, I'm Franco, a passionate Front-End Developer dedicated to creating modern, fast, and engaging digital experiences. I specialize in turning ideas into functional interfaces with a strong focus on performance, accessibility, and intuitive design.</p>
              <p className='desc-para font-sfpro text-white text-start mb-10 '>I enjoy combining the logic of code with the creativity of design, paying attention to every detail—from semantic HTML and smooth CSS, to optimized interactivity with JavaScript and frameworks like React.</p>
              <p className='desc-para font-sfpro text-white text-start mb-10 '>I'm constantly learning and exploring new technologies, staying up-to-date with best practices to build scalable and maintainable web applications. My goal is for every project not only to look great but also to deliver a solid and memorable user experience.</p>
            </div>
          </div>
          
          {/* Main Stack List */}
          <div className='w-[90%] mx-auto'>
            <div className='showAnim overflow-hidden px-7 relative w-fit mx-auto'><div className='titleLine line-gradient-to-right absolute bottom-0 left-0'></div><span className='title-glow font-black inline-block xl:text-[3vw] text-nowrap text-[10.5vw] font-sfpro skew-x-[-15deg] bg-clip-text text-transparent' style={ {backgroundImage: "var(--gradient-primarywhite)"} }>MAIN STACK</span></div>
            <div className='containerListTech opacity-0 mx-auto grid sm:grid-cols-2 gap-5 mt-10'>
              <TechBar color='#FF6200' techName='HTML5' techDesc='Structure & semantics' svgIcon={<Icons.Html5 />} />
              <TechBar color='#006FFF' techName='Tailwind' techDesc='Utility-first styling' svgIcon={<Icons.Tailwind />} />
              <TechBar color='#1697f5' techName='Css' techDesc='Styling & layouts' svgIcon={<Icons.Css />} />
              <TechBar color='#fca708' techName='Javascript' techDesc='Logic & interactivity' svgIcon={<Icons.Javascript />} />
              <TechBar color='#009DFF' techName='React' techDesc='UI & state management' svgIcon={<Icons.ReactIcon />} />
              <TechBar color='#DD2D2D' techName='Figma' techDesc='Design & prototyping' svgIcon={<Icons.Figma />} />
              <TechBar color='#ff3f24' techName='Git' techDesc='Versioning & collaboration' svgIcon={<Icons.Git />} />
            </div>
          </div>

          {/* Explored */}
          <div className='containerListTech opacity-0 w-[90%] mx-auto'>
            <div className='showAnim overflow-hidden px-7 relative w-fit mx-auto'><div className='titleLine line-gradient-to-right absolute bottom-0 left-0'></div><span className='title-glow font-black inline-block xl:text-[3vw] text-nowrap text-[10.5vw] font-sfpro skew-x-[-15deg] bg-clip-text text-transparent' style={ {backgroundImage: "var(--gradient-primarywhite)"} }>EXPLORED</span></div>
            <div className='mx-auto grid sm:grid-cols-2 gap-5 mt-10'>
              <TechBar color='#0066FF' techName='PYTHON - FASTAPI' techDesc='API & auth' svgIcon={<Icons.Python />} />
              <TechBar color='#126FE8' techName='Postgresql' techDesc='Data & reliability' svgIcon={<Icons.Postgresql />} />
              <TechBar color='#FF6200' techName='Java' techDesc='OOP & enterprise' svgIcon={<Icons.Java />} />
              <TechBar color='#3CDD2D' techName='Mongo DB' techDesc='Documents & scalability' svgIcon={<Icons.MongoDB />} />
              <TechBar color='#8359E4' techName='PHP' techDesc='Backend & web apps' svgIcon={<Icons.Php />} />
            </div>
          </div>
        </div>
    </>
  )
}

export default AboutMe