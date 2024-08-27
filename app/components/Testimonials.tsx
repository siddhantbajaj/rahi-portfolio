'use client';  // Add this line at the top of the file

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Valencia Barretto",
    role: "Account Manager at Big Trunk Communications",
    content: "Rahi is a pleasure to work with. Her open personality, keen observation skills, and disciplined work ethic make her a valuable team member.",
  },
  {
    id: 2,
    name: "Nupur Rathore",
    role: "Social Media Strategist at Media Barn",
    content: "Working with Rahi has been a great experience. She's diligent and always brings great ideas to new projects.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary to-secondary text-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-light">Testimonials</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="px-16"> {/* Added padding here */}
                    <blockquote className="text-xl italic mb-4">"{testimonial.content}"</blockquote>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevTestimonial} 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-accent text-dark p-2 rounded-full"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-accent text-dark p-2 rounded-full"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}