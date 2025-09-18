import React from 'react'
import Hero from './Hero'
import Project from './Project'

const Main = () => {
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
              <div className='py-14 relative bg-primary'>
                <div className='xl:opacity-100 opacity-0 w-[1px] h-full absolute top-0 left-0 bg-white-50'></div>
                <div className='xl:opacity-100 opacity-0 w-[1px] h-full absolute top-0 right-0 bg-white-50'></div>
                <div className='navigation-box bg-primary'></div>
                <div className=''>
                  <div className='flex flex-col items-center justify-center gap-28'>
                    <Project color='red' name="lucciano's" image='luccianos'/>
                    <Project color='amber' name='Portfolio' image='portfolio'/>
                    <Project color='green' name='Positivus' image='positivus'/>
                    <Project color='gray' name='FendyanS.A.' image='fendyansa'/>
                    <Project color='blue' name='Porto Novo' image='portonovobarano'/>
                  </div>
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div></div>
        </main>
    </>
  )
}

export default Main