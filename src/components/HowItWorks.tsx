import React from 'react';
import { Database, Brain, FileText, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-text mb-6">
            Jak działa Sportpredictor?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Proces, który pomaga odkryć i rozwinąć sportowe talenty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-primary/20"></div>

          {/* Step 1 */}
          <div className="group flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              <Database className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text mb-4">Zbieramy dane</h3>
            <p className="text-muted">
              Gromadzimy kompleksowe dane biologiczne i motoryczne młodych sportowców
            </p>
            <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary/40 w-8 h-8" />
          </div>

          {/* Step 2 */}
          <div className="group flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text mb-4">Analizujemy je za pomocą AI</h3>
            <p className="text-muted">
              Wykorzystujemy zaawansowane algorytmy do analizy potencjału sportowego
            </p>
            <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary/40 w-8 h-8" />
          </div>

          {/* Step 3 */}
          <div className="group flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text mb-4">Generujemy raporty</h3>
            <p className="text-muted">
              Dostarczamy szczegółowe analizy i rekomendacje rozwojowe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}