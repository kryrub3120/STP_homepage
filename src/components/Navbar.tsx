import React, { useState } from 'react';
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
        safe-touch-target flex items-center px-4
        ${isActive ? 'text-primary' : ''}
      `}
    >
      {children}
    </NavLink>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 safe-touch-target">
            <Activity className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-white">Sportpredictor</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <CustomNavLink to="/">Strona główna</CustomNavLink>
            <CustomNavLink to="/products">Produkty i usługi</CustomNavLink>
            <CustomNavLink to="/team">Zespół</CustomNavLink>
            <CustomNavLink to="/about">O nas</CustomNavLink>
            <CustomNavLink to="/funding">Dofinansowania</CustomNavLink>
            <Link 
              to="/demo"
              className="ml-2 px-6 h-12 flex items-center justify-center bg-primary text-white rounded-lg
                       hover:bg-primary/90 transition-all duration-300 transform hover:scale-105
                       safe-touch-target"
            >
              Zamów DEMO
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-primary transition-colors safe-touch-target p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="py-4 space-y-1">
            <CustomNavLink to="/" onClick={closeMenu}>Strona główna</CustomNavLink>
            <CustomNavLink to="/products" onClick={closeMenu}>Produkty i usługi</CustomNavLink>
            <CustomNavLink to="/team" onClick={closeMenu}>Zespół</CustomNavLink>
            <CustomNavLink to="/about" onClick={closeMenu}>O nas</CustomNavLink>
            <CustomNavLink to="/funding" onClick={closeMenu}>Dofinansowania</CustomNavLink>
            <Link 
              to="/demo"
              onClick={closeMenu}
              className="mt-4 w-full h-12 flex items-center justify-center bg-primary text-white rounded-lg
                       hover:bg-primary/90 transition-all duration-300 safe-touch-target"
            >
              Zamów DEMO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}