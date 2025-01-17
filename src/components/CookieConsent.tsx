import React, { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Initialize analytics
    initializeAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const initializeAnalytics = () => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
      window.GA_INITIALIZED = true;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-text text-sm">
              Nasza strona używa plików cookies w celu poprawy funkcjonalności i doświadczenia użytkownika.{' '}
              <Link to="/cookies" className="text-primary hover:text-primary/80 transition-colors">
                Dowiedz się więcej
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-text"
            >
              Odrzucam
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
            >
              Akceptuję
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}