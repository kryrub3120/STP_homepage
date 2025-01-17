import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  Settings, 
  ChevronRight, 
  Users, 
  LineChart,
  Lightbulb,
  Mail,
  ArrowRight,
  CheckCircle,
  Gauge,
  Code,
  Workflow
} from 'lucide-react';

export function ConsultingAI() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
            alt="AI Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-medium">Eksperci AI w sporcie</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 animate-fade-in">
              Konsulting AI
              <span className="block text-primary mt-2">
                Sztuczna inteligencja w sporcie
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl animate-slide-up delay-200">
              Profesjonalne doradztwo w zakresie wdrażania nowoczesnych rozwiązań opartych na 
              sztucznej inteligencji w sporcie.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up delay-300">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white 
                         rounded-lg hover:bg-opacity-90 transition-all duration-300 transform 
                         hover:scale-105 shadow-lg hover:shadow-primary/20 group"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Umów Konsultację</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/10 
                         text-white rounded-lg hover:bg-white/5 transition-all duration-300 
                         transform hover:scale-105 group"
              >
                <span className="font-semibold">Poznaj nasze usługi</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <section id="services" className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-6">
              Główne obszary doradztwa
            </h2>
            <p className="text-lg text-muted">
              Kompleksowe wsparcie w implementacji rozwiązań AI w sporcie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-background p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">
                Doradztwo strategiczne
              </h3>
              <p className="text-muted">
                Opracowanie strategii wdrożenia AI dostosowanej do potrzeb organizacji sportowej.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">
                Optymalizacja procesów
              </h3>
              <p className="text-muted">
                Usprawnienie procesów sportowych i organizacyjnych przy pomocy sztucznej inteligencji.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">
                Personalizacja rozwiązań
              </h3>
              <p className="text-muted">
                Dostosowanie narzędzi AI do specyficznych wymagań klubu lub organizacji.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-background p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">
                Szkolenia zespołów
              </h3>
              <p className="text-muted">
                Kompleksowe szkolenia z obsługi i wykorzystania narzędzi opartych na AI.
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
              Kompleksowe wsparcie w transformacji cyfrowej organizacji sportowych
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="bg-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Kompleksowe doradztwo
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Analiza potrzeb organizacji</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Strategia wdrożenia AI</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Plan rozwoju</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="bg-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Narzędzia analityczne
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Systemy predykcyjne</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Analiza wydajności</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Raportowanie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="bg-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Workflow className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Automatyzacja procesów
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Rekrutacja talentów</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Monitoring rozwoju</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Optymalizacja treningów</span>
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
              Skontaktuj się z nami, aby omówić możliwości współpracy i uzyskać więcej informacji.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg
                       hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-primary/20 group"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Umów konsultację</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}