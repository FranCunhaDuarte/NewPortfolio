import React, { useEffect, useRef, useState } from 'react'
import Copy from '../assets/svg/Copy';
import gsap from 'gsap'
import Check from '../assets/svg/Check';
import Arrow from '../assets/svg/Arrow';
import ArrowText from './ArrowText';

const Footer = () => {

    const [age, setAge] = useState(0)

    useEffect(()=>{
        const bornDate = new Date('2005-05-22');
        let actualDate = new Date();

        let years = actualDate.getFullYear() - bornDate.getFullYear();
        let month = actualDate.getMonth() - bornDate.getMonth();

        if (month <= 0){
            years--;
        }

        setAge(years)
    },[])

    const correo = 'francunhaduartejobs@gmail.com'

    const refClip = useRef(null)
    const refCheck = useRef(null)

    const handleCopy = () => {
        navigator.clipboard.writeText(correo)
        .then(() => {
            
            const tl = gsap.timeline()
            
            tl.fromTo(refClip.current,
                { rotate: 0 },
                { duration: .3, ease: 'power2', rotate: 360, opacity: 0 }
            )

            tl.fromTo(refCheck.current,
                {opacity: 0, rotate: -360},
                {opacity: 1, rotate: 0, duration:.3, delay: -.3, ease: 'power2'}
            )

            tl.fromTo(refCheck.current,
                {opacity:1, rotate: 0},
                {opacity: 0, rotate: 360, duration:.3, delay: 3, ease: 'power2'}
            )

            tl.fromTo(refClip.current,
                {rotate: 360, opacity: 0},
                {rotate: 0, opacity: 1, duration: .3, delay: -.3, ease: 'power2'}
            )
        })
        .catch(err => {
            console.error("Error al copiar: ", err);
        });
    };


    

  return (
    <>
        <footer className='w-full h-[650px] xl:h-[400px] sticky bottom-0 bg-primary z-[10] flex flex-col overflow-hidden'>
            <div className='grid xl:grid-cols-[1fr_75%_1fr] items-center h-full text-white font-sfpro'>
                <div className='absolute w-[70vw] h-[100vh] max-w-[1000px] max-h-[1000px] pointer-events-none bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(50%+500px)] z-50 [background:radial-gradient(circle,rgba(255,255,255,.2)_50%,rgba(255,255,255,0)_100%)] rounded-full blur-[200px]'></div>
                <div></div>
                <div className='flex flex-col xl:flex-row items-center justify-between w-[70%] xl:w-[95%] mx-auto h-full'>
                    <div className='flex flex-col items-start gap-3 xl:w-[300px]'>
                        <h3 className='text-2xl font-black'>ABOUT ME</h3>
                        <p className='text-start text-[.9rem] text-[#b8b8b8] text-pretty'>I’m a {age}-year-old junior frontend developer from Mar del Plata, Argentina. I studied at UNICEN, and my self-taught mindset drives my growth.</p>
                    </div>
                    <div className='flex flex-col items-start xl:items-start gap-10 w-full xl:w-min'>
                        <div className='order-2 xl:order-1 w-full xl:w-min'>
                            <div className='flex'>
                                <div className='h-10 w-full xl:w-min bg-[#2F2F2F] border border-white-50 items-center flex justify-center px-4 rounded-l-[10px]'>
                                    <a href={`mailto:${correo}`} className='cursor-pointer' >{correo}</a>
                                </div>
                                <div id='copy-email' onClick={handleCopy} className='cursor-pointer flex justify-center items-center h-10 w-12 bg-[#212121] border border-l-0 border-white-50 rounded-r-[10px]'>
                                    <Copy ref={refClip} />
                                    <Check ref={refCheck} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-3 order-1 xl:order-2'>
                            <h3 className='text-2xl font-black'>SOCIAL MEDIA</h3>
                            <ul className='flex flex-col items-start gap-1.5'>
                                <ArrowText href='https://www.linkedin.com/in/francocunhaduarte/' label='LinkedIn' />
                                <ArrowText href='https://github.com/FranCunhaDuarte/' label='GitHub' />
                            </ul>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='border-t border-t-white-50 py-3'><span className='text-[#bbbbbb] font-normal'>Developed by Franco Cunha Duarte</span></div>
        </footer>
    </>
  )
}

export default Footer