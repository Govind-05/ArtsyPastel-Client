import React from 'react'
import Wave from '@/components/wave'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='h-[60vh] md:h-screen lg:h-[110vh] relative'>
        <div className="h-full bg-[#F4E04D] relative flex justify-center items-end">
          
          {/* <img src="/images/artist.png" alt="" className='w-64 h-[70%] mb-4 lg:mb-20' /> */}
          <div className='absolute bottom-0 left-0 right-0'>
            <Wave waveFill={"#fcfcfc"} />
          </div>
        </div>
      </div>
    </>
  );
}
