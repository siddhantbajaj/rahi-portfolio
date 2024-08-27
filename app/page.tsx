import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Connect from './components/Connect';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills /> {/* Make sure this is included */}
      <WorkExperience />
      <Work />
      <Testimonials />
      <Connect />
      <Footer />
    </main>
  );
}