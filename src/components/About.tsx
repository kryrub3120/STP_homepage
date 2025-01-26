import React from 'react';
import { Target, Brain, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-12 h-12 text-primary" />
              <h2 className="text-3xl font-bold text-text">Nasza misja</h2>
            </div>
            
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Wspieramy rozwój młodych talentów sportowych dzięki połączeniu sportu i technologii. 
              Nasze innowacyjne podejście pozwala odkrywać przyszłych mistrzów sportu, wspierając 
              ich rozwój na każdym etapie kariery.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text mb-2">Innowacyjna technologia</h3>
                  <p className="text-muted">
                    Wykorzystujemy sztuczną inteligencję i zaawansowaną analitykę danych do 
                    precyzyjnej oceny potencjału sportowego.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text mb-2">Precyzyjna identyfikacja</h3>
                  <p className="text-muted">
                    Dostarczamy narzędzia do dokładnej analizy predyspozycji i umiejętności 
                    młodych sportowców.
                  </p>
                </div>
              </div>
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
            >
              <span>Poznaj nas lepiej</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up delay-100">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80"
                alt="Młodzi piłkarze podczas treningu"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}