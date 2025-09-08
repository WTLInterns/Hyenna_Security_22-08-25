'use client'

import { useState } from 'react'

export default function FAQs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

     const faqs = [
     {
       question: "What services does HYENNA SECURITY SERVICES provide?",
       answer: "We provide comprehensive security solutions including security guards, lady guards, event bouncers, housekeeping services, and manpower staffing. Our services are available for IT companies, hospitals, educational institutions, industrial facilities, and corporate offices."
     },
     {
       question: "How quickly can you deploy security personnel?",
       answer: "We can deploy trained security personnel within 24-48 hours of agreement signing. For emergency requirements, we can arrange immediate deployment with our backup team of qualified guards."
     },
     {
       question: "Are your security guards licensed and trained?",
       answer: "Yes, all our security personnel are PSARA licensed and undergo rigorous training programs. We provide continuous training and skill development to ensure they maintain the highest standards of professionalism and security protocols."
     },
     {
       question: "What is your pricing structure?",
       answer: "Our pricing is transparent and competitive, based on the type of service, location, duration, and specific requirements. We provide detailed quotes with no hidden costs and offer flexible payment terms."
     },
     {
       question: "Do you provide 24/7 support?",
       answer: "Absolutely! We provide round-the-clock support with emergency response teams, continuous monitoring, and immediate backup personnel availability. Our management team is always accessible for any urgent requirements."
     },
     {
       question: "Do you provide residential security services?",
       answer: "Yes, we provide residential security services for housing communities, apartments, and private homes. Our guards ensure the safety of your family and property."
     },
     {
       question: "Do you provide event security services?",
       answer: "Yes, we provide event security services for weddings, corporate events, parties, and other special occasions. Our bouncers and security personnel ensure crowd control and security."
     },
     {
       question: "Do you provide female security guards?",
       answer: "Yes, we provide female security guards who are specially trained for security services for women. They are particularly useful in hospitals, educational institutions, and offices."
     },
     {
       question: "Do you provide monitoring and reporting?",
       answer: "Yes, we provide regular site visits, digital reporting, and 24/7 monitoring. Our guards prepare detailed reports after every shift."
     },
     {
       question: "Do you provide emergency response services?",
       answer: "Yes, we provide emergency response services. Our team is ready to respond immediately to any security-related emergency situation."
     }
   ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
                         <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               Frequently Asked Questions
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Common Questions</h1>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
               Get answers to the most frequently asked questions about HYENNA SECURITY SERVICES
             </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
                     <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Security Information</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
               Important information about HYENNA SECURITY SERVICES
             </p>
           </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
                             <h3 className="text-xl font-bold text-gray-900 mb-4">PSARA Licensed</h3>
               <p className="text-gray-600 leading-relaxed">
                 All our security personnel are licensed under PSARA (Private Security Agencies Regulation Act) and comply with government regulations.
               </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
                             <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
               <p className="text-gray-600 leading-relaxed">
                 We provide 24 hours, 7 days a week support. Our team is always ready for immediate response in emergency situations.
               </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
                             <h3 className="text-xl font-bold text-gray-900 mb-4">Trained Personnel</h3>
               <p className="text-gray-600 leading-relaxed">
                 All our security personnel undergo rigorous training and participate in continuous skill development programs.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-6">
                     <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
             <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
               Contact us for any questions or security services
             </p>
           </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
                             <h3 className="text-xl font-bold text-white mb-4">Phone Number</h3>
              <p className="text-blue-100 text-lg mb-4">+91 92844 90400</p>
              <p className="text-blue-100 text-lg">+91 8087876112</p>
                               <a href="tel:9284490400" className="inline-flex items-center justify-center rounded-lg bg-white text-blue-600 px-6 py-3 mt-4 font-semibold hover:bg-gray-100 transition-colors">
                   Call Now
                 </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp</h3>
                             <p className="text-blue-100 text-lg mb-4">Instant Contact</p>
               <a href="https://wa.me/9284490400?text=Hi%20HYENNA%20SECURITY%20SERVICES,%20I%20have%20a%20question%20about%20security%20services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-6 py-3 mt-4 font-semibold hover:bg-green-700 transition-colors">
                 Send WhatsApp Message
               </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
                             <h3 className="text-xl font-bold text-white mb-4">Office</h3>
               <p className="text-blue-100 text-lg mb-4">Ramashrya building 1st floor Amrita colony, Pimple Gurav, Pune 411061Maharashtra, Maharashtra</p>
               <a href="https://www.google.com/maps/place/Amruta+colony/@18.5894372,73.8245006,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b97a103abaa9:0xe1125b35da93ee0e!8m2!3d18.5894321!4d73.8270755!16s%2Fg%2F11qynp2_ns?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-6 py-3 mt-4 font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                 View Location
               </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
