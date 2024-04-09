
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
      <div className='h-[80vh] md:h-screen lg:h-[110vh] relative intro-container'>
        <div className="h-full bg-[#F4E04D] relative flex justify-center items-end">
          <div className='absolute top-0 left-0 right-0' style={{ zIndex: 3 }}>
            
              <div>
                <div className='flex flex-col mt-2'>
                  <span className='font-mountainsOfChristmas text-6xl flex justify-between'>
                    <span className='m-5'>DIMPLE,</span>
                    <img className='spinner lg:hidden' src="/images/circle-image-4.png" alt="art images" style={{width:"4rem"}}/>
                  </span>
                  <span className='font-mountainsOfChristmas text-center text-6xl lg:text-left m-5'>ARTIST,</span>
                  <span className='font-mountainsOfChristmas text-right pr-3 text-6xl lg:text-left m-5'>CREATOR</span>
                  {/* <span className='font-rampart'>@artsypastel</span> */}
                </div>
              </div>
              <div className='flex justify-end relative bottom-16'>
                <div className='flex flex-col mt-2  -scale-x-100'>
                  <span className='font-mountainsOfChristmas text-6xl flex justify-between'>
                    <span className='m-5'>DIMPLE,</span>
                    <img className='spinner lg:hidden' src="/images/circle-image-4.png" alt="art images" style={{width:"4rem"}}/>
                  </span>
                  <span className='font-mountainsOfChristmas text-center text-6xl lg:text-left m-5'>ARTIST,</span>
                  <span className='font-mountainsOfChristmas text-right pr-3 text-6xl lg:text-left m-5'>CREATOR</span>
                  {/* <span className='font-rampart'>@artsypastel</span> */}
                </div>
              </div>
            
          
            <div className='individual-images-container '>
              <div className='pl-2'>
                <span><img className='spinner' src="/images/circle-image-1.png" alt="art images" style={{width:"4rem"}}/></span>
              </div>
              <div>
                <span className='flex justify-center'><img className='spinner' src="/images/circle-image-5.png" alt="art images" style={{width:"4rem"}}/></span>
              </div>
              <div className='pr-2'>
                <span className='flex justify-end'><img className='spinner' src="/images/circle-image-2.png" alt="art images" style={{width:"4rem"}}/></span>
              </div>
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
