import React from 'react'

function backgroundImageCard({classes,onMouseEnter}) {
  return (
    <div className={`w-44 h-60 bg-orange-300 rounded-2xl flex flex-col justify-center ${classes} hover:cursor-pointer`} onMouseEnter={onMouseEnter} style={{transitionDuration:"2s"}}>
            <div className='text-3xl text-center mb-3'>
              Special Requests
            </div>
            <div className='text-center'>
              We would love to hear more about your ideas.
            </div>
          </div>
  )
}

export default backgroundImageCard