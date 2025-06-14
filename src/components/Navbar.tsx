import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <NavLink to="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
            Alexander<span className="text-blue-500">Harry</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/projects" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Projects
              </NavLink>
              <NavLink to="/experience" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Experience
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com/AlexanderH00" target="_blank" rel="noopener noreferrer" 
                className="text-slate-300 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/alexanderharry" target="_blank" rel="noopener noreferrer" 
                className="text-slate-300 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:alexharry27@gmail.com" 
                className="text-slate-300 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg shadow-lg p-4 absolute left-4 right-4 top-16 animate-fade-in">
            <div className="flex flex-col space-y-4 mb-4">
              <NavLink 
                to="/" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/experience" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
            
            <div className="flex items-center space-x-6 pt-4 border-t border-slate-700">
              <a href="https://github.com/AlexanderH00" target="_blank" rel="noopener noreferrer" 
                className="text-slate-300 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/alexanderharry" target="_blank" rel="noopener noreferrer" 
                className="text-slate-300 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:alexharry27@gmail.com" 
                className="text-slate-300 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;