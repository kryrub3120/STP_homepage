import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Activity, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Instagram, 
  Youtube, 
  BookOpen,
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
                href="https://twitter.com/potencjaldosportu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/potencjaldosportu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@potencjaldosportu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Odkryj więcej</h3>
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/produkty" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Target className="w-4 h-4 text-primary" />
                  Produkty i usługi
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <BookOpen className="w-4 h-4 text-primary" />
                  Blog i aktualności
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/zespol" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Users className="w-4 h-4 text-primary" />
                  Nasz zespół
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/o-nas" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Brain className="w-4 h-4 text-primary" />
                  O nas
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/finansowanie" 
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
                  to="/polityka-prywatnosci" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Shield className="w-4 h-4 text-primary" />
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link 
                  to="/ciasteczka" 
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Shield className="w-4 h-4 text-primary" />
                  Polityka cookies
                </Link>
              </li>
              <li>
                <Link 
                  to="/warunki" 
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
