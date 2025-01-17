import React from 'react';
import { Target, User, Award } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Mission Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">Nasza Misja</h1>
            <p className="text-xl text-muted leading-relaxed">
              Misją SPORTPREDICTOR jest dostarczenie środowisku piłkarskiemu innowacyjnego,
              naukowo zwalidowanego narzędzia wspierającego ocenę i predykcję potencjału
              motorycznego młodych zawodników piłki nożnej. Wykorzystujemy zaawansowane algorytmy
              i dostosowujemy je do potrzeb dzisiejszego świata sportu.
            </p>
          </div>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-text text-center mb-6">Innowacyjne Podejście</h2>
            <ul className="list-disc text-muted pl-6 space-y-4">
              <li>Uwzględnianie prawidłowości rozwojowych zdolności motorycznych.</li>
              <li>Adjustacja względem statusu biologicznego zawodnika.</li>
              <li>Optymalizacja zaburzeń rozwojowych wynikających ze skoku pokwitaniowego.</li>
              <li>Odwołanie do skorygowanych norm po pandemii COVID-19.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <User className="w-8 h-8 text-primary flex-shrink-0" />
              <h2 className="text-2xl font-bold text-text">Założyciel</h2>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="src/assets/images/krystian.webp"
                    alt="dr Krystian Rubajczyk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text mb-2">dr Krystian Rubajczyk</h3>
                  <p className="text-muted leading-relaxed">
                    Doktor nauk o kulturze fizycznej, trener UEFA A, ekspert w identyfikacji talentów
                    sportowych. Współpracował z klubami w Polsce, m.in. Bytovią Bytów i Śląskiem Wrocław,
                    a także międzynarodowo w akademii Albacete Balompié. Od lat łączy praktykę trenerską 
                    z badaniami naukowymi, publikując w międzynarodowych czasopismach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-text mb-6">Zespół</h2>
            <p className="text-muted leading-relaxed">
              Nasz zespół składa się z ekspertów z zakresu przygotowania fizycznego, trenerów piłki
              nożnej oraz naukowców specjalizujących się w rozwoju zdolności motorycznych człowieka.
              Wspólnie tworzymy innowacyjne rozwiązania dla młodych talentów sportowych.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
