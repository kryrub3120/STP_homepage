import React, { useEffect } from 'react';
import { 
  Mail, 
  Phone,
  Newspaper,
  Mic,
  BookOpen,
  BarChart3,
  MessageSquare,
  Target,
  Search,
  Laptop,
  Database,
  LineChart
} from 'lucide-react';

export function Media() {
  useEffect(() => {
    // Track page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Centrum Prasowe',
        page_location: window.location.href,
        page_path: window.location.pathname,
        send_to: 'G-020MLSBZQT'
      });
    }
  }, []);

  const expertiseAreas = [
    {
      icon: <Mic className="w-6 h-6 text-primary" />,
      title: "Wywiady eksperckie",
      description: "Nasi eksperci są dostępni do wywiadów na temat innowacji w sporcie, sztucznej inteligencji i rozwoju młodych talentów."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Komentarze branżowe",
      description: "Oferujemy eksperckie komentarze dotyczące aktualnych trendów i wydarzeń w świecie sportu i technologii."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Informacje o projektach i badaniach",
      description: "Dzielimy się wiedzą o naszych innowacyjnych projektach i najnowszych badaniach w dziedzinie predykcji sportowej."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Dane i analizy",
      description: "Udostępniamy dane i analizy dotyczące rozwoju młodych talentów sportowych oraz trendy w wykorzystaniu AI w sporcie."
    }
  ];

  const keyTopics = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Dobór i selekcja w sporcie",
      description: "Nowoczesne metody identyfikacji i selekcji zawodników."
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Identyfikacja talentów",
      description: "Innowacyjne podejście do odkrywania młodych talentów."
    },
    {
      icon: <Laptop className="w-6 h-6 text-primary" />,
      title: "Nowe technologie w piłce nożnej",
      description: "Wykorzystanie AI i zaawansowanej analityki w rozwoju zawodników."
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Optymalizacja danych w procesach treningowych",
      description: "Jak dane wspierają rozwój zawodników i planowanie treningów."
    },
    {
      icon: <LineChart className="w-6 h-6 text-primary" />,
      title: "Wykorzystanie danych w analizie meczów na żywo",
      description: "Real-time analityka i jej wpływ na decyzje taktyczne."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Newspaper className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              Centrum prasowe
            </h1>
            <p className="text-xl text-muted">
              Jesteśmy do dyspozycji mediów w zakresie ekspertyz, komentarzy i informacji 
              o innowacjach w sporcie
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-text text-center mb-12">
              Jesteśmy dostępni dla mediów
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-xl hover:shadow-xl transition-all duration-300 
                           transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center 
                                justify-center flex-shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-2">{area.title}</h3>
                      <p className="text-muted">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Topics Section */}
      <div className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-text text-center mb-12">
              Nasze wiodące tematy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {keyTopics.map((topic, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-xl hover:shadow-xl transition-all duration-300 
                           transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center 
                                justify-center flex-shrink-0">
                      {topic.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-2">{topic.title}</h3>
                      <p className="text-sm text-muted">{topic.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Expert Contact CTA */}
            <div className="bg-background/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-text mb-4">
                  Potrzebujesz więcej informacji?
                </h3>
                <p className="text-muted">
                  Skontaktuj się z naszym ekspertem dr Krystianem Rubajczykiem, 
                  który chętnie odpowie na Twoje pytania i udzieli szczegółowych informacji 
                  na interesujące Cię tematy.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a 
                  href="mailto:biuro@potencjaldosportu.pl"
                  className="flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-lg hover:bg-primary/20 
                           transition-all duration-300 text-primary"
                >
                  <Mail className="w-5 h-5" />
                  <span>biuro@potencjaldosportu.pl</span>
                </a>
                <a 
                  href="tel:+48697319807"
                  className="flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-lg hover:bg-primary/20 
                           transition-all duration-300 text-primary"
                >
                  <Phone className="w-5 h-5" />
                  <span>+48 697 319 807</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-text text-center mb-12">
              Szybki kontakt dla mediów
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="mailto:biuro@potencjaldosportu.pl"
                className="group bg-card p-8 rounded-xl hover:shadow-xl transition-all 
                         duration-300 transform hover:-translate-y-1 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center 
                            justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">Email</h3>
                  <p className="text-muted mb-2">Zapytania prasowe</p>
                  <p className="text-primary group-hover:scale-105 transition-transform">
                    biuro@potencjaldosportu.pl
                  </p>
                </div>
              </a>

              <a 
                href="tel:+48697319807"
                className="group bg-card p-8 rounded-xl hover:shadow-xl transition-all 
                         duration-300 transform hover:-translate-y-1 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center 
                            justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">Telefon</h3>
                  <p className="text-muted mb-2">Kontakt bezpośredni</p>
                  <p className="text-primary group-hover:scale-105 transition-transform">
                    +48 697 319 807
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}