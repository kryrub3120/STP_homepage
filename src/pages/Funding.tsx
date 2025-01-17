import React from 'react';
import { Mail, ChevronRight, Target, FileText, Users, Trophy } from 'lucide-react';

export function Funding() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Project Title Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8 leading-tight">
              Wdrożenie wyników prac B+R poprzez wsparcie inwestycji SPORTPREDICTOR Sp. z o.o. 
              w dedykowany system predykcji i analizy potencjału motorycznego zawodników w piłce 
              nożnej – Soccer Talent Predictor
            </h1>
            <div className="bg-primary/10 text-primary px-6 py-4 rounded-lg">
              <p className="text-lg font-medium">
                Projekt współfinansowany przez Unię Europejską ze środków Europejskiego Funduszu 
                Rozwoju Regionalnego
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Sections */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Tasks Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-text">Zadania i działania</h2>
              </div>
              <div className="bg-card rounded-xl shadow-md p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5" />
                    <p className="text-muted">
                      Opracowanie i wdrożenie systemu analitycznego Soccer Talent Predictor
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5" />
                    <p className="text-muted">
                      Stworzenie narzędzia raportowego dostosowanego do potrzeb trenerów i klubów sportowych
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5" />
                    <p className="text-muted">
                      Zakup niezbędnej infrastruktury technicznej
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Project Value Section */}
            <section className="bg-card rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-text mb-4">Wartość projektu</h2>
                  <p className="text-3xl font-bold text-primary">734 520 PLN</p>
                  <p className="text-muted mt-2">Całkowity koszt projektu</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text mb-4">Dofinansowanie UE</h2>
                  <p className="text-3xl font-bold text-primary">514 164 PLN</p>
                  <p className="text-muted mt-2">Kwota dofinansowania z Funduszy Europejskich</p>
                </div>
              </div>
            </section>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button 
                onClick={() => window.location.href = '/products'} 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-text rounded-lg hover:bg-opacity-80 transition-all duration-300"
              >
                Dowiedz się więcej
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-card text-text rounded-lg hover:bg-opacity-80 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Skontaktuj się z nami
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}