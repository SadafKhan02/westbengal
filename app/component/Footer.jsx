import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">About Department</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Vision & Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Organizational Structure
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Achievements
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Key Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Acts & Rules
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Policies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Tenders
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    RTI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Public Grievances
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Site Map
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    width={24}
                    height={24}
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    width={24}
                    height={24}
                    alt="Twitter"
                    className="h-5 w-5"
                  />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    width={24}
                    height={24}
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    width={24}
                    height={24}
                    alt="YouTube"
                    className="h-5 w-5"
                  />
                </Button>
              </div>
              <div className="mt-6">
                <h4 className="mb-2 text-sm font-medium">Contact Information</h4>
                <address className="not-italic text-sm text-muted-foreground">
                  <p>IT Building, 5th Floor</p>
                  <p>Salt Lake, Sector-III</p>
                  <p>Kolkata - 700106</p>
                  <p className="mt-2">Email: info@itewb.gov.in</p>
                  <p>Phone: +91-33-23392100/23392277</p>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t bg-muted/50">
          <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                width={40}
                height={40}
                alt="West Bengal Government Logo"
                className="h-10 w-10"
              />
              <div className="text-sm">
                <p className="font-medium">Government of West Bengal</p>
                <p className="text-muted-foreground">Department of Information Technology & Electronics</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Terms of Use
              </Link>
              <div className="h-4 w-px bg-border"></div>
              <Link href="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <div className="h-4 w-px bg-border"></div>
              <Link href="#" className="hover:text-foreground">
                Disclaimer
              </Link>
              <div className="h-4 w-px bg-border"></div>
              <Link href="#" className="hover:text-foreground">
                Accessibility
              </Link>
            </div>
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Government of West Bengal. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer