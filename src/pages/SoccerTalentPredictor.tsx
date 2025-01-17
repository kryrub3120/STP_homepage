import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  FileText, 
  ChevronRight, 
  BarChart3, 
  LineChart, 
  Users,
  Mail,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function SoccerTalentPredictor() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80"
            alt="Young soccer player"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by AI</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 animate-fade-in">
              Soccer Talent Predictor
              <span className="block text-primary mt-2">
                Odkryj Talent, Zbuduj Przewagę
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl animate-slide-up delay-200">
              Innowacyjne narzędzie do analizy i predykcji potencjału piłkarskiego, 
              wykorzystujące sztuczną inteligencję do precyzyjnej oceny młodych talentów.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up delay-300">
              <Link
                to="/demo"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white 
                         rounded-lg hover:bg-opacity-90 transition-all duration-300 transform 
                         hover:scale-105 shadow-lg hover:shadow-primary/20 group"
              >
                <Target className="w-5 h-5" />
                <span className="font-semibold">Zamów Demo</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#features"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/10 
                         text-white rounded-lg hover:bg-white/5 transition-all duration-300 
                         transform hover:scale-105 group"
              >
                <span className="font-semibold">Dowiedz się więcej</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <section id="features" className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-6">
              Główne funkcje systemu
            </h2>
            <p className="text-lg text-muted">
              Kompleksowe rozwiązanie wspierające rozwój młodych talentów
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">
                Precyzyjna analiza potencjału
              </h3>
              <p className="text-muted">
                Kompleksowa analiza danych biologicznych i motorycznych, wykorzystująca 
                zaawansowane algorytmy AI do oceny predyspozycji zawodnika.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">
                Innowacyjny model predykcji
              </h3>
              <p className="text-muted">
                Zaawansowany system predykcyjny uwzględniający status biologiczny zawodnika 
                i jego potencjał rozwojowy.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">
                Wsparcie decyzji trenerskich
              </h3>
              <p className="text-muted">
                Szczegółowe raporty analityczne dostarczające kluczowych informacji 
                dla trenerów i sztabu szkoleniowego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-6">Co oferujemy?</h2>
            <p className="text-lg text-muted">
              Kompleksowe rozwiązanie dla klubów i akademii piłkarskich
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="bg-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Raporty analityczne
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Szczegółowa analiza parametrów</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Porównanie z normami wiekowymi</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Wizualizacja postępów</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="bg-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LineChart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Prognozy rozwoju
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Predykcja potencjału</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Rekomendacje rozwojowe</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Ścieżki kariery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="bg-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Intuicyjna obsługa
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Przyjazny interfejs</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Szkolenia i wsparcie</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Mobilny dostęp</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text mb-6">
              Chcesz dowiedzieć się więcej?
            </h2>
            <p className="text-lg text-muted mb-8">
              Skontaktuj się z nami, aby umówić prezentację systemu lub uzyskać więcej informacji.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg
                       hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-primary/20 group"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Skontaktuj się z nami</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}