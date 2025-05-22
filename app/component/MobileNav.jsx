import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"




const MobileNav=()=> {
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <p className="font-medium">Government of West Bengal</p>
          <p className="text-muted-foreground">Department of Information Technology & Electronics</p>
        </div>
      </div>
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-md border border-input bg-muted px-3 py-2 text-sm"
        />
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="home">
          <Link href="#" className="flex h-12 items-center font-medium">
            Home
          </Link>
        </AccordionItem>
        <AccordionItem value="about">
          <AccordionTrigger className="py-3">About Us</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Vision & Mission
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Organizational Structure
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Leadership
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Achievements
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="initiatives">
          <AccordionTrigger className="py-3">Key Initiatives</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Digital Infrastructure
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                e-Governance
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Skill Development
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Startup Ecosystem
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Hardware Meets
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Online Booking of Space at IT Parks
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="acts">
          <AccordionTrigger className="py-3">Acts & Rules</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                IT Acts
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Policies
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Guidelines
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Notifications
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="egovernance">
          <AccordionTrigger className="py-3">e-Governance</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                e-Services
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                e-District
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Online Applications
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Safe Scan Document Sharing
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="rti">
          <AccordionTrigger className="py-3">RTI</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                RTI Act
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Online RTI Application
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                RTI Officers
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                RTI Reports
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="information">
          <AccordionTrigger className="py-3">Information</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Recognitions
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Achievements
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Cyber Adjudication
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Message of PR Secy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Orders
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Enrol Yourself (IT Survey)
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="contact">
          <Link href="#" className="flex h-12 items-center font-medium">
            Contact
          </Link>
        </AccordionItem>
      </Accordion>
      <div className="mt-4 space-y-2">
        <Button className="w-full">Login</Button>
        <div className="flex justify-between">
          <Button variant="outline" size="sm">
            English <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            A- A A+
          </Button>
        </div>
      </div>
    </div>
  )
}
export default MobileNav