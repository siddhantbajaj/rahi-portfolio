'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaLightbulb, FaCog, FaTrophy, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHashtag, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

interface Project {
  title: string;
  client?: string;
  year?: string;
  description: string;
  objectives?: string[];
  // Add other properties as needed
}

function ProjectSection({ title, children, icon }: { title: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-8 bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-700">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      {children}
    </motion.div>
  );
}

function FloatingSocialIcon({ icon: Icon, className }: { icon: React.ElementType; className: string }) {
  return (
    <motion.div
      className={`absolute text-3xl ${className}`}
      animate={{
        y: [0, -10, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon />
    </motion.div>
  );
}

export default function AnimatedProjectContent({ project }: { project: Project }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Social media icons background */}
      <FloatingSocialIcon icon={FaFacebookF} className="text-blue-500 left-[10%] top-[15%]" />
      <FloatingSocialIcon icon={FaTwitter} className="text-sky-400 right-[15%] top-[25%]" />
      <FloatingSocialIcon icon={FaInstagram} className="text-pink-500 left-[20%] bottom-[20%]" />
      <FloatingSocialIcon icon={FaLinkedinIn} className="text-blue-700 right-[10%] bottom-[30%]" />
      <FloatingSocialIcon icon={FaHashtag} className="text-gray-600 left-[30%] top-[40%]" />
      <FloatingSocialIcon icon={FaThumbsUp} className="text-blue-600 right-[25%] top-[10%]" />
      <FloatingSocialIcon icon={FaComment} className="text-green-500 left-[5%] bottom-[40%]" />
      <FloatingSocialIcon icon={FaShare} className="text-purple-500 right-[20%] bottom-[15%]" />
      
      {/* Decorative network lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        <line x1="0%" y1="0%" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="100%" y1="0%" x2="0%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1" />
      </svg>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <Link href="/#work" className="text-blue-600 hover:underline mb-4 inline-flex items-center bg-white px-4 py-2 rounded-full shadow-md transition-all hover:shadow-lg">
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-bold mb-6 text-center text-indigo-900"
            >
              {project.title}
            </motion.h1>
            {project.client && <p className="mb-4 text-center text-xl text-indigo-700">{project.client} - {project.year}</p>}
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <p className="text-lg text-gray-700">{project.description}</p>
            </motion.div>
            
            {project.objectives && (
              <ProjectSection title="Objectives" icon={<FaLightbulb className="text-yellow-500" />}>
                <ul className="list-none space-y-2">
                  {project.objectives.map((objective, index) => (
                    <motion.li 
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <FaCheckCircle className="text-green-500 mr-2" /> {objective}
                    </motion.li>
                  ))}
                </ul>
              </ProjectSection>
            )}

            {/* Add similar sections for campaignFlow, results, technologies, challenges, and outcomes */}
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}