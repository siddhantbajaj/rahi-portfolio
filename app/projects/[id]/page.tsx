import React from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Digital Marketing Campaign",
    client: "Pizza Restaurant Chain",
    year: "2023",
    description: "This project involved creating a digital marketing and social media engagement strategy to boost brand awareness and establish the client as a preferred choice among pizza lovers.",
    objectives: [
      "Develop innovative digital marketing strategies",
      "Build relevant social media conversations",
      "Engage with target audience through interactive content",
      "Create awareness about offers and services",
      "Acquire new followers through promotional activities"
    ],
    campaignFlow: [
      "Developed a communication strategy focusing on weekly promotions",
      "Leveraged social media platforms for engagement",
      "Encouraged user-generated content through interactive campaigns",
      "Implemented a branded hashtag to track and collect user content"
    ],
    results: [
      "Significant increase in sales for promotional offers",
      "Featured in multiple digital marketing publications"
    ],
    technologies: ["Social Media Platforms", "Content Management Systems", "Analytics Tools"],
    challenges: "Crafting a unique voice in a crowded market and measuring ROI across multiple platforms.",
    outcomes: "Increased brand visibility and customer engagement, leading to measurable sales growth."
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 was a mobile app development project. It required creating a cross-platform solution that worked seamlessly on both iOS and Android.",
    technologies: ["React Native", "Firebase", "Redux"],
    challenges: "Ensuring consistent performance across different device types was a significant challenge.",
    outcomes: "The app has been downloaded over 100,000 times and maintains a 4.5-star rating.",
  },
  // Add more projects as needed
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/#work" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      {project.client && <p className="mb-4">Client: {project.client}</p>}
      {project.year && <p className="mb-4">Year: {project.year}</p>}
      <p className="mb-4">{project.description}</p>
      
      {project.objectives && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Objectives</h2>
          <ul className="list-disc list-inside mb-4">
            {project.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </>
      )}

      {project.campaignFlow && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Campaign Flow</h2>
          <ul className="list-disc list-inside mb-4">
            {project.campaignFlow.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </>
      )}

      {project.results && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Results</h2>
          <ul className="list-disc list-inside mb-4">
            {project.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </>
      )}

      {project.technologies && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside mb-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </>
      )}
      
      {project.challenges && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
          <p className="mb-4">{project.challenges}</p>
        </>
      )}
      
      {project.outcomes && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Outcomes</h2>
          <p>{project.outcomes}</p>
        </>
      )}
    </div>
  );
}