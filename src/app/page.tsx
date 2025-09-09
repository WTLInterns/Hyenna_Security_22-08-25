'use client'

import { useEffect, useState } from 'react'
import AnimatedCounter from '../components/AnimatedCounter'
import LoadingSpinner from '../components/LoadingSpinner'
import TestimonialCarousel from '../components/TestimonialCarousel'

export default function Home() {
  const [slide, setSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  
  const images = [
    'gallery1.png',
    'gallery2.png',
    'gallery3.png',
    '/herosection.png',
    '/herosection2.jpeg',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setIsVisible(true), 100)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % images.length)
    }, 6000)
    return () => clearInterval(t)
  }, [images.length])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero - Full background slideshow with overlayed content */}
      <section className="relative overflow-hidden min-h-screen pt-20 md:pt-16">
        {/* Slides */}
        <div className="absolute inset-0">
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Background ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1200 ${
                idx === slide ? 'opacity-100' : 'opacity-0'
              } ${
                // Custom positioning for gallery4.jpg to ensure proper fit
                src === '/gallery4.jpg' ? 'object-center' : 'object-top'
              }`}
            />
          ))}
          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        </div>

        {/* Text content */}
        <div className="relative z-10 min-h-screen flex items-end">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
            <div className="max-w-4xl ml-0 text-left space-y-6 sm:space-y-8">
              <div className="animate-fade-in-up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-white mb-6">
                  <span className="block">HYENNA</span>
                  <span className="block text-blue-300">SECURITY SERVICES</span>
                </h1>
              </div>
              <div className="animate-fade-in-up animation-delay-200">
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                  End-to-end security guards, event bouncers, and manpower staffing with disciplined deployment, 24x7 supervision, and transparent pricing.
                </p>
              </div>
              <div className="animate-fade-in-up animation-delay-400">
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLMurn6R0SDdlUZajmlMhFfU_dm83qRWZLceQRe0bLX1sztA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-8 py-4 text-base font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span>Request Free Trial</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="https://wa.me/9284490400?text=Hi%20HYENNA%20SECURITY%20SERVICES,%20I%20would%20like%20to%20get%20a%20quote%20for%20security%20services." target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-base font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300">
                    <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                    </svg>
                    <span>Get a Quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Trusted Security in Maharashtra */}
       <section className="py-20 bg-gray-900/40 bg-blend-multiply" style={{ backgroundImage: "url('/maharashtra.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 text-white">
             <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
               </svg>
               Trusted by 100+ Companies Across Maharashtra
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted Security Services Provider in Maharashtra</h2>
             <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">
               HYENNA SECURITY SERVICES is a distinguished leader in the private security industry, providing professional,
               effective, and technologically advanced security solutions. Since our inception, we have built a strong
               reputation for excellence in security services and integrated facility management.
             </p>
             <p className="text-lg text-gray-100 max-w-4xl mx-auto leading-relaxed">
               We specialize in comprehensive security and housekeeping solutions tailored to the diverse needs of industries, corporations,
               banks, airports, businesses, residential communities, and government institutions. Our team comprises
               highly trained security professionals dedicated to upholding the highest standards of security, integrity,
               and professionalism.
             </p>
           </div>
           
           {/* Feature Cards */}
           <div className="grid md:grid-cols-3 gap-8 mt-16">
             <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
               <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed & Certified</h3>
               <p className="text-gray-600 leading-relaxed">
                 Fully licensed under PSARA Act with ISO 9001:2015 certification and MSME recognition for guaranteed quality and compliance.
               </p>
          </div>
              
             <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
               <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
               <p className="text-gray-600 leading-relaxed">
                 Round-the-clock monitoring and support with quick response times and emergency backup personnel available at all times.
               </p>
            </div>
              
             <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
               <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
               <p className="text-gray-600 leading-relaxed">
                 Highly trained security professionals with military background, extensive experience, and continuous skill development programs.
               </p>
             </div>
           </div>
         </div>
       </section>

             {/* Stats Section */}
       <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Success in Numbers</h2>
             <p className="text-xl text-blue-100 max-w-2xl mx-auto">
               Delivering exceptional security services across Maharashtra with proven track record
             </p>
            </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="text-center group">
               <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                 <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
               <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                 <AnimatedCounter end={2100} suffix="+" />
               </h3>
               <p className="text-blue-100 text-base sm:text-lg font-medium">Trained Personnel</p>
               <p className="text-blue-200 text-xs sm:text-sm mt-1">Active Employees</p>
            </div>
             <div className="text-center group">
               <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                 <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
               <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                 <AnimatedCounter end={100} suffix="+" />
               </h3>
               <p className="text-blue-100 text-base sm:text-lg font-medium">Satisfied Clients</p>
               <p className="text-blue-200 text-xs sm:text-sm mt-1">Across Industries</p>
             </div>
             <div className="text-center group">
               <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white">
                 <span className="text-white font-bold text-sm sm:text-lg">15 YEARS</span>
               </div>
               <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                 <AnimatedCounter end={15} suffix="+" />
               </h3>
               <p className="text-blue-100 text-base sm:text-lg font-medium">Years Experience</p>
               <p className="text-blue-200 text-xs sm:text-sm mt-1">Industry Leadership</p>
             </div>
             <div className="text-center group">
               <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white">
                 <span className="text-white font-bold text-sm sm:text-lg">24/7</span>
               </div>
               <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</h3>
               <p className="text-blue-100 text-base sm:text-lg font-medium">Service Available</p>
               <p className="text-blue-200 text-xs sm:text-sm mt-1">Always Ready</p>
            </div>
          </div>
        </div>
      </section>

                                                       {/* Services Overview */}
         <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
           <div className="absolute inset-0 bg-blue-200/30"></div>
           <div className="max-w-7xl mx-auto px-6 relative z-10">
             <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-200">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
                 Comprehensive Security Solutions
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services We Provide</h2>
               <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                 Trusted security services in Maharashtra including trained guards, lady guards, bouncers and housekeeping for IT Companies, industrial and corporate needs. 
                 We deliver comprehensive security solutions tailored to your specific requirements.
               </p>
                </div>
            
                         {/* Service Highlights */}
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-blue-100">
                 <img src="/swp1.png" alt="Security Guards" className="w-24 h-24 rounded-full object-cover mx-auto mb-6" />
                 <h3 className="text-lg font-bold text-gray-900 mb-2">Security Guards</h3>
                 <p className="text-gray-600 text-sm">Licensed & trained personnel</p>
                </div>
               
               <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-blue-100">
                 <img src="/swp2.png" alt="Event Bouncers" className="w-24 h-24 rounded-full object-cover mx-auto mb-6" />
                 <h3 className="text-lg font-bold text-gray-900 mb-2">Event Bouncers</h3>
                 <p className="text-gray-600 text-sm">Professional crowd control</p>
            </div>
               
               <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-blue-100">
                 <img src="/swp3.png" alt="Staffing Solutions" className="w-24 h-24 rounded-full object-cover mx-auto mb-6" />
                 <h3 className="text-lg font-bold text-gray-900 mb-2">Staffing Solutions</h3>
                 <p className="text-gray-600 text-sm">Flexible manpower supply</p>
              </div>
               
               <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-blue-100">
                 <img src="/swp4.png" alt="Private Security" className="w-24 h-24 rounded-full object-cover mx-auto mb-6" />
                 <h3 className="text-lg font-bold text-gray-900 mb-2">Private Security</h3>
                 <p className="text-gray-600 text-sm">Personal & VIP protection services</p>
            </div>
          </div>
        </div>
      </section>

             {/* Why Choose Us Section */}
       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
               </svg>
               Industry Leader Since 2021
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">No 1 Security Agency in Maharashtra</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
               Leading the security industry with unmatched expertise, reliability, and commitment to excellence. 
               Our proven track record and customer satisfaction make us the preferred choice for security services.
             </p>
           </div>
           
           {/* Why Choose Us Grid */}
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden mb-6">
                <img src="/ils1.png" alt="Trusted & Reliable" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted & Reliable</h3>
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of experience and 100+ satisfied clients, we&apos;ve built a reputation for trust,
                reliability, and exceptional service delivery.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden mb-6">
                <img src="/ils2.png" alt="Quick Response" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600 leading-relaxed">
                Rapid deployment capabilities with emergency backup personnel and 24/7 support ensure
                immediate response to any security situation.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden mb-6">
                <img src="/ils3.png" alt="24/7 Availability" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock security monitoring and support with continuous supervision and
                immediate backup personnel availability.
              </p>
            </div>
          </div>
           
           {/* CTA Buttons */}
           <div className="text-center">
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg">
                 Get Started Today
               </a>
               <a href="/services" className="inline-flex items-center justify-center rounded-lg border-2 border-red-600 text-red-600 px-8 py-4 text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
                 View Our Services
               </a>
            </div>
              </div>
            </div>
      </section>

              {/* Client Testimonials */}
       <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
               </svg>
               What Our Clients Say
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Trusted by Leading Companies</h2>
             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
               Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about our security services.
             </p>
           </div>
           
           <TestimonialCarousel />
         </div>
       </section>

       {/* Process Overview */}
       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
               </svg>
               Simple 4-Step Process
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How We Work</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
               Getting started with HYENNA SECURITY SERVICES is simple and straightforward. Here&apos;s our proven process.
             </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="text-center">
               <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                 <span className="text-3xl font-bold text-blue-600">1</span>
                 <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-blue-200 hidden lg:block"></div>
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">Initial Consultation</h3>
               <p className="text-gray-600 leading-relaxed">
                 We assess your security requirements and provide a customized solution tailored to your specific needs.
               </p>
             </div>
             
             <div className="text-center">
               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                 <span className="text-3xl font-bold text-green-600">2</span>
                 <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-green-200 hidden lg:block"></div>
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">Proposal & Agreement</h3>
               <p className="text-gray-600 leading-relaxed">
                 Receive a detailed proposal with transparent pricing and sign the service agreement.
               </p>
          </div>
             
             <div className="text-center">
               <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                 <span className="text-3xl font-bold text-orange-600">3</span>
                 <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-orange-200 hidden lg:block"></div>
              </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">Team Deployment</h3>
               <p className="text-gray-600 leading-relaxed">
                 Our trained security personnel are deployed within 24-48 hours of agreement signing.
               </p>
              </div>
             
             <div className="text-center">
               <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <span className="text-3xl font-bold text-purple-600">4</span>
            </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
               <p className="text-gray-600 leading-relaxed">
                 Continuous monitoring, regular site visits, and 24/7 support ensure optimal security service delivery.
               </p>
              </div>
              </div>
            </div>
       </section>





                 {/* Final CTA Section */}
         <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
           <div className="absolute inset-0 bg-black/40"></div>
           <div className="max-w-7xl mx-auto px-6 relative z-10">
             <div className="text-center">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
               <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                 Join 100+ satisfied clients who trust HYENNA SECURITY SERVICES for their security needs. 
                 Get a free consultation and customized security plan today.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLMurn6R0SDdlUZajmlMhFfU_dm83qRWZLceQRe0bLX1sztA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-8 py-4 text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                   Get Free Consultation
                 </a>
                 <a href="/about/company-overview" className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                   Learn More About Us
                 </a>
               </div>
               <div className="mt-8 flex justify-center items-center gap-8 text-gray-400">
                 <div className="flex items-center gap-2">
                   <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                   <span>PSARA Licensed</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                   <span>ISO 9001:2015 Certified</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                   <span>24/7 Support</span>
                 </div>
               </div>
          </div>
        </div>
      </section>
    </div>
  );
}
