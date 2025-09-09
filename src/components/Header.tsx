'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsAboutDropdownOpen(false)
  }

  const handleAboutMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setIsAboutDropdownOpen(true)
  }

  const handleAboutMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsAboutDropdownOpen(false)
    }, 500) // 500ms delay before closing
    setDropdownTimeout(timeout)
  }

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '9284490400'
    const message = 'Hello! I am interested in getting a quote for security services from HYENNA SECURITY SERVICES.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
         <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
           isScrolled 
             ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
             : 'bg-white/80 backdrop-blur-sm shadow-md'
         }`}>
       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
         <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
           <div className="h-12 w-12 rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-shadow bg-white relative">
             <img src="/logo.jpg" alt="HYENNA SECURITY SERVICES" className="absolute inset-0 h-full w-full object-cover object-center" style={{ transform: 'scale(1.1)', transformOrigin: 'center' }} />
           </div>
           <div className="hidden sm:block">
             <span className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
               HYENNA SECURITY
             </span>
             <p className="text-xs text-gray-600 font-medium">Professional Security Services</p>
           </div>
         </Link>

                 {/* Desktop Navigation */}
         <nav className="hidden md:flex items-center gap-6">
           <Link href="/" className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group">
             Home
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
           </Link>
           
           {/* About Dropdown */}
           <div className="relative" onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>
             <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group flex items-center gap-1">
               About
               <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
               </svg>
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
             </button>
             {isAboutDropdownOpen && (
               <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2" onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>
                 <Link href="/about/company-overview" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                   Company Overview
                 </Link>
                 <Link href="/about/how-we-work" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                   How We Work
                 </Link>
               </div>
             )}
           </div>

           <Link href="/services" className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group">
             Services
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
           </Link>
           
           <Link href="/why-us" className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group">
             Why Us
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
           </Link>
           
                       <Link href="/contact" className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/faqs" className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group">
              FAQs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

                                           <div className="hidden lg:flex items-center gap-4 text-sm text-gray-600 border-l border-gray-300 pl-6">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 92844 90400</span>
              </div>
           </div>
          
                     <button
             onClick={handleWhatsAppRedirect}
             className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
           >
             Get Quote
           </button>
        </nav>

                 {/* Mobile menu button */}
         <button 
           className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 active:scale-95"
           onClick={toggleMenu}
           aria-label="Toggle mobile menu"
         >
           <div className="relative w-6 h-6">
             <span className={`absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ${
               isMenuOpen ? 'rotate-45 top-3' : 'top-1'
             }`}></span>
             <span className={`absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ${
               isMenuOpen ? 'opacity-0' : 'top-3'
             }`}></span>
             <span className={`absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ${
               isMenuOpen ? '-rotate-45 top-3' : 'top-5'
             }`}></span>
           </div>
         </button>
      </div>

             {/* Mobile Navigation Menu */}
       <div className={`md:hidden overflow-hidden transition-all duration-300 ${
         isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
       }`}>
         <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
           <nav className="px-6 py-4 space-y-4">
             <Link 
               href="/" 
               className="block text-gray-700 hover:text-blue-600 transition-colors text-base py-2"
               onClick={closeMenu}
             >
               Home
             </Link>
             
             <div className="space-y-2">
               <div className="text-gray-700 text-base py-2 font-medium">About</div>
               <div className="pl-4 space-y-2">
                 <Link 
                   href="/about/company-overview" 
                   className="block text-gray-600 hover:text-blue-600 transition-colors text-sm py-1"
                   onClick={closeMenu}
                 >
                   Company Overview
                 </Link>
                 <Link 
                   href="/about/how-we-work" 
                   className="block text-gray-600 hover:text-blue-600 transition-colors text-sm py-1"
                   onClick={closeMenu}
                 >
                   How We Work
                 </Link>
               </div>
             </div>
             
             <Link 
               href="/services" 
               className="block text-gray-700 hover:text-blue-600 transition-colors text-base py-2"
               onClick={closeMenu}
             >
               Services
             </Link>
             
             <Link 
               href="/why-us" 
               className="block text-gray-700 hover:text-blue-600 transition-colors text-base py-2"
               onClick={closeMenu}
             >
               Why Us
             </Link>
             
                           <Link 
                href="/contact" 
                className="block text-gray-700 hover:text-blue-600 transition-colors text-base py-2"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
              
              <Link 
                href="/faqs" 
                className="block text-gray-700 hover:text-blue-600 transition-colors text-base py-2"
                onClick={closeMenu}
              >
                FAQs
              </Link>
             
                           <div className="flex items-center gap-2 text-sm text-gray-600 py-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 92844 90400</span>
              </div>
            
                         <button
               onClick={() => {
                 handleWhatsAppRedirect()
                 closeMenu()
               }}
               className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
             >
               Get Quote
             </button>
          </nav>
        </div>
      </div>
    </header>
  )
}