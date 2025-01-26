import React from 'react';
import { Brain, Target, ChevronRight, Trophy, LineChart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Products() {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-card/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-6 animate-slide-up">
            Nasze produkty i usługi
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto animate-fade-in">
            Innowacyjne rozwiązania wspierające rozwój młodych talentów sportowych
          </p>
        </div>

        {/* Products Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Product - Soccer Talent Predictor */}
          <div className="lg:w-[70%] group">
            <div className="bg-card rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] relative">
                <img 
                  src="/images/photo-1431324155629-1a6deb1dec8d.webp"
                  alt="Soccer player analysis"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-20 right-8 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-text mb-4">Soccer Talent Predictor</h3>
                <p className="text-muted mb-6 leading-relaxed max-w-3xl">
                  Zaawansowany system analityczny wykorzystujący sztuczną inteligencję do identyfikacji 
                  i oceny potencjału młodych piłkarzy. Nasze rozwiązanie analizuje kompleksowe dane 
                  biologiczne i motoryczne, dostarczając precyzyjnych prognoz rozwoju sportowego.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">AI Analysis</h4>
                      <p className="text-sm text-muted">Zaawansowana analiza predyspozycji</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LineChart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Predykcja</h4>
                      <p className="text-sm text-muted">Precyzyjne prognozy rozwoju</p>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/produkty" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg
                           hover:bg-primary/90 transition-all duration-300 group"
                >
                  <span>Dowiedz się więcej</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Side Products */}
          <div className="lg:w-[30%] flex flex-col gap-8">
            {/* Athlete Talent Scout */}
            <div className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl 
                          transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Athlete Talent Scout</h3>
              <p className="text-muted text-sm mb-4">
                Innowacyjna platforma do dopasowywania młodych sportowców do dyscyplin 
                na podstawie ich predyspozycji.
              </p>
              <Link 
                to="/produkty" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span>Szczegóły</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Konsulting AI */}
            <div className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl 
                          transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Konsulting AI</h3>
              <p className="text-muted text-sm mb-4">
                Profesjonalne doradztwo w zakresie wdrażania rozwiązań opartych na 
                sztucznej inteligencji w sporcie.
              </p>
              <Link 
                to="/produkty" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span>Szczegóły</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* New Product: Optymalizacja procesu rekrutacji talentów */}
            <div className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl 
                          transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Optymalizacja procesu rekrutacji talentów</h3>
              <p className="text-muted text-sm mb-4">
                Doradztwo dla klubów w zakresie skuteczniejszego rekrutowania młodych zawodników 
                na podstawie danych i predykcji.
              </p>
              <Link 
                to="/produkty" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span>Szczegóły</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
