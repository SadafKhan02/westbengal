import React from 'react'
import HeroCarousal from './component/HeroCarousal'
import { Button } from '@/components/ui/button'
// import TopBar from './component/TopBar'
// import Header from './component/Header'

const page = () => {
  return (
    <div>
     
   <section className="relative">
          <HeroCarousal/>
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20">
            <div className="container flex h-full flex-col items-start justify-center gap-4 py-12">
              <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Department of Information Technology & Electronics
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                Driving digital transformation and technological advancement in West Bengal
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Explore Services</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default page