"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Strategic Consulting", path: "/services#consulting" },
  { name: "Custom Solutions", path: "/services#solutions" },
  { name: "Managed Services", path: "/services#managed" },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const activeLinkStyle = { color: "#DC2626" }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-red-600/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
       <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
        <img src="/images/company-logo-transparent.png" alt="TechNexra Logo" className="h-16 md:h-20 w-auto" />
      </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium text-sm"
            >
              Home
            </NavLink>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <NavLink
                to="/services"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="flex items-center gap-1 text-gray-300 hover:text-red-500 transition-colors font-medium text-sm"
              >
                Services <ChevronDown size={16} />
              </NavLink>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-card border border-red-600/20 rounded-lg shadow-2xl overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-red-600/10 hover:text-red-400 transition-colors border-b border-red-600/10 last:border-b-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-600/20 transition-colors bg-background/50"
                    >
                      View All Services →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium text-sm"
            >
              About
            </NavLink>
            <NavLink
              to="/case-studies"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium text-sm"
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/blog"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium text-sm"
            >
              Blog
            </NavLink>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              asChild
              className="hidden sm:flex bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs md:text-sm px-4 md:px-6 py-2 transition-all hover:shadow-lg hover:shadow-red-600/30"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <button
              className="md:hidden text-gray-300 hover:text-red-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-background p-6 z-40 md:hidden overflow-y-auto pt-24"
          >
            <div className="flex justify-between items-center mb-8 fixed top-0 left-0 right-0 p-4 bg-background border-b border-red-600/20 z-50">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <img src="/images/company-logo-transparent.png" alt="TechNexra Logo" className="h-8 w-auto" />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-red-500">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-lg font-medium mt-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-4 hover:bg-red-600/10 rounded hover:text-red-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-4 hover:bg-red-600/10 rounded hover:text-red-500 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-4 hover:bg-red-600/10 rounded hover:text-red-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-4 hover:bg-red-600/10 rounded hover:text-red-500 transition-colors"
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-4 hover:bg-red-600/10 rounded hover:text-red-500 transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-4 hover:bg-red-600/10 rounded hover:text-red-500 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
