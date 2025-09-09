'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "HYENNA SECURITY SERVICES has been providing excellent security for our corporate office for over 3 years. Their guards are professional, well-trained, and always punctual. Highly recommended!",
    avatar: "R"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    location: "Pune, Maharashtra",
    rating: 4,
    text: "हैना सिक्योरिटी ने हमारे हॉस्पिटल में बहुत अच्छी सुरक्षा सेवा दी है। उनके गार्ड बहुत सजग हैं और आपातकाल में तुरंत प्रतिक्रिया देते हैं।",
    avatar: "D"
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Nagpur, Maharashtra",
    rating: 5,
    text: "We've been working with HYENNA for our industrial facility security. Their guards are well-trained, reliable, and the management team is always responsive to our needs.",
    avatar: "A"
  },
  {
    id: 4,
    name: "Sunita Desai",
    location: "Nashik, Maharashtra",
    rating: 5,
    text: "Outstanding service! The security guards are professional and courteous. We feel completely safe with HYENNA's security services at our residential complex.",
    avatar: "S"
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const getAvatarColor = (avatar: string) => {
    const colors = {
      'R': 'bg-blue-100 text-blue-600',
      'D': 'bg-green-100 text-green-600',
      'A': 'bg-orange-100 text-orange-600',
      'S': 'bg-purple-100 text-purple-600'
    }
    return colors[avatar as keyof typeof colors] || 'bg-gray-100 text-gray-600'
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 min-h-[300px] flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-6">
            <div className="flex">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg italic">
            &quot;{testimonials[currentIndex].text}&quot;
          </p>
        </div>
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getAvatarColor(testimonials[currentIndex].avatar)}`}>
            <span className="font-bold text-lg">{testimonials[currentIndex].avatar}</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
            <p className="text-gray-600 text-sm">{testimonials[currentIndex].location}</p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        aria-label="Next testimonial"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}