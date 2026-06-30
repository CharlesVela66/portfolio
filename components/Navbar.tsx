"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const NAV_ITEMS = ["About", "Projects", "Contact", "Download CV"]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative flex items-center justify-between px-4 sm:px-10 md:px-20 py-6">
      <p className="font-light text-2xl">CV</p>
      <ul className="hidden md:flex space-x-3">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <Link href="/files/CV_CARLOSVELASCO.pdf" className="underline" download>Download CV</Link>
      </ul>
      <button
        type="button"
        aria-label="Toggle menu"
        className="md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 right-0 z-50 flex flex-col gap-4 border-b border-border bg-bg-main px-4 py-6 md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item} className={item === "Download CV" ? "underline" : ""} onClick={() => setIsOpen(false)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
