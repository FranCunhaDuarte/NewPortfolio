import React from 'react'

const Project = ({color = 'gray', name = "undefined", image}) => {

  const COLORS = {
    blue: {
      bgGradient1: "#006ab0",
      bgGradient2: "#7fcfff33",
      lightColor: "#58AEFF",
      lightShadow: "#2D81FF"
    },
    red: {
      bgGradient1: "#530303",
      bgGradient2: "#ff7f7f33",
      lightColor: "#FF5858",
      lightShadow: "#FF2D2D"
    },
    green: {
      bgGradient1: "#053",
      bgGradient2: "#7fff7f33",
      lightColor: "#58FF8C",
      lightShadow: "#2DFF5A"
    },
    purple: {
      bgGradient1: "#220535",
      bgGradient2: "#d07fff33",
      lightColor: "#B758FF",
      lightShadow: "#8A2DFF"
    },
    amber: {
      bgGradient1: "#533003",
      bgGradient2: "#ffc87f33",
      lightColor: "#FFB858",
      lightShadow: "#FF8F2D"
    },
    gray: {
      bgGradient1: "#858585",
      bgGradient2: "#c9c9c933",
      lightColor: "#AFAFAF",
      lightShadow: "#7D7D7D"
    }
  }


  const pallete = COLORS[color] || COLORS.gray

  return (
    <>
      <div className='w-[95%] max-w-[1200px] h-[750px] mx-auto relative'>
        <div className='absolute right-8 top-[-15px] z-30 w-16 h-3.5 before:inline-block before:bg-[#1C1C1C] before:w-16 before:top-0 before:left-0 before:h-3.5 before:rounded-t-2xl before:border before:border-[#484848] '>
          <div className='absolute top-[0px] -z-10 left-[50%] translate-x-[-50%] w-10 h-5 rounded-[7px]' style={{backgroundColor: pallete.lightColor,boxShadow: `0px -4px 75px 31px ${pallete.lightShadow}35,0px -4px 32px 10px ${pallete.lightShadow}35`}}></div>
        </div>
        <div className='absolute top-0 left-0 w-full h-full bg-radial from-[#ffffff20] to-[#ffffff00] scale-[1.3] blur-2xl'></div>
        <div tabIndex={0} role={`project-${name}`} className='z-50 cursor-pointer relative w-full h-full border border-[#484848] rounded-[1.6rem] p-2.5 bg-[#1C1C1C] overflow-hidden after:absolute after:h-[120%] after:w-[150px] after:bg-white after:opacity-10 after:top-[50%] after:translate-y-[-50%] after:left-[20%] after:rotate-12' style={{boxShadow: '0px 0px 40px 14px rgba(0,0,0,0.26)'}}>
          <div className='w-full h-full border border-[#767676] rounded-[1rem] relative overflow-hidden bg-linear-to-b from-[#252525] to-[#101010]'>
            <div className='w-full h-full absolute top-0 left-0 flex flex-col p-10' style={{backgroundImage: `radial-gradient(circle at 50% 0, ${pallete.bgGradient2}, #0000 100%), radial-gradient(circle at 50% 0, ${pallete.bgGradient1}, #0000 100%)`}}>
              <div className=''>
                <h2 className='font-sfpro font-bold bg-clip-text text-transparent bg-linear-to-b from-[#ffffff30] to-[#ffffff00] text-[13vw] tracking-tighter absolute top-[-30px] left-[50%] translate-x-[-50%] uppercase select-none text-nowrap'>{name}</h2>
                <img className='absolute bottom-0 left-[50%] max-w-[85%] object-contain translate-x-[-50%] max-h-[75%]' src={`src/assets/media/images/${image}.png`} alt={name} />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project