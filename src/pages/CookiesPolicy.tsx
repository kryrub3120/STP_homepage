import React from 'react';
import { Cookie, Settings, Info, CheckCircle } from 'lucide-react';

export function CookiesPolicy() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Cookie className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              Polityka Cookies
            </h1>
            <p className="text-xl text-muted">
              Informacje o plikach cookies używanych na naszej stronie
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
                  <a href="#what-are-cookies" className="text-primary hover:text-primary/80 transition-colors">
                    1. Czym są pliki cookies
                  </a>
                </li>
                <li>
                  <a href="#types-of-cookies" className="text-primary hover:text-primary/80 transition-colors">
                    2. Rodzaje używanych plików cookies
                  </a>
                </li>
                <li>
                  <a href="#manage-cookies" className="text-primary hover:text-primary/80 transition-colors">
                    3. Zarządzanie ustawieniami cookies
                  </a>
                </li>
                <li>
                  <a href="#consent" className="text-primary hover:text-primary/80 transition-colors">
                    4. Wyrażanie zgody
                  </a>
                </li>
              </ul>
            </nav>

            {/* Sections */}
            <div className="space-y-12">
              {/* What are Cookies */}
              <section id="what-are-cookies" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Czym są pliki cookies</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <p className="text-muted">
                    Pliki cookies (tzw. "ciasteczka") to małe pliki tekstowe, które są zapisywane na Twoim
                    urządzeniu podczas odwiedzania naszej strony. Służą one do zapewnienia prawidłowego
                    działania strony, personalizacji treści oraz analizy ruchu.
                  </p>
                </div>
              </section>

              {/* Types of Cookies */}
              <section id="types-of-cookies" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <Cookie className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Rodzaje używanych plików cookies</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-2">Niezbędne cookies</h3>
                    <p className="text-muted">
                      Konieczne do prawidłowego funkcjonowania strony i nie mogą być wyłączone.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-2">Analityczne cookies</h3>
                    <p className="text-muted">
                      Pomagają nam zrozumieć, jak użytkownicy korzystają z naszej strony.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-2">Funkcjonalne cookies</h3>
                    <p className="text-muted">
                      Umożliwiają zapamiętanie Twoich preferencji i personalizację strony.
                    </p>
                  </div>
                </div>
              </section>

              {/* Manage Cookies */}
              <section id="manage-cookies" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Zarządzanie ustawieniami cookies</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <p className="text-muted">
                    Możesz zarządzać ustawieniami plików cookies w swojej przeglądarce:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                    <li>Google Chrome: Menu → Ustawienia → Prywatność i bezpieczeństwo</li>
                    <li>Mozilla Firefox: Menu → Opcje → Prywatność i bezpieczeństwo</li>
                    <li>Safari: Preferencje → Prywatność</li>
                    <li>Microsoft Edge: Menu → Ustawienia → Prywatność i zabezpieczenia</li>
                  </ul>
                </div>
              </section>

              {/* Consent */}
              <section id="consent" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Wyrażanie zgody</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <p className="text-muted">
                    Podczas pierwszej wizyty na naszej stronie zostaniesz poproszony o wyrażenie zgody
                    na używanie plików cookies. Możesz w każdej chwili zmienić swoje preferencje,
                    korzystając z ustawień przeglądarki.
                  </p>
                  <p className="text-muted">
                    Korzystanie z naszej strony bez zmiany ustawień cookies oznacza, że będą one
                    zapisywane w pamięci urządzenia.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}