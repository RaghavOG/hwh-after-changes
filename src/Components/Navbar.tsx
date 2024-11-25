'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from "@/Components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger  } from "@/Components/ui/sheet"
import { Menu } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/prizes', label: 'Prizes' },
    { href: '/judges', label: 'Judges' },
    { href: '/timeline', label: 'Timeline' },
  ]

  return (
    <nav className=" backdrop-blur-md text-white py-4 z-50 fixed w-full top-0 shadow-lg border-b border-[#3FBFBD]/50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-[#DD7CB2]">Hack</span>
            <span className="text-[#3FBFBD]">With</span>
            <span className="text-[#DD7CB2]">Her</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-lg font-medium hover:text-[#3FBFBD] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
        <Button
    asChild
    variant="outline"
    className="w-full sm:w-auto border-[#DD7CB2] text-[#DD7CB2] hover:bg-[#DD7CB2] hover:text-white hover:border-[#DD7CB2] transition-colors duration-300 font-semibold"
  >
    <Link href="/register">Register</Link>
  </Button>
          {/* <UiVerseButton className="border-[#DD7CB2] text-[#DD7CB2] hover:bg-[#DD7CB2] hover:text-white transition-colors duration-300">
            <Link href="https://discord.gg/invite" className="text-lg font-semibold">
              Join Discord
            </Link>
          </UiVerseButton>

          <UiVerseButton className="bg-[#3FBFBD] text-[#001F3F] hover:bg-[#001F3F] hover:text-[#3FBFBD] transition-colors duration-300">
            <Link href="https://discord.gg/invite" className="text-lg font-semibold">
              Register
            </Link>
          </UiVerseButton> */}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-10 w-10" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent 
            side="right" 
            className="backdrop-blur-md w-[300px] sm:w-[400px] p-6"
            aria-describedby="menu-description"
          >
            <SheetTitle>
              Menu
            </SheetTitle>
            
            <nav className="flex flex-col gap-4 mt-8">
            <Link
                  key="4"
                  href={"/"}
                  className="text-lg text-white font-medium hover:text-[#3FBFBD] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg text-white font-medium hover:text-[#3FBFBD] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-4 mt-6">
              <Button
    asChild
    variant="outline"
    className="w-full sm:w-auto border-[#DD7CB2] text-[#DD7CB2] hover:bg-[#DD7CB2] hover:text-white hover:border-[#DD7CB2] transition-colors duration-300 font-semibold"
  >
    <Link href="#">Register</Link>
  </Button>
                {/* <UiVerseButton className="border-[#DD7CB2] text-[#DD7CB2] hover:bg-[#DD7CB2] hover:text-white transition-colors duration-300">
                  <Link href="https://discord.gg/invite" className="text-lg font-semibold">
                    Join Discord
                  </Link>
                </UiVerseButton>

                <UiVerseButton className="bg-[#3FBFBD] text-[#001F3F] hover:bg-[#001F3F] hover:text-[#3FBFBD] transition-colors duration-300">
                  <Link href="https://discord.gg/invite" className="text-lg font-semibold">
                    Register
                  </Link>
                </UiVerseButton> */}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar
