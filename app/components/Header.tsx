'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-light text-dark py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">Rahi Shah</Link>
          <button 
            className="md:hidden z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          <nav className={`fixed inset-0 bg-light bg-opacity-95 ${isMenuOpen ? 'flex' : 'hidden'} md:relative md:bg-transparent md:flex items-center justify-center md:justify-end`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8">
              {['About', 'Skills', 'Experience', 'Work', 'Testimonials'].map((item) => (
                <li key={item} className="my-4 md:my-0">
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-2xl md:text-base block py-2 px-4 text-dark hover:text-primary transition-colors duration-300 font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li className="my-4 md:my-0">
                <Link 
                  href="#connect" 
                  className="text-2xl md:text-base block py-2 px-4 bg-primary text-light rounded-full hover:bg-secondary transition-colors duration-300 font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connect
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}