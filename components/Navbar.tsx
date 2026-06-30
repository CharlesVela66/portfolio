"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Download CV", href: "/files/CV_CARLOSVELASCO.pdf", className: "underline", download: true },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-main/50 backdrop-blur-md flex items-center justify-between px-4 sm:px-10 md:px-20 py-3">
      <a className="font-light text-2xl" href="#">CV</a>
      <ul className="hidden md:flex items-center space-x-6">
        {NAV_LINKS.map(({ label, href, className, download }) => (
          <li key={label}>
            <a
              href={href}
              download={download}
              className={`hover:text-accent-main transition-colors duration-200 ${className ?? ""}`}
            >
              {label}
            </a>
          </li>
        ))}
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
        <ul className="absolute top-full left-0 right-0 flex flex-col gap-4 border-b border-border bg-bg-main px-4 py-6 md:hidden">
          {NAV_LINKS.map(({ label, href, className, download }) => (
            <li key={label} onClick={() => setIsOpen(false)}>
              <a
                href={href}
                download={download}
                className={`hover:text-accent-main transition-colors duration-200 ${className ?? ""}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
