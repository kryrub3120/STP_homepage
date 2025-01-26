import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Activity, Menu, X } from 'lucide-react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function CustomNavLink({ to, children, onClick }: NavLinkProps) {
  return (
    <NavLink 
      to={to} 
      onClick={onClick}
      className={({ isActive }) => `
        text-white hover:text-primary transition-all duration-300
        flex items-center px-4 py-2
        ${isActive ? 'text-primary font-bold' : ''}
      `}
    >
      {children}
    </NavLink>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen 
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <Activity className="w-8 h-8 text-primary transition-transform hover:scale-110" />
            <span className="text-xl font-bold text-white hover:text-primary transition-colors">
              Sportpredictor
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <CustomNavLink to="/">Strona główna</CustomNavLink>
            <CustomNavLink to="/products">Produkty i usługi</CustomNavLink>
            <CustomNavLink to="/team">Zespół</CustomNavLink>
            <CustomNavLink to="/about">O nas</CustomNavLink>
            <CustomNavLink to="/funding">Dofinansowania</CustomNavLink>
            <CustomNavLink to="/media">Dla mediów</CustomNavLink>
            <Link 
              to="/demo"
              className="px-6 h-10 flex items-center justify-center bg-primary text-white rounded-lg
                       hover:bg-primary/90 transition-transform hover:scale-105
                       shadow-lg hover:shadow-primary/20 font-semibold"
            >
              Bezpłatne DEMO
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white hover:text-primary transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile/Tablet Navigation Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-background/90 backdrop-blur-md transition-all duration-300 z-40
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          onClick={closeMenu}
        >
          <div 
            className={`absolute top-20 left-0 right-0 bg-background border-t border-white/10 p-6
              transition-transform duration-300 transform
              ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="grid gap-4">
              <CustomNavLink to="/" onClick={closeMenu}>Strona główna</CustomNavLink>
              <CustomNavLink to="/products" onClick={closeMenu}>Produkty i usługi</CustomNavLink>
              <CustomNavLink to="/team" onClick={closeMenu}>Zespół</CustomNavLink>
              <CustomNavLink to="/about" onClick={closeMenu}>O nas</CustomNavLink>
              <CustomNavLink to="/funding" onClick={closeMenu}>Dofinansowania</CustomNavLink>
              <CustomNavLink to="/media" onClick={closeMenu}>Dla mediów</CustomNavLink>
              <Link 
                to="/demo"
                onClick={closeMenu}
                className="w-full h-12 flex items-center justify-center bg-primary text-white rounded-lg
                         hover:bg-primary/90 transition-transform hover:scale-105 font-semibold"
              >
                Bezpłatne DEMO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
