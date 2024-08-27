'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsAndTools = [
  { 
    category: "Skills", 
    items: [
      { name: "Digital Marketing", icon: "📊" },
      { name: "Social Media", icon: "📱" },
      { name: "Content Creation", icon: "✍️" },
      { name: "SEO", icon: "🔍" },
      { name: "Email Marketing", icon: "📧" },
      { name: "Analytics", icon: "📈" },
      { name: "Project Management", icon: "📅" },
      { name: "Brand Strategy", icon: "🎯" }
    ]
  },
  { 
    category: "Tools", 
    items: [
      { name: "HubSpot", icon: "🧲" },
      { name: "Google Analytics", icon: "📊" },
      { name: "Adobe Suite", icon: "🎨" },
      { name: "Hootsuite", icon: "🦉" },
      { name: "Mailchimp", icon: "✉️" },
      { name: "Canva", icon: "🖌️" },
      { name: "Ahrefs", icon: "🔗" },
      { name: "Trello", icon: "📋" }
    ]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-12 md:py-20 bg-light relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-0 -left-32 w-128 h-128 bg-secondary opacity-10 rounded-full animate-float-delay"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent opacity-10 rotate-45 animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">Skills & Tools</h2>
        <div ref={ref} className="space-y-12">
          {skillsAndTools.map((section, sectionIndex) => (
            <div key={section.category}>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">{section.category}</h3>
              <div className="flex flex-wrap -m-2">
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/8 p-2"
                  >
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center justify-center text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="text-sm font-medium text-gray-800">{item.name}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}