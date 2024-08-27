import React from 'react';
import Link from 'next/link';

const projects = [
  { id: 1, title: "Sbarro", description: "Digital marketing campaign to boost brand awareness" },
  { id: 2, title: "Laxmii", description: "Inclusive marketing campaign for Bollywood movie promoting transgender rights" },
  { id: 3, title: "H&R Johnson", description: "Comprehensive digital marketing campaign for 'Live Free Germ Free'" },
  // Add more projects as needed
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-light text-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-0 -left-32 w-128 h-128 bg-secondary opacity-10 rounded-full animate-float-delay"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent opacity-10 rotate-45 animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-dark mb-4">{project.description}</p>
                <p className="text-accent font-bold hover:underline">Learn more →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}