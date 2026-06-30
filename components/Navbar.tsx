"use client"

import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "./ui/sheet"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Download CV", href: "/files/CV_CARLOSVELASCO.pdf", className: "underline", download: true },
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-main/50 backdrop-blur-md flex items-center justify-between px-4 sm:px-10 md:px-20 py-3" aria-label="Main navigation">
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

      <Sheet>
        <SheetTrigger asChild>
          <button type="button" aria-label="Open navigation menu" className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-bg-main border-0 shadow-none duration-300 data-open:slide-in-from-right-full data-closed:slide-out-to-right-full">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <ul className="flex flex-col gap-8 px-6 pt-10">
            {NAV_LINKS.map(({ label, href, className, download }, index) => (
              <li key={label}>
                <SheetClose asChild>
                  <a
                    href={href}
                    download={download}
                    className={`group flex items-baseline gap-3 hover:text-accent-main transition-colors duration-200 ${className ?? ""}`}
                  >
                    <span className="text-accent-main text-sm">0{index + 1}</span>
                    <span className="text-3xl font-medium">{label}</span>
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default Navbar
