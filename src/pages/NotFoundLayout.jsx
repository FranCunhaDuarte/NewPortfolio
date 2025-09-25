import React from 'react'
import {Link} from 'react-router-dom'
import Download from '../assets/svg/Download'
import LinkShineExternal from '../components/LinkShineExternal'

const NotFoundPage = () => {
  return (
    <>
        <main className='bg-primary w-screen h-screen flex items-center justify-center flex-col text-white relative overflow-hidden z-20 border-b border-white-50'>
            <div className='absolute w-[70vw] h-[100vh] max-w-[1000px] max-h-[1000px] pointer-events-none top-0 left-1/2 -translate-x-1/2 translate-y-[calc(-50%-500px)] z-50 [background:radial-gradient(circle,rgba(255,255,255,.2)_50%,rgba(255,255,255,0)_100%)] rounded-full blur-[200px]'></div>
            <div className='absolute w-[70vw] h-[100vh] max-w-[1000px] max-h-[1000px] pointer-events-none bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(50%+500px)] z-50 [background:radial-gradient(circle,rgba(255,255,255,.2)_50%,rgba(255,255,255,0)_100%)] rounded-full blur-[200px]'></div>
            <h1 className='text-8xl font-sfpro font-black'>HOW DO YOU <br /> EVEN GET IN HERE?</h1>
            <a className='flex relative h-min my-20'>
                <div className='h-10 w-full xl:w-min bg-[#2F2F2F] border border-white-50 items-center flex justify-center px-4 rounded-l-[10px]'>
                    <span className='cursor-pointer text-nowrap' >Download CV</span>
                </div>
                <div className='cursor-pointer flex justify-center items-center h-10 w-12 bg-[#212121] border border-l-0 border-white-50 rounded-r-[10px]'>
                    <Download className='w-6' />
                </div>
            </a>
            <Link to={'/'}>
                <LinkShineExternal label='Go Back Home' />
            </Link>
        </main>
    </>
  )
}

export default NotFoundPage