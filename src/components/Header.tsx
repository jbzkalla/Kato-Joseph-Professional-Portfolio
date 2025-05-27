
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-portfolio-darker/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with KJB styling */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <span className="text-2xl font-bold">
                <span className="text-red-500">K</span>
                <span className="text-gray-800">JB</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'text-portfolio-accent' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`nav-link ${isActive('/services') ? 'text-portfolio-accent' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`nav-link ${isActive('/portfolio') ? 'text-portfolio-accent' : ''}`}
            >
              Portfolio
            </Link>
            <Link
              to="/resume"
              className={`nav-link ${isActive('/resume') ? 'text-portfolio-accent' : ''}`}
            >
              Resume
            </Link>
            <Link
              to="/gallery"
              className={`nav-link ${isActive('/gallery') ? 'text-portfolio-accent' : ''}`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'text-portfolio-accent' : ''}`}
            >
              Contact
            </Link>
            <Link
              to="/payment"
              className="btn-primary"
            >
              Hire Me
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-portfolio-accent transition-colors"
            >
              <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'text-portfolio-accent' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`nav-link ${isActive('/services') ? 'text-portfolio-accent' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className={`nav-link ${isActive('/portfolio') ? 'text-portfolio-accent' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/resume"
                className={`nav-link ${isActive('/resume') ? 'text-portfolio-accent' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
              <Link
                to="/gallery"
                className={`nav-link ${isActive('/gallery') ? 'text-portfolio-accent' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'text-portfolio-accent' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/payment"
                className="btn-primary inline-block text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
