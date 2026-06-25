import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-padd-container py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Shoppz<span className="text-blue-600">o</span>
          </Link>

          {/* Search Input */}
          {/* <div className="flex-1 max-w-xl mx-8">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-sm"
            />
          </div> */}

          {/* Account Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}