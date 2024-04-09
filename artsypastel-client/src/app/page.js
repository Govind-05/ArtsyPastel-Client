
import React from 'react'
import Wave from '@/components/wave'
import CircularImagesContainer from '@/components/circularImagesContainer';
import Image from 'next/image'

export default function Home() {
  
  const images = [
    "/images/circle-image-1.png",
    "/images/circle-image-2.png",
    "/images/circle-image-3.png",
    "/images/circle-image-4.png",
    "/images/circle-image-5.png",
    "/images/circle-image-6.png",
    "/images/circle-image-1.png",
    "/images/circle-image-2.png",
    "/images/circle-image-3.png",
    "/images/circle-image-4.png",
    "/images/circle-image-5.png",
    "/images/circle-image-6.png",
    "/images/circle-image-1.png",
    "/images/circle-image-2.png",
  ]

  return (
    <>
      <div className='h-[60vh] md:h-screen lg:h-[110vh] relative'>
        <div className="h-full bg-[#F4E04D] relative flex justify-center items-end">
          <div className='absolute top-0 left-0 right-0' style={{ zIndex: 3 }}>
            <div>
              <span className='font-rampart'>DIMPLE</span>
              <span className='font-rampart'>ARTIST</span>
              <span className='font-rampart'>CREATOR</span>
              <span className='font-rampart'>CREATOR</span>
            </div>
          </div>
          <CircularImagesContainer images={images}/>
          <div className='w-full h-full flex justify-center items-end'>
            <img src='/images/artist-background.png' className='w-[30rem] md:w-[45rem] md:mb-8 absolute -scale-x-100'/>
            <img src='/images/artist.png' className='w-[22rem] md:w-[30rem] md:mb-8'style={{zIndex:2}}/>
          </div>
          <div className='absolute bottom-0 left-0 right-0' style={{zIndex:3}}>
            <Wave waveFill={"#fcfcfc"} />
          </div>
        </div>
      </div>
    </>
  );
}
