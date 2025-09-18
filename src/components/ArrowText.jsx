import React from 'react'
import Arrow from '../assets/svg/Arrow'

const ArrowText = ({href,label}) => {
  return (
    <>
        <a className='relative group' href={href} target='blank' rel="noopener noreferrer"><Arrow className='absolute top-1/2 -translate-1/2 -left-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 ease-in-out' /><span className='group-hover:translate-x-3 text-[#b8b8b8] group-hover:text-white transition-all duration-300 ease-in-out inline-block'>{label}</span></a>
    </>
  )
}

export default ArrowText