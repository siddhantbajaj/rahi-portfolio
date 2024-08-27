'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Experience {
  company: string;
  jobTitle: string;
  dates: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "WIRELESS DNA INC",
    jobTitle: "DIGITAL MARKETING COORDINATOR",
    dates: "2023 - PRESENT",
    description: [
      "Assist Marketing Manager in planning and implementing effective marketing tactics and campaigns aligned with the company objectives contributing to successful brand promotion",
      "Create engaging digital content and manage influencer marketing for India, Philippines and Latin American countries (Mexico, Columbia and Peru)",
      "Work closely with in-house creative and marketing teams to coordinate the production of marketing materials, emails, and social media campaigns",
      "Utilize HubSpot to craft landing pages and forms for influencers, and develop email templates for blog promotion",
      "Manage financial aspects, including seeking pre-approvals, submitting approved activities for claims, and overseeing invoices and budgeting for marketing, airport, and logistics activities"
    ]
  },
  {
    company: "DENTSU, WAT CONSULT",
    jobTitle: "SENIOR DIGITAL MEDIA EXECUTIVE",
    dates: "2020-2021",
    description: [
      "Executed impactful social media strategies, driving a 20% engagement increase",
      "Conducted in-depth keyword research and optimized digital content for SEO",
      "Collaborated with cross-functional teams to create integrated digital marketing campaigns"
    ]
  },
  {
    company: "BIG TRUNK COMMUNICATIONS",
    jobTitle: "SOCIAL MEDIA EXECUTIVE",
    dates: "2019-2020",
    description: [
      "Managed multi-platform strategy, increasing 15% sales and 25% follower growth",
      "Data-driven insights and storytelling to prioritize opportunities and gain buy-in"
    ]
  },
  {
    company: "ATTHERATEMEDIA",
    jobTitle: "SOCIAL MEDIA: EXECUTIVE, CONTENT AND STRATEGIST",
    dates: "2019-2019",
    description: [
      "Built authentic influencer relationships for tailored campaigns and reach",
      "Created marketing materials for local events"
    ]
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-gradient-to-br from-primary to-secondary text-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-light">Work Experience</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, index }: { experience: Experience; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8 md:mb-10 bg-light p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative"
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-accent"></div>
      <div className="ml-2">
        <h3 className="text-xl md:text-2xl font-semibold text-secondary">{experience.company}</h3>
        <h4 className="text-lg md:text-xl text-primary mb-2">{experience.jobTitle}</h4>
        <p className="text-sm text-gray-500 mb-3 md:mb-4">{experience.dates}</p>
        <ul className="list-disc list-inside text-dark text-sm md:text-base">
          {experience.description.map((item, idx) => (
            <li key={idx} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}