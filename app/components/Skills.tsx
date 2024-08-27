'use client';

import React from 'react';
import { FaUserTie, FaChartBar, FaSearch, FaHashtag, FaUserFriends } from 'react-icons/fa';
import { MdCampaign } from 'react-icons/md';

const skills = [
  { name: 'Account Management', icon: FaUserTie, color: '#1877F2' },
  { name: 'Data Analysis & Analytics', icon: FaChartBar, color: '#E4405F' },
  { name: 'Campaign Management', icon: MdCampaign, color: '#1DA1F2' },
  { name: 'Search Engine Optimization (SEO)', icon: FaSearch, color: '#0A66C2' },
  { name: 'Social Media & Content Marketing', icon: FaHashtag, color: '#4285F4' },
  { name: 'Influencer Management', icon: FaUserFriends, color: '#FF6B6B' }, // New skill added
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-light text-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-primary opacity-20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 -right-32 w-128 h-128 bg-secondary opacity-20 rounded-full animate-float-delay"></div>
        <div className="absolute -bottom-24 left-1/4 w-64 h-64 bg-accent opacity-20 rotate-45 animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div 
                className="w-32 h-32 rounded-lg flex items-center justify-center text-5xl mb-4 transition-all duration-300 group-hover:scale-110 bg-white shadow-xl overflow-hidden relative transform hover:rotate-3"
                style={{ boxShadow: `0 10px 25px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.15)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                {React.createElement(skill.icon, {
                  className: "relative z-10 text-dark group-hover:text-light transition-colors duration-300"
                })}
              </div>
              <p className="text-xl font-semibold text-dark group-hover:text-primary transition-colors duration-300 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}