import React from 'react';
import { 
  LineChart, 
  Trophy, 
  Target, 
  Brain, 
  TrendingUp, 
  FileSpreadsheet,
  Users,
  Search,
  Dumbbell,
  Microscope,
  Gauge,
  Briefcase,
  BarChart3,
  ClipboardCheck,
  Mail
} from 'lucide-react';

export function Products() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <LineChart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              Nasze Produkty i Usługi
            </h1>
            <p className="text-xl text-muted">
              Innowacyjne rozwiązania wspierające rozwój młodych talentów sportowych
            </p>
          </div>
        </div>
      </div>

      {/* Soccer Talent Predictor Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold text-text">Soccer Talent Predictor</h2>
                  </div>
                  <p className="text-muted mb-6 leading-relaxed">
                    Zaawansowany system analityczny wykorzystujący sztuczną inteligencję do identyfikacji 
                    i oceny potencjału młodych piłkarzy. Nasze rozwiązanie analizuje kompleksowe dane 
                    biologiczne i motoryczne, dostarczając precyzyjnych prognoz rozwoju sportowego.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <FileSpreadsheet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Raporty Analityczne</h3>
                        <p className="text-sm text-muted">Szczegółowe raporty z analizą potencjału</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Prognozy Rozwoju</h3>
                        <p className="text-sm text-muted">Przewidywanie ścieżki rozwoju</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="md:w-1/2 h-[400px] bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80")'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Athlete Talent Scout Section */}
      <div className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-background rounded-2xl shadow-md overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold text-text">Athlete Talent Scout</h2>
                  </div>
                  <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Nowy Projekt
                  </div>
                  <p className="text-muted mb-6 leading-relaxed">
                    Innowacyjna platforma wykorzystująca zaawansowane algorytmy do dopasowywania 
                    młodych sportowców do dyscyplin sportowych na podstawie ich unikalnych predyspozycji.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Dumbbell className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Analiza Predyspozycji</h3>
                        <p className="text-sm text-muted">Kompleksowa ocena zdolności</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Microscope className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Badania Biometryczne</h3>
                        <p className="text-sm text-muted">Szczegółowa analiza parametrów</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="md:w-1/2 h-[400px] bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80")'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Optymalizacja procesu rekrutacji talentów */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Search className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold text-text">Optymalizacja procesu rekrutacji talentów</h2>
                  </div>
                  <p className="text-muted mb-6 leading-relaxed">
                    Doradztwo dla klubów w zakresie skuteczniejszego rekrutowania młodych zawodników 
                    na podstawie danych i predykcji. Wsparcie w procesach skautingowych z wykorzystaniem 
                    nowoczesnych technologii.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Automatyzacja Procesu</h3>
                        <p className="text-sm text-muted">Zautomatyzowane narzędzia do selekcji talentów</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ClipboardCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Standaryzacja Oceny</h3>
                        <p className="text-sm text-muted">Obiektywne kryteria oceny zawodników</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="md:w-1/2 h-[400px] bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80")'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-text mb-6">
              Zainteresowany naszymi rozwiązaniami?
            </h2>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-text rounded-lg hover:bg-opacity-80 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Skontaktuj się z nami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}