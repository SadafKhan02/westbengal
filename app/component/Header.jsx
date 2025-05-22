import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ChevronRight, Menu, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
     <header className="
      border-b bg-background">
        
      <div className="container flex h-16 items-center justify-between py-4 md:h-20">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-sm">
                
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://itewb.gov.in/wp-content/uploads/2017/12/emblame-1.jpg"
                width={40}
                height={40}
                alt="West Bengal Government Logo"
                className="h-10 w-10"
              />
              <div className="hidden flex-col md:flex">
                <span className="text-sm font-medium leading-none">Government of West Bengal</span>
                <span className="text-xs text-muted-foreground">
                  Department of Information Technology & Electronics
                </span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-64 rounded-full bg-muted pl-8 md:w-80" />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              Login
            </Button>
          </div>
        </div>
        <nav className="hidden border-t md:block">
          <div className="container">
            <ul className="flex">
              <li>
                <Link
                  href="#"
                  className="flex h-12 items-center border-b-2 border-transparent px-4 font-medium hover:border-primary hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li className="group relative">
                <button className="flex h-12 items-center gap-1 border-b-2 border-transparent px-4 font-medium hover:border-primary hover:text-primary">
                  About Us <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-64 rounded-md border bg-background p-2 opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100">
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Vision & Mission
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Organizational Structure
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Leadership
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Achievements
                  </Link>
                </div>
              </li>
              <li className="group relative">
                <button className="flex h-12 items-center gap-1 border-b-2 border-transparent px-4 font-medium hover:border-primary hover:text-primary">
                  Key Initiatives{" "}
                  <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-64 rounded-md border bg-background p-2 opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100">
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Digital Infrastructure
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    e-Governance
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Skill Development
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Startup Ecosystem
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Hardware Meets
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Online Booking of Space at IT Parks
                  </Link>
                </div>
              </li>
              <li className="group relative">
                <button className="flex h-12 items-center gap-1 border-b-2 border-transparent px-4 font-medium hover:border-primary hover:text-primary">
                  Acts & Rules <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-64 rounded-md border bg-background p-2 opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100">
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    IT Acts
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Policies
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Guidelines
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Notifications
                  </Link>
                </div>
              </li>
              <li className="group relative">
                <button className="flex h-12 items-center gap-1 border-b-2 border-transparent px-4 font-medium hover:border-primary hover:text-primary">
                  e-Governance <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-64 rounded-md border bg-background p-2 opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100">
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    e-Services
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    e-District
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Online Applications
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Safe Scan Document Sharing
                  </Link>
                </div>
              </li>
              <li className="group relative">
                <button className="flex h-12 items-center gap-1 border-b-2 border-transparent px-4 font-medium hover:border-primary hover:text-primary">
                  RTI <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-64 rounded-md border bg-background p-2 opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100">
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    RTI Act
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Online RTI Application
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    RTI Officers
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    RTI Reports
                  </Link>
                </div>
              </li>
              <li className="group relative">
                <button className="flex h-12 items-center gap-1 border-b-2 border-transparent px-4 font-medium hover:border-primary hover:text-primary">
                  Information <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-64 rounded-md border bg-background p-2 opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100">
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Recognitions
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Achievements
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Cyber Adjudication
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Message of PR Secy
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Orders
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">
                    Enrol Yourself (IT Survey)
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex h-12 items-center border-b-2 border-transparent px-4 font-medium hover:border-primary hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Header