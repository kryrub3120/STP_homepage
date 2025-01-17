import React from 'react';
import { Target, LineChart, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AthleteDevelopment() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient with enhanced depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-card/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with improved typography */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Wsparcie na każdym etapie rozwoju sportowca
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Kompleksowe rozwiązania wspierające rozwój młodych talentów, oparte na 
            zaawansowanej analizie danych i sztucznej inteligencji
          </p>
        </div>

        {/* Enhanced Cards Grid with improved hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Predykcja potencjału */}
          <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl 
                        transition-all duration-500 transform hover:-translate-y-2 hover:bg-card/90
                        border border-white/5 hover:border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6
                          group-hover:bg-primary/20 transition-colors duration-500">
              <Target className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
              Predykcja potencjału
            </h3>
            <p className="text-muted leading-relaxed">
              Przewidujemy sukcesy sportowe na podstawie kompleksowej analizy danych biologicznych 
              i motorycznych, wykorzystując zaawansowane algorytmy AI.
            </p>
          </div>

          {/* Card 2: Identyfikacja obszarów do rozwoju */}
          <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl 
                        transition-all duration-500 transform hover:-translate-y-2 hover:bg-card/90
                        border border-white/5 hover:border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6
                          group-hover:bg-primary/20 transition-colors duration-500">
              <LineChart className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
              Identyfikacja obszarów do rozwoju
            </h3>
            <p className="text-muted leading-relaxed">
              Szczegółowa analiza umiejętności i parametrów fizycznych pozwala precyzyjnie 
              określić obszary wymagające doskonalenia i stworzyć plan rozwoju.
            </p>
          </div>

          {/* Card 3: Optymalna klasyfikacja pozycji */}
          <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl 
                        transition-all duration-500 transform hover:-translate-y-2 hover:bg-card/90
                        border border-white/5 hover:border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6
                          group-hover:bg-primary/20 transition-colors duration-500">
              <MapPin className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
              Optymalna klasyfikacja pozycji
            </h3>
            <p className="text-muted leading-relaxed">
              Dobieramy optymalne pozycje na boisku w oparciu o predyspozycje zawodnika, 
              parametry motoryczne i wymagania taktyczne.
            </p>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="text-center animate-fade-in">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg
                     hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 
                     shadow-lg hover:shadow-primary/20 group"
          >
            <span className="font-semibold">Dowiedz się więcej</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}