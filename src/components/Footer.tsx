import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Activity, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Linkedin,
  Users,
  Target,
  Brain,
  FileText,
  MessageCircle,
  Shield
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white" itemScope itemType="http://schema.org/Organization">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold" itemProp="name">potencjaldosportu.pl</span>
            </div>
            <p className="text-gray-300 mb-6" itemProp="description">
              Innowacyjne rozwiązania wspierające rozwój młodych talentów sportowych
            </p>
            <div className="flex gap-4">
              <a 
                href="https://x.com/K_Rubajczyk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/krystian-rubajczyk-259650b2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Odkryj więcej</h3>
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/products" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Target className="w-4 h-4 text-primary" />
                  Produkty i usługi
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/team" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Users className="w-4 h-4 text-primary" />
                  Nasz zespół
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Brain className="w-4 h-4 text-primary" />
                  O nas
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/funding" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <FileText className="w-4 h-4 text-primary" />
                  Dofinansowania
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Wsparcie i media</h3>
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/media" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Dla mediów
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/demo" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Target className="w-4 h-4 text-primary" />
                  Zamów demo
                </NavLink>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Shield className="w-4 h-4 text-primary" />
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookies" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Shield className="w-4 h-4 text-primary" />
                  Polityka cookies
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <FileText className="w-4 h-4 text-primary" />
                  Regulamin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:biuro@potencjaldosportu.pl" 
                  className="hover:text-primary transition-colors"
                  itemProp="email"
                >
                  biuro@potencjaldosportu.pl
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:+48697319807" 
                  className="hover:text-primary transition-colors"
                  itemProp="telephone"
                >
                  +48 697 319 807
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <a 
                    href="https://maps.google.com/?q=ul.+Marii+Curie-Skłodowskiej+12,+50-381+Wrocław"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <span itemProp="streetAddress">ul. Marii Curie-Skłodowskiej 12</span><br />
                    <span itemProp="postalCode">50-381</span> <span itemProp="addressLocality">Wrocław</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} potencjaldosportu.pl. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
