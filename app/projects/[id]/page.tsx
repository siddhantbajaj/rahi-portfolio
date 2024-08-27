import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const AnimatedProjectContent = dynamic(() => import('../../components/AnimatedProjectContent'), { ssr: false });

const projects = [
  {
    id: 1,
    title: "Sbarro",
    client: "Sbarro",
    year: "2023",
    description: "This project involved creating a digital marketing and social media engagement strategy to boost brand awareness and establish Sbarro as a preferred choice among pizza lovers.",
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
    title: "Laxmii",
    client: "FoxStar Studios",
    year: "2020",
    description: "A comprehensive marketing campaign for the Bollywood movie 'Laxmii' aimed at raising awareness about the importance of transgender individuals and their inclusion in society.",
    objectives: [
      "Generate positive impact and create buzz around the film",
      "Promote acceptance and equality for transgender individuals",
      "Raise awareness about transgender rights and representation",
      "Engage audience through innovative social media campaigns",
      "Encourage user participation and content creation"
    ],
    campaignFlow: [
      "Created an Instagram filter featuring a bindi for user engagement",
      "Collaborated with influencers and actors for campaign promotion",
      "Organized a special screening for transgender individuals",
      "Launched the #AbHumariBariHai hashtag campaign",
      "Implemented song-specific promotion strategies on social media"
    ],
    results: [
      "Achieved significant social media reach with thousands of Instagram filter uses",
      "#AbHumariBariHai trended on Twitter with millions of impressions",
      "High level of user engagement and participation in campaigns",
      "Successful special screening event for the transgender community",
      "Increased awareness and positive sentiment towards transgender inclusion"
    ],
    technologies: ["Social Media Platforms", "Instagram AR Filters", "Hashtag Campaigns", "Influencer Marketing"],
    challenges: "Addressing sensitive social issues while promoting a commercial film, and ensuring authentic representation of the transgender community.",
    outcomes: "Successfully raised awareness about transgender rights, generated positive buzz for the movie, and fostered a sense of inclusivity and acceptance in society."
  },
  {
    id: 3,
    title: "H&R Johnson",
    client: "H&R Johnson",
    year: "2019",
    description: "Developed and executed a comprehensive digital marketing campaign for H&R Johnson, a leading tiling company. The 'Live Free Germ Free' campaign aimed to raise awareness about hygienic tiling solutions and drive adoption of health-conscious lifestyle choices.",
    objectives: [
      "Raise awareness about health risks associated with germs on floors and in kitchens",
      "Promote H&R Johnson's germ-free tiling products",
      "Establish the brand as a trusted provider of hygienic solutions",
      "Inspire customers to prioritize health and hygiene in their daily lives",
      "Increase engagement and sales through targeted digital marketing strategies"
    ],
    campaignFlow: [
      "Introduced the concept of the 'new normal' emphasizing health and hygiene",
      "Created educational content about germ-free living",
      "Developed a communication strategy centered around the #LiveFreeGermFree hashtag",
      "Leveraged various digital and offline channels for widespread reach",
      "Implemented interactive campaigns to encourage user engagement"
    ],
    results: [
      "Reached over 5 million people through various channels",
      "Increased average post reach by 40.09% across all platforms",
      "Achieved a 30% increase in sales of germ-free tiling products",
      "Improved brand perception, with 80% of survey respondents associating the brand with trustworthiness"
    ],
    technologies: ["Social Media Platforms", "Content Management Systems", "Analytics Tools"],
    challenges: "Effectively communicating the importance of hygienic living while differentiating the brand in a competitive market.",
    outcomes: "Successfully positioned H&R Johnson as a leader in hygienic tiling solutions, significantly increased brand awareness and engagement, and drove measurable sales growth."
  },
  // Add more projects as needed
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen">
      <AnimatedProjectContent project={project} />
    </div>
  );
}