'use client'

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to meet your specific needs
          </p>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Security Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional security solutions designed to protect your people, property, and assets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-64 w-full overflow-hidden">
                <img src="/s1.png" alt="Security Guards" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Guards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Licensed, uniformed guards for societies, offices, retail and industrial premises.
                  Vigilance, visitor management, access control, and daily reporting.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-64 w-full overflow-hidden">
                <img src="/s2.png" alt="Bouncers" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bouncers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trained event bouncers for nightclubs, concerts, corporate events, and VIP protection.
                  Crowd control, entry checks, and emergency response.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-64 w-full overflow-hidden">
                <img src="/s3.png" alt="Private Bouncers & Security" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Private Bouncers & Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional private bouncers and security personnel for VIP events, private parties,
                  and exclusive venues. Discreet protection with trained personnel matching your requirements.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-64 w-full overflow-hidden">
                <img src="/s4.png" alt="Manpower Supply" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Manpower Supply</h3>
                <p className="text-gray-600 leading-relaxed">
                  On-demand manpower for short and long-term engagements with reliable attendance
                  and backup coverage for various operational needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sectors We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized security solutions for diverse industries and institutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hospitals</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized security for healthcare facilities including patient safety, 
                visitor management, emergency response, and protection of medical equipment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Colleges & Universities</h3>
              <p className="text-gray-600 leading-relaxed">
                Campus security services including student safety, facility protection, 
                event security, and maintaining a secure learning environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Estate</h3>
              <p className="text-gray-600 leading-relaxed">
                Property security for residential complexes, commercial buildings, 
                construction sites, and property management with access control.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Offices</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional security for corporate environments including access control, 
                visitor management, asset protection, and emergency response.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industrial & Manufacturing</h3>
              <p className="text-gray-600 leading-relaxed">
                Industrial security including facility protection, equipment security, 
                worker safety, and compliance with industrial safety standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Banks & Financial</h3>
              <p className="text-gray-600 leading-relaxed">
                High-security solutions for financial institutions including cash handling, 
                ATM security, customer safety, and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Secure Your Premises?</h3>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Get professional security services with transparent pricing and 24x7 support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white text-red-600 px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Get a Quote
            </a>
            <a href="/about/how-we-work" className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Learn How We Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
