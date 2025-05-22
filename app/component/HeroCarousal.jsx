"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"


const slides = [
  {
    id: 1,
    image: "https://itewb.gov.in/wp-content/uploads/2017/12/Banner_ITDept.jpg",
    alt: "IT Building in West Bengal",
  },
  {
    id: 2,
    image: "https://itewb.gov.in/wp-content/uploads/2017/12/footer-1.gif",
    alt: "Bengal Silicon Valley Hub",
  },
  {
    id: 3,
    image: "https://itewb.gov.in/wp-content/themes/itewb/assets/images/hearware.png",
    alt: "Digital Infrastructure",
  },
]

const HeroCarousal=()=> {
  const [current, setCurrent] = useState(0)

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative h-[400px] w-full overflow-hidden md:h-[500px] lg:h-[600px] ">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="object-cover w-[100%] h-[90%]" />
        </div>
      ))}
      <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 transform gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-8 rounded-full transition-colors ${
              index === current ? "bg-primary" : "bg-secondary"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-primary text-white backdrop-blur-sm hover:bg-secondary"
        onClick={previousSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-primary text-white backdrop-blur-sm hover:bg-secondary"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}
export default HeroCarousal