import React from 'react'

function backgroundImageCard({classes,onMouseEnter,heading,subheading}) {
  return (
    <div className={`w-44 h-60 rounded-2xl ${classes} hover:cursor-pointer`} onMouseEnter={onMouseEnter} style={{transitionDuration:"2s"}}>
      <div className='flex flex-col justify-center w-full h-full backdrop-blur-[2px] hover:backdrop-blur-[4px] backdrop-brightness-50 rounded-2xl'>
            <div className='text-lg xl:text-3xl font-bold text-center mb-3' style={{textShadow: "1px 1px 2px white"}}>
              {heading}
            </div>
            <div className='text-sm xl:text-base text-center font-bold' style={{textShadow: "1px 1px 2px white"}}>
              {subheading}
            </div>

      </div>
          </div>
  )
}

export default backgroundImageCard