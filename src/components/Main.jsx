import React from 'react'
import Hero from './Hero'
import Project from './Project'

const Main = () => {
  return (
    <>
        <main className='grid-layout bg-primary overflow-hidden'>
            <div className='absolute w-[70vw] h-[100vh] pointer-events-none top-0 left-1/2 -translate-x-1/2 translate-y-[calc(-50%-200px)] z-50 [background:radial-gradient(circle,rgba(255,255,255,.2)_50%,rgba(255,255,255,0)_100%)] rounded-full blur-[200px]'></div>
            <div></div>
            <div className='relative bg-white-50'>
              <div className='absolute top-0 left-0 w-full h-screen' style={ {backgroundImage: "var(--gradient-opacitiy-to-top)"} }></div>
              <div className='relative top-0 left-[1px] w-[calc(100%-2px)]'>
                <Hero />
                <div></div>
              </div>
              <div className='py-14 relative top-0 left-[1px] w-[calc(100%-2px)] bg-primary'>
                <div className='navigation-box bg-primary'></div>
                <div className=''>
                  <div className='flex flex-col items-center justify-center gap-28'>
                    <Project color='red' name="lucciano's" image='luccianos'/>
                    <Project color='amber' name='Portfolio' image='portfolio'/>
                    <Project color='green' name='Positivus' image='positivus'/>
                    <Project color='gray' name='FendyanS.A.' image='fendyan'/>
                    <Project color='blue' name='Porto Novo' image='portonovo'/>
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