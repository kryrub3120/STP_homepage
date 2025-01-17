import React from 'react';
import { Mail, ChevronRight, Target, FileText, Users, Trophy, CheckCircle, Clock, Brain } from 'lucide-react';

export function Funding() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8">
              Projekty dofinansowane z funduszy UE
            </h1>
            <p className="text-xl text-muted">
              Innowacyjne rozwiązania wspierane przez Unię Europejską
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Project */}
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-primary">Projekt w trakcie realizacji</span>
                </div>
                
                <h2 className="text-xl font-bold text-text mb-6 leading-tight">
                  Wdrożenie wyników prac B+R poprzez wsparcie inwestycji SPORTPREDICTOR Sp. z o.o. 
                  w dedykowany system predykcji i analizy potencjału motorycznego zawodników w piłce 
                  nożnej – Soccer Talent Predictor
                </h2>

                <div className="bg-background/50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted mb-2">Wartość projektu</p>
                      <p className="text-2xl font-bold text-primary">734 520 PLN</p>
                    </div>
                    <div>
                      <p className="text-muted mb-2">Dofinansowanie UE</p>
                      <p className="text-2xl font-bold text-primary">514 164 PLN</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted">Opracowanie i wdrożenie systemu analitycznego</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted">Stworzenie narzędzia raportowego</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted">Wsparcie dla trenerów i klubów sportowych</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Completed Project */}
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-sm font-medium text-green-500">Projekt zakończony</span>
                </div>
                
                <h2 className="text-xl font-bold text-text mb-6 leading-tight">
                  Przeprowadzenie prac badawczych umożliwiających opracowanie innowacyjnego modelu 
                  predykcji predyspozycji do gry w piłkę nożną opartego o innowacyjny algorytm 
                  porównawczy względem statusu biologicznego badanego - Soccer Talent Predictor
                </h2>

                <div className="bg-background/50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted mb-2">Wartość projektu</p>
                      <p className="text-2xl font-bold text-primary">1 100 000 PLN</p>
                    </div>
                    <div>
                      <p className="text-muted mb-2">Dofinansowanie UE</p>
                      <p className="text-2xl font-bold text-primary">780 000 PLN</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted">Opracowanie innowacyjnego modelu predykcji</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted">Rozwój algorytmów porównawczych</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted">Walidacja systemu w praktyce sportowej</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-80 transition-all duration-300"
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