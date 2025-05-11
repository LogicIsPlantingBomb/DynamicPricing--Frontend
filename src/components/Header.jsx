import React, { useState, useEffect } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for active section highlighting and navbar styling
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background based on scroll position
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'features', 'about', 'pricing', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const buffer = window.innerHeight * 0.3;
        
        if (rect.top <= buffer && rect.bottom >= buffer) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#00487c]/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center font-bold text-2xl text-white">
          <div className="w-8 h-8 border-2 border-white rounded-full mr-3 flex items-center justify-center">
            <span className="text-sm">PO</span>
          </div>
          PROFIT OPTIC
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {[
              { id: 'features', label: 'Features' },
              { id: 'about', label: 'About' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 mx-1 rounded-full transition-all text-lg hover:bg-white/10 ${
                    activeSection === item.id 
                      ? 'bg-white/20 font-medium'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button className="bg-[#10b0e7] text-white px-5 py-2 rounded-full ml-4 hover:bg-[#0d9ad0] transition-colors">
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile navigation dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#00487c] shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {[
              { id: 'features', label: 'Features' },
              { id: 'about', label: 'About' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id 
                    ? 'bg-white/20 font-medium' 
                    : 'hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#10b0e7] text-white w-full px-4 py-3 rounded-lg hover:bg-[#0d9ad0] transition-colors font-medium mt-2">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
