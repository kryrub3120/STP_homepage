import React from 'react';
import { Shield, Mail, Eye, Lock, Database } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              Polityka Prywatności
            </h1>
            <p className="text-xl text-muted">
              Dowiedz się, jak chronimy Twoje dane osobowe
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Navigation */}
            <nav className="mb-12 p-6 bg-card rounded-xl">
              <h2 className="text-lg font-semibold text-text mb-4">Spis treści:</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#data-collection" className="text-primary hover:text-primary/80 transition-colors">
                    1. Jakie dane zbieramy
                  </a>
                </li>
                <li>
                  <a href="#data-purpose" className="text-primary hover:text-primary/80 transition-colors">
                    2. Cel przetwarzania danych
                  </a>
                </li>
                <li>
                  <a href="#user-rights" className="text-primary hover:text-primary/80 transition-colors">
                    3. Prawa użytkownika
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary hover:text-primary/80 transition-colors">
                    4. Kontakt w sprawach danych osobowych
                  </a>
                </li>
              </ul>
            </nav>

            {/* Sections */}
            <div className="space-y-12">
              {/* Data Collection */}
              <section id="data-collection" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Jakie dane zbieramy</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <p className="text-muted">
                    W ramach korzystania z naszych usług zbieramy następujące dane:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                    <li>Dane identyfikacyjne (imię, nazwisko)</li>
                    <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
                    <li>Dane sportowe (wyniki testów, pomiary, statystyki)</li>
                    <li>Dane techniczne (adres IP, informacje o urządzeniu)</li>
                  </ul>
                </div>
              </section>

              {/* Data Purpose */}
              <section id="data-purpose" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Cel przetwarzania danych</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <p className="text-muted">
                    Twoje dane są przetwarzane w następujących celach:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                    <li>Świadczenie usług analitycznych i predykcyjnych</li>
                    <li>Personalizacja treści i rekomendacji</li>
                    <li>Komunikacja związana z usługami</li>
                    <li>Cele statystyczne i badawcze</li>
                    <li>Wypełnienie obowiązków prawnych</li>
                  </ul>
                </div>
              </section>

              {/* User Rights */}
              <section id="user-rights" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Prawa użytkownika</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <p className="text-muted">
                    Zgodnie z RODO, przysługują Ci następujące prawa:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                    <li>Prawo dostępu do swoich danych</li>
                    <li>Prawo do sprostowania danych</li>
                    <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym")</li>
                    <li>Prawo do ograniczenia przetwarzania</li>
                    <li>Prawo do przenoszenia danych</li>
                    <li>Prawo do sprzeciwu</li>
                  </ul>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Kontakt w sprawach danych osobowych</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <p className="text-muted">
                    W sprawach związanych z ochroną danych osobowych możesz się z nami skontaktować:
                  </p>
                  <ul className="text-muted space-y-2">
                    <li>
                      <strong className="text-text">E-mail:</strong>{" "}
                      <a href="mailto:privacy@potencjaldosportu.pl" className="text-primary hover:text-primary/80 transition-colors">
                        privacy@potencjaldosportu.pl
                      </a>
                    </li>
                    <li>
                      <strong className="text-text">Adres:</strong> ul. Marii Curie-Skłodowskiej 12, 50-381 Wrocław
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}