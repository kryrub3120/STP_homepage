import React from 'react';
import { ChevronRight, Brain, Mail, Activity, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/photo-1551958219-acbc608c6377.webp"
          alt="Sport analysis"
          className="absolute min-w-full min-h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Activity className="w-4 h-4" />
            <span className="text-sm font-medium">Innowacje w sporcie</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 animate-fade-in">
            <span className="block mb-2">Odkryj potencjał</span>
            <span className="text-primary">młodych talentów</span>
            <span className="block mt-2">z pomocą AI</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-300 mb-12 max-w-2xl">
            Wykorzystujemy sztuczną inteligencję i zaawansowaną analitykę do precyzyjnej 
            oceny potencjału sportowego młodych zawodników. Wspieramy trenerów i kluby 
            w podejmowaniu kluczowych decyzji rozwojowych.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up delay-300">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Analiza z AI</h3>
              <p className="text-gray-400 text-sm">
                Zaawansowana analiza predyspozycji sportowych
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Predykcja</h3>
              <p className="text-gray-400 text-sm">
                Precyzyjne prognozy rozwoju zawodnika
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Monitoring</h3>
              <p className="text-gray-400 text-sm">
                Ciągłe śledzenie postępów i rozwoju
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up delay-400">
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white 
                       rounded-lg hover:bg-opacity-90 transition-all duration-300 transform 
                       hover:scale-105 shadow-lg hover:shadow-primary/20 group"
            >
              <Brain className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">Zobacz nasze rozwiązania</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/demo"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/10 
                       text-white rounded-lg hover:bg-white/5 transition-all duration-300 
                       transform hover:scale-105 group backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
              <span className="font-semibold">Zamów DEMO</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
