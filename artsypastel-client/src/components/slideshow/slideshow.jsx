import * as React from "react"
import Image from 'next/image';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function slideshow() {
  return (
    <div className="flex justify-center">
    <Carousel
      opts={{
        align: "start",
      }}
        className="w-4/6 md:w-4/5"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
            <div className="p-5">
              <Card className="hover:border-black hover:cursor-pointer hover:-translate-y-4 transition-all">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  
                  <div className="mb-12">
                    <Image src="/images/artist.png" alt="art images" width={192} height={192} className="card-images" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-center text-[0.8rem] md:text-sm">THIS IS ART TITLE</span>
                    <div className="flex flex-wrap items-center">
                      <span className="text-[0.5rem] md:text-xs">From</span>
                      <span className="ml-2 text-[0.6rem] ">Rs. 1000</span>
                      <span className="ml-2 line-through text-gray-400 text-[0.6rem]">Rs. 1599</span>
                      <span className="ml-2 text-red-600 text-[0.6rem] md:text-sm">Sale</span>
                    </div>
                  </div>
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default slideshow

