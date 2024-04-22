'use client'
import React, { useState } from 'react';
import Wave from '@/components/wave';
import CircularImagesContainer from '@/components/circularImagesContainer';
import Slideshow from '@/components/slideshow/slideshow';
import BackgroundImageCard from '@/components/backgroundImageCard/backgroundImageCard';
import { IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';

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
  ];

  const [serviceCardsShow,setServiceCardsShow] = useState(false)
  
  const handleShowCards = ()=>{

  }

  return (
    <>
      {/* ARTIST WELCOME CODE */}
      <div className='h-[80vh] md:h-screen lg:h-[110vh] relative intro-container'>
        <div className="h-full bg-[#F4E04D] relative flex justify-center items-end">
          <div className='absolute top-0 left-0 right-0' style={{ zIndex: 3 }}>
            
              <div>
                <div className='flex flex-col mt-2'>
                  <span className='font-mountainsOfChristmas text-6xl flex justify-between'>
                    <span className='md:m-5'>DIMPLE,</span>
                    <Image src="/images/circle-image-4.png" alt="art images" width={64} height={64} className='spinner lg:hidden' />
                  </span>
                  <span className='font-mountainsOfChristmas text-center text-6xl lg:text-left md:m-5'>ARTIST,</span>
                  <span className='font-mountainsOfChristmas text-right pr-3 text-6xl lg:text-left md:m-5'>CREATOR</span>
                  {/* <span className='font-rampart'>@artsypastel</span> */}
                </div>
              </div>
              <div className='lg:flex justify-end relative bottom-16 hidden '>
                <div className='flex flex-col mt-2  -scale-x-100'>
                  <span className='font-mountainsOfChristmas text-6xl flex justify-between'>
                    <span className='m-5'>DIMPLE,</span>
                    <Image src="/images/circle-image-4.png" alt="art images" width={64} height={64} className='spinner lg:hidden' />
                  </span>
                  <span className='font-mountainsOfChristmas text-center text-6xl lg:text-left m-5'>ARTIST,</span>
                  <span className='font-mountainsOfChristmas text-right pr-3 text-6xl lg:text-left m-5'>CREATOR</span>
                  {/* <span className='font-rampart'>@artsypastel</span> */}
                </div>
              </div>
            
          
            <div className='individual-images-container '>
              <div className='pl-2'>
                <Image src="/images/circle-image-1.png" alt="art images" width={64} height={64} className='spinner' />
              </div>
              <div className='flex justify-center'>
                <Image src="/images/circle-image-5.png" alt="art images" width={64} height={64} className='spinner' />
              </div>
              <div className='pr-2 flex justify-end'>
                <Image src="/images/circle-image-2.png" alt="art images" width={64} height={64} className='spinner' />
              </div>
            </div>
          </div>
          <CircularImagesContainer images={images}/>
          <div className='w-full h-full flex justify-center items-end'>
            <Image src='/images/artist-background.png' alt="artist background" width={720} height={720} className='w-[30rem] md:w-[45rem] md:mb-8 absolute -scale-x-100' />
            <Image src='/images/artist.png' alt="artist" width={480} height={480} className='w-[22rem] md:w-[30rem] md:mb-8' style={{ zIndex: 2 }} />
          </div>
          <div className='absolute bottom-0 left-0 right-0' style={{ zIndex: 3 }}>
            <Wave waveFill={"#fcfcfc"} />
          </div>
        </div>
      </div>

      <div className='bg-white pb-5'>
        <div className='flex justify-center mb-8'>
          <span className='flex items-center text-2xl'><IoIosArrowBack className='w-8 h-8 mr-4'/>New Releases<IoIosArrowBack className="-scale-x-100 w-8 h-8 ml-4"/></span>
        </div>

        <Slideshow />
      </div>

      <div className={`flex flex-col xl:flex-row ${serviceCardsShow&&"bg-red-400 transition-all duration-1000"}`} onMouseLeave={()=>setServiceCardsShow(false)}>
        <div className='w-6/12 hidden items-center justify-center relative m-4 xl:flex'>
          <BackgroundImageCard heading={"Customize"} subheading={"We will customise your belongings"}  classes={
            !serviceCardsShow?`bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] absolute left-2/4 bg-[#b1fd74] top-2/4 -rotate-[24deg] -translate-x-16 -translate-y-[calc(50%+4rem)]`
            :
            `bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] hover:translate-y-[5px] absolute left-0 bg-[#b1fd74] top-0 transition-all duration-1000`
            } 
          />
          <BackgroundImageCard heading={"Portraits"} subheading={"We will deliver your portraits."} classes={!serviceCardsShow?`bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] absolute left-2/4 bg-[#74c1fd] top-2/4 -rotate-[18deg] -translate-x-12 -translate-y-[calc(50%+3rem)]`:`bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] hover:translate-y-[5px] absolute left-full -translate-x-[100%] bg-[#74c1fd] top-0 transition-all duration-1000`} />
          <BackgroundImageCard heading={"Special Requests"} subheading={"We would love to hear more about your ideas."} classes={!serviceCardsShow?'shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] bg-[url("/images/background.jpg")] bg-cover absolute left-2/4 z-[3] bg-orange-400':'bg-[url("/images/background.jpg")] bg-cover hover:-translate-y-[5px] shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] bg-orange-400 absolute left-2/4 z-[3] -translate-x-[50%] transition-all'} onMouseEnter={()=>setServiceCardsShow(true)} />
          <BackgroundImageCard heading={"Cards"} subheading={"Prettu much related to cards"} classes={!serviceCardsShow?'bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] absolute left-2/4 bg-[#fd74d6] top-2/4 -rotate-12 -translate-x-8 -translate-y-[calc(50%+2rem)]':`bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] hover:-translate-y-[calc(100%+5px)] absolute left-0 bg-[#fd74d6] top-full -translate-y-[100%] transition-all duration-1000`} />
          <BackgroundImageCard heading={"Coming soon..."} subheading={"More services in the future"} classes={!serviceCardsShow?'bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] absolute left-2/4 bg-[#fd7474] top-2/4 -rotate-6 -translate-x-4 -translate-y-[calc(50%+1rem)]':`bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] hover:-translate-y-[calc(100%+5px)] absolute left-full -translate-x-[100%] bg-[#fd7474] top-full -translate-y-[100%] transition-all duration-1000`} />
        </div>

        <div className='text-center pt-5 pb-3 text-2xl font-bold xl:hidden'>
          OUR SERVICES
        </div>    
        <div className='flex flex-wrap justify-around xl:hidden'>
          <BackgroundImageCard heading={"Customize"} subheading={"We will customise your belongings"} classes={'m-2 bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] bg-[#b1fd74] w-28 h-40'}/>
          <BackgroundImageCard heading={"Portraits"} subheading={"We will deliver your portraits."} classes={'m-2 bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] bg-[#b1fd74] w-28 h-40'}/>
          <BackgroundImageCard heading={"Special Requests"} subheading={"We would love to hear more about your ideas."} classes={'m-2 bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] bg-[#b1fd74] w-28 h-40'}/>
          <BackgroundImageCard heading={"Cards"} subheading={"Prettu much related to cards"} classes={'m-2 bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] bg-[#b1fd74] w-28 h-40'}/>
          <BackgroundImageCard heading={"Coming soon..."} subheading={"More services in the future"} classes={'m-2 bg-[url("/images/background.jpg")] bg-cover shadow-[-5px_5px_11px_0px_rgba(0,0,0,0.5)] bg-[#b1fd74] w-28 h-40'}/>
        </div>

        <div className='w-6/12 justify-center hidden xl:flex'>
        <Image src="/images/services-artist.png" alt="art images" width={512} height={512} />
        </div>
      </div>

    </>
  );
}
