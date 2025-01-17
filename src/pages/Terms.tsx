import React from 'react';
import { FileText, ShieldCheck, CreditCard, HelpCircle } from 'lucide-react';

export function Terms() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              Regulamin
            </h1>
            <p className="text-xl text-muted">
              Zasady korzystania z serwisu Sportpredictor
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
                  <a href="#general-terms" className="text-primary hover:text-primary/80 transition-colors">
                    1. Zasady ogólne
                  </a>
                </li>
                <li>
                  <a href="#responsibility" className="text-primary hover:text-primary/80 transition-colors">
                    2. Odpowiedzialność
                  </a>
                </li>
                <li>
                  <a href="#purchase-terms" className="text-primary hover:text-primary/80 transition-colors">
                    3. Warunki zakupu
                  </a>
                </li>
                <li>
                  <a href="#complaints" className="text-primary hover:text-primary/80 transition-colors">
                    4. Reklamacje i zwroty
                  </a>
                </li>
              </ul>
            </nav>

            {/* Sections */}
            <div className="space-y-12">
              {/* General Terms */}
              <section id="general-terms" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Zasady ogólne</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <p className="text-muted">
                    Regulamin określa zasady korzystania z serwisu Sportpredictor, dostępnego pod adresem
                    potencjaldosportu.pl. Korzystanie z serwisu oznacza akceptację poniższych warunków.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-text">Definicje</h3>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                      <li>Serwis - platforma Sportpredictor</li>
                      <li>Użytkownik - osoba korzystająca z Serwisu</li>
                      <li>Usługi - wszystkie usługi świadczone przez Serwis</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Responsibility */}
              <section id="responsibility" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Odpowiedzialność</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-text">Odpowiedzialność Użytkownika</h3>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                      <li>Przestrzeganie regulaminu i przepisów prawa</li>
                      <li>Zachowanie poufności danych dostępowych</li>
                      <li>Odpowiedzialność za działania na koncie</li>
                    </ul>
                  </div>
                  <div className="space-y-4 mt-6">
                    <h3 className="text-lg font-semibold text-text">Odpowiedzialność Serwisu</h3>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                      <li>Zapewnienie dostępności usług</li>
                      <li>Ochrona danych użytkowników</li>
                      <li>Wsparcie techniczne</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Purchase Terms */}
              <section id="purchase-terms" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Warunki zakupu</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <p className="text-muted">
                    Proces zakupu usług w serwisie Sportpredictor:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                    <li>Wybór pakietu usług</li>
                    <li>Podanie danych do faktury</li>
                    <li>Wybór metody płatności</li>
                    <li>Potwierdzenie zamówienia</li>
                  </ul>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-text mb-2">Metody płatności</h3>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                      <li>Przelew bankowy</li>
                      <li>Płatności online</li>
                      <li>Karty płatnicze</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Complaints */}
              <section id="complaints" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-text">Reklamacje i zwroty</h2>
                </div>
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-text">Procedura reklamacyjna</h3>
                    <p className="text-muted">
                      Reklamacje można składać:
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                      <li>Poprzez formularz kontaktowy</li>
                      <li>Mailowo na adres: reklamacje@potencjaldosportu.pl</li>
                      <li>Pisemnie na adres siedziby firmy</li>
                    </ul>
                  </div>
                  <div className="space-y-4 mt-6">
                    <h3 className="text-lg font-semibold text-text">Zwroty</h3>
                    <p className="text-muted">
                      Zgodnie z prawem, konsument ma prawo odstąpić od umowy zawartej na odległość
                      w terminie 14 dni bez podania przyczyny.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}