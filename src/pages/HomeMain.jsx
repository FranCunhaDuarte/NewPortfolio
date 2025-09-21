import React, { useEffect, useRef, useState } from 'react'
import Hero from '../components/Hero'
import { Link, Outlet, useLocation } from 'react-router-dom'
import LinkShine from '../components/LinkShine'

const HomeLayout = () => {

  const location = useLocation()
  const refPorjects = useRef(null)
  const refAboutMe = useRef(null)
  const refLight = useRef(null)

  const [locationX,setLocationX] = useState(0)
  
  let activeElement = refPorjects.current

  useEffect(() =>{

    if(location.pathname == '/projects'){
      activeElement = refPorjects.current
    }
    if(location.pathname == '/aboutme'){
      activeElement = refAboutMe.current
    }

    if(activeElement){

      const {offsetLeft, offsetWidth} = activeElement

      // For set the X location, we take the left X location of the element and half of the total width
      setLocationX(offsetLeft + (offsetWidth/2))
    }

  },[location])


  return (
    <>
        <main className='grid xl:grid-cols-[1fr_70%_1fr] bg-primary overflow-hidden border-b border-white-50 z-20 relative'>
            <div className='absolute w-[70vw] h-[100vh] max-w-[1000px] max-h-[1000px] pointer-events-none top-0 left-1/2 -translate-x-1/2 translate-y-[calc(-50%-200px)] z-50 [background:radial-gradient(circle,rgba(255,255,255,.2)_50%,rgba(255,255,255,0)_100%)] rounded-full blur-[200px]'></div>
            <div></div>
            <div className='relative'>
              <div className='relative'>
                <div className='xl:opacity-100 opacity-0 w-[1px] h-full absolute top-0 left-0' style={{backgroundImage: 'var(--gradient-opacitiy-to-top)'}}></div>
                <div className='xl:opacity-100 opacity-0 w-[1px] h-full absolute top-0 right-0' style={{backgroundImage: 'var(--gradient-opacitiy-to-top)'}}></div>
                <div className='xl:opacity-100 opacity-0 w-[1px] h-full absolute top-0 left-0 bg-white-50'></div>
                <div className='xl:opacity-100 opacity-0 w-[1px] h-full absolute top-0 right-0 bg-white-50'></div>
                <Hero />
              </div>
              <div className='pb-14 relative bg-primary'>
                <div className='xl:opacity-100 opacity-0 w-[1px] h-full absolute top-0 left-0 bg-white-50'></div>
                <div className='xl:opacity-100 opacity-0 w-[1px] h-full absolute top-0 right-0 bg-white-50'></div>
                <div className='navigation-box bg-primary py-10'>
                  <div className='flex mx-auto w-fit relative'>
                    <div ref={refLight} className='absolute top-[-4px] z-30 left-[0] w-[30px] h-[4px] rounded-t-[7px] bg-white transition-all duration-[.6s] ease-in-out' style={{boxShadow: `0px -4px 32px 10px #ffffff35`, left: `calc(${locationX}px - 15px)`}}></div>
                    <div className='flex gap-2 bg-[#191919] border border-white-50 p-1.5 rounded-full'>
                      <div ref={refPorjects}>
                        <LinkShine link='/projects' label='Projects'  />
                      </div>
                      <div ref={refAboutMe} >
                        <LinkShine link='/aboutme' label='About Me' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <Outlet />
                </div>
              </div>
            </div>
            <div></div>
        </main>
    </>
  )
}

export default HomeLayout