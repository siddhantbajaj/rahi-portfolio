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
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-light opacity-50 transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} justify-between items-start md:items-center`}>
              <div className={`flex items-center mb-4 md:mb-0 md:w-5/12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className={`w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4 ${index % 2 === 0 ? 'md:order-last md:ml-4 md:mr-0' : 'md:order-first md:mr-4 md:ml-0'}`}>
                  <span className="text-dark font-bold">{index + 1}</span>
                </div>
                <div className="md:hidden">
                  <h3 className="font-bold text-xl text-accent">{exp.title}</h3>
                  <p className="text-sm font-medium">{exp.company}</p>
                  <p className="text-xs opacity-75">{exp.period}</p>
                </div>
              </div>
              <motion.div
                className="bg-light text-dark rounded-lg shadow-md p-6 md:w-5/12"
                layoutId={`card-${index}`}
              >
                <div className="hidden md:block">
                  <h3 className="font-bold text-xl text-primary mb-2">{exp.title}</h3>
                  <p className="text-sm font-medium text-secondary mb-1">{exp.company}</p>
                  <p className="text-xs text-gray-600 mb-2">{exp.period}</p>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}