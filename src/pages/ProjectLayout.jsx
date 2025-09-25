import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import gsap from 'gsap'
import TechBar from '../components/TechBar';

// Icons SVG
import * as Icons from '../assets/svg/Techs.jsx';
import LinkShineExternal from '../components/LinkShineExternal.jsx';

const ProjectLayout = () => {

  const ICONS_MAP = {
    Html5: Icons.Html5,
    Tailwind: Icons.Tailwind,
    Javascript: Icons.Javascript,
    ReactIcon: Icons.ReactIcon,
    Figma: Icons.Figma,
    Git: Icons.Git,
    Python: Icons.Python,
    Postgresql: Icons.Postgresql,
    Java: Icons.Java,
    MongoDB: Icons.MongoDB,
    Php: Icons.Php,
    Css: Icons.Css
  };

  const { id } = useParams();

  const [dataProject,setDataProject] = useState(null)

  useEffect(() => {
    fetch("/data/projects.json")
    .then((res) => res.json())
    .then((data) => {
      const projectFound = data.find((pro) => pro.id == Number(id))

      setDataProject(projectFound || null)
    })
  },[id])

  const [dataTechs,setDataTechs] = useState(null)

  useEffect(()=>{
    if (!dataProject) return;

    fetch("/data/techs.json")
    .then((res) => res.json())
    .then((data) => {
      const techs = dataProject.techs
      .map((techName) => data.find((tech) => techName.toLowerCase() === tech.techName.toLowerCase()))
      .filter(Boolean);

      setDataTechs(techs || null)
    })
  },[dataProject])

  const title = useRef(null)
  const titleLine = useRef(null)

  // Animation Text Glow
  useEffect(() =>{
    if (!title ) return

    const tl = gsap.timeline()

    tl.fromTo(titleLine.current,{scaleX:0},{scaleX:1,duration: .6, ease:'power2', delay: 1})
    .fromTo(title.current,{yPercent: 100}, {yPercent: 0, duration: 1, ease: "back.out"})
  },[dataTechs])


  // Shine effect tech
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

  const containerListTech = useRef(null)
  // Show tech animation
  useEffect(() => {
    if(!dataTechs) return

    gsap.utils.toArray('.techBarContainer').forEach((container, i) => {
      const tl = gsap.timeline({ delay: i * 0.1 })

      tl
      .to(containerListTech.current,
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
}, [dataTechs])

  

  if(dataProject && dataTechs) return (
    <>
      <main className='grid xl:grid-cols-[1fr_75%_1fr] bg-primary overflow-hidden border-b border-white-50 z-20 relative'>
          <div className='absolute w-[70vw] h-[100vh] max-w-[1000px] max-h-[1000px] pointer-events-none top-0 left-1/2 -translate-x-1/2 translate-y-[calc(-50%-200px)] z-50 [background:radial-gradient(circle,rgba(255,255,255,.2)_50%,rgba(255,255,255,0)_100%)] rounded-full blur-[200px]'></div>
          <div></div>
          <div className='relative min-h-screen '>
            {/* Side lines effect */}
            <div className='relative h-full pb-20'>
              {/* Shiniest bar */}
              <div className='xl:opacity-100 opacity-0 w-[1px] h-full absolute top-0 left-0' style={{backgroundImage: 'var(--gradient-opacitiy-to-top)'}}></div>
              <div className='xl:opacity-100 opacity-0 w-[1px] h-full absolute top-0 right-0' style={{backgroundImage: 'var(--gradient-opacitiy-to-top)'}}></div>
              {/* Porject Content */}
              <div className='w-[95%] h-full mx-auto pt-[70px] pb-[70px] md:pb-0'>
                {/* Porject Name */}
                <div className='overflow-hidden px-7 mt-7 relative w-fit mx-auto'><div ref={titleLine} className='line-gradient-to-right absolute bottom-0 left-0'></div><span ref={title} className='title-glow font-semibold inline-block text-nowrap text-[14vw] mt-10 md:mt-0 md:text-[14vw] xl:text-[5vw] font-sfpro skew-x-[-15deg] bg-clip-text text-transparent capitalize' style={ {backgroundImage: "var(--gradient-primarywhite)"} }>{dataProject.name}</span></div>
                <div className='w-full grid md:grid-cols-[30%_70%] mt-20 gap-10 md:gap-0'>
                  {/* Tech Section */}
                  <div className='md:pr-2.5'>
                    {/* Techs Title */}
                    <div className='relative'>
                      {/* Techs Title Light */}
                      <div className='absolute top-[-4px] z-30 left-[0] w-[30px] h-[4px] rounded-t-[7px] bg-white transition-all duration-[.6s] ease-in-out' style={{boxShadow: `0px -4px 32px 10px #ffffff35`, left: `calc(50% - 15px)`}}></div>
                      {/* Tech Title Card */}
                      <div onMouseEnter={shineAnimation} className='bg-[#191919] border border-[#929292] rounded-full p-1.5'>
                        <div className='bg-[#191919] border border-[#464646] rounded-full p-1.5 overflow-hidden relative'>
                          <div ref={shine} className='absolute h-[120%] w-[15px] bg-white opacity-10 top-[50%] translate-y-[-50%] -left-5 rotate-12'></div>
                          <span className='text-white font-sfpro font-semibold text-2xl'>TECHS</span>
                        </div>
                      </div>
                    </div>
                    {/* Tech List */}
                    <div className='w-full bg-[#191919] border border-[#929292] rounded-[30px] p-1.5 mt-5'>
                      <div ref={containerListTech} className='opacity-0 flex flex-col gap-1.5'>
                        {dataTechs.map((tech)=> {
                          const IconComponent = ICONS_MAP[tech.icon];
                          return <TechBar key={tech.id} color={tech.color} techName={tech.techName} techDesc={tech.techDesc} svgIcon={<IconComponent />} />
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Website Images */}
                  <div className='md:pl-2.5'>
                      <div className='bg-[#191919] border h-full border-[#929292] rounded-[15px] p-3 pb-10'>
                        <div className='flex pb-3 mx-auto w-fit'>
                          <LinkShineExternal link={dataProject.websiteUrl} label='Website' />
                          <LinkShineExternal link={dataProject.repositoryUrl} label='Respository' />
                        </div>
                        <img className='w-full rounded-b-[8px]' src={`/media/images/${dataProject.image}.png`} alt="" />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
      </main>
    </>
  )
}

export default ProjectLayout