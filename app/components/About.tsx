import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary to-secondary text-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 relative">
            <div className="w-64 h-64 bg-accent rounded-full absolute -top-4 -left-4 animate-pulse"></div>
            <img
              src="/profile-picture.jpg"
              alt="Rahi Shah"
              className="rounded-full w-64 h-64 object-cover relative z-10 border-4 border-light"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-accent">About Me</h2>
            <p className="mb-4 text-lg">
              Hello! I'm Rahi Shah, a passionate digital marketer with a flair for creating impactful campaigns and driving engagement across various platforms. 🚀
            </p>
            <p className="text-lg">
              With a keen eye for trends and a data-driven approach, I specialize in developing strategies that resonate with target audiences and deliver measurable results. 📊💡
            </p>
            <div className="mt-8 flex space-x-4">
              <Link href="#work" className="bg-accent text-dark px-6 py-2 rounded-full font-bold hover:bg-opacity-80 transition duration-300">My Work</Link>
              <Link href="#connect" className="bg-light text-dark px-6 py-2 rounded-full font-bold hover:bg-opacity-80 transition duration-300">Connect</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}