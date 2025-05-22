import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TopBar = () => {
  return (
    <div className="flex h-full flex-col">
      {/* Top Bar */}
      <div className="hidden border-b bg-muted/40 py-2 lg:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Skip to main content
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Screen Reader Access
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              A- A A+
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  English <ChevronRight className="h-4 w-4 rotate-90" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Bengali</DropdownMenuItem>
                <DropdownMenuItem>Hindi</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      </div>
  )
}

export default TopBar