'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    title: "Digital Marketing Coordinator",
    company: "Rogers Communications, Wireless DNA Inc",
    period: "2023 - Present",
    description: "Assist Marketing Manager in planning and implementing effective marketing tactics and campaigns aligned with the company objectives contributing to successful brand promotion.",
    extraContent: [
      "Create engaging digital content and manage influencer marketing for India, Philippines and Latin American countries (Mexico, Columbia and Peru)",
      "Work closely with in-house creative and marketing teams to coordinate the production of marketing materials, emails, and social media campaigns",
      "Utilize HubSpot to craft landing pages and forms for influencers, and develop email templates for blog promotion",
      "Manage financial aspects, including seeking pre-approvals, submitting approved activities for claims, and overseeing invoices and budgeting for marketing, airport, and logistics activities"
    ]
  },
  {
    title: "Senior Digital Media Executive",
    company: "Dentsu, WAT Consult",
    period: "2020 - 2021",
    description: "Executed impactful social media strategies, driving a 20% engagement increase.",
    extraContent: [
      "Conducted in-depth keyword research and optimized digital content for SEO",
      "Collaborated with cross-functional teams to create integrated digital marketing campaigns"
    ]
  },
  {
    title: "Social Media Executive",
    company: "Big Trunk Communications",
    period: "2019 - 2020",
    description: "Managed multi-platform strategy, increasing 15% sales and 25% follower growth.",
    extraContent: [
      "Data-driven insights and storytelling to prioritize opportunities and gain buy-in"
    ]
  },
  {
    title: "Social Media: Executive, Content and Strategist",
    company: "Attheratemedia",
    period: "2019",
    description: "Built authentic influencer relationships for tailored campaigns and reach.",
    extraContent: [
      "Created marketing materials for local events"
    ]
  }
];

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-primary to-secondary text-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-accent">Work Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-light opacity-50 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-dark">{index + 1}</h1>
              </div>
              <motion.div
                className="order-1 bg-light rounded-lg shadow-md w-5/12 px-6 py-4"
                layoutId={`card-${index}`}
              >
                <h3 className="font-bold text-dark text-xl mb-2">{exp.title}</h3>
                <p className="text-sm text-primary font-medium mb-1">{exp.company}</p>
                <p className="text-gray-600 text-xs mb-2">{exp.period}</p>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="text-primary hover:text-primary-dark transition-colors duration-300 text-sm font-medium"
                >
                  {expandedIndex === index ? 'Show Less' : 'Show More'}
                </button>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, opacity: { duration: 0.2, delay: 0.1 } }}
                      className="mt-4 text-gray-600 text-sm overflow-hidden"
                    >
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.extraContent.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}