import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  return (
    <header>
        <div>
            <div>
                {/* LOGO */}
                <div>
                    <Link href={'/'}>
                    <span>
                        Shoppz<span>o</span>
                    </span>
                    </Link>
                </div>
                {/* SEARCH */}
                <div>
                    <div>
                        <input type="text" placeholder='Type here...' className='' />
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header