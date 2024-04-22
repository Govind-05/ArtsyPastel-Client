import React from 'react'

function backgroundImageCard({classes,onMouseEnter,heading,subheading}) {
  return (
    <div className={`w-44 h-60 rounded-2xl ${classes} hover:cursor-pointer`} onMouseEnter={onMouseEnter} style={{transitionDuration:"2s"}}>
      <div className='flex flex-col justify-center w-full h-full backdrop-blur-[2px] hover:backdrop-blur-[4px]'>
            <div className='text-3xl text-center mb-3'>
              {heading}
            </div>
            <div className='text-center'>
              {subheading}
            </div>

      </div>
          </div>
  )
}

export default backgroundImageCard