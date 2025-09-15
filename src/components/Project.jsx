import React from 'react'

const Project = ({color = '#DB2E2E'}) => {
  return (
    <>
      <div className='w-[95vw] max-w-[95%] max-h-[750px] h-[750px] mx-auto relative'>
        <div className='absolute bg-red-600 right-8 top-[0] w-20 h-12 z-30'>
          
        </div>
        <div className='z-50 relative w-full h-full border border-[#484848] rounded-[1.6rem] p-3 bg-[#1C1C1C] overflow-hidden after:absolute after:h-[120%] after:w-[150px] after:bg-white after:opacity-10 after:top-[50%] after:translate-y-[-50%] after:left-[20%] after:rotate-12' style={{boxShadow: '0px 0px 40px 14px rgba(0,0,0,0.26)'}}>
          <div className={`w-full h-full border border-[#767676] rounded-[1rem] relative overflow-hidden after:absolute after:top-[0] after:left-0 after:w-full after:h-full after:bg-radial-[circle_at_50%_0,${color},#0000]`}>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Project