import React from 'react';
import { Mail, ExternalLink, Download, FileImage, FileText, FileVideo, Presentation as FilePresentation, Camera, MessageSquare, ChevronRight, Phone } from 'lucide-react';

interface DownloadResource {
  title: string;
  description: string;
  icon: React.ReactNode;
  format: string;
  size: string;
  url: string;
}

export function Media() {
  const downloadResources: DownloadResource[] = [
    {
      title: "Logotypy Sportpredictor",
      description: "Paczka zawierająca logotypy w różnych formatach i wersjach kolorystycznych",
      icon: <FileImage className="w-6 h-6 text-primary" />,
      format: "ZIP (PNG, SVG, EPS)",
      size: "12.5 MB",
      url: "#"
    },
    {
      title: "Broszura informacyjna",
      description: "Szczegółowa prezentacja naszych rozwiązań i technologii",
      icon: <FileText className="w-6 h-6 text-primary" />,
      format: "PDF",
      size: "3.2 MB",
      url: "#"
    },
    {
      title: "Zdjęcia zespołu i biura",
      description: "Wysokiej jakości zdjęcia do wykorzystania w publikacjach",
      icon: <Camera className="w-6 h-6 text-primary" />,
      format: "ZIP (JPEG)",
      size: "45.8 MB",
      url: "#"
    },
    {
      title: "Komunikaty prasowe",
      description: "Archiwum komunikatów prasowych z ostatnich 12 miesięcy",
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      format: "PDF",
      size: "1.8 MB",
      url: "#"
    },
    {
      title: "Prezentacja firmy",
      description: "Kompleksowa prezentacja Sportpredictor i naszych rozwiązań",
      icon: <FilePresentation className="w-6 h-6 text-primary" />,
      format: "PDF",
      size: "5.4 MB",
      url: "#"
    },
    {
      title: "Case Studies",
      description: "Przykłady wdrożeń i sukcesów naszych klientów",
      icon: <FileText className="w-6 h-6 text-primary" />,
      format: "PDF",
      size: "2.7 MB",
      url: "#"
    },
    {
      title: "Materiały wideo",
      description: "Filmy prezentacyjne i animacje produktowe",
      icon: <FileVideo className="w-6 h-6 text-primary" />,
      format: "ZIP (MP4)",
      size: "156 MB",
      url: "#"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              Centrum prasowe
            </h1>
            <p className="text-xl text-muted">
              Informacje i materiały dla mediów
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Newsletter Section */}
        <div className="bg-card rounded-xl p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-text mb-2">Biuletyn dla mediów</h2>
            <p className="text-muted mb-6">
              Zapisz się do naszego biuletynu, aby otrzymywać najnowsze informacje prasowe, 
              aktualności i materiały bezpośrednio na swoją skrzynkę.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
                <input
                  type="email"
                  placeholder="Twój adres e-mail"
                  className="w-full pl-12 pr-4 py-3 bg-background border border-white/10 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                           text-text placeholder-muted transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg
                         hover:bg-primary/90 transition-all duration-300 flex items-center 
                         justify-center gap-2 group"
              >
                <span>Zapisz się</span>
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Downloads Section */}
        <div className="bg-card rounded-xl p-8">
          <h2 className="text-2xl font-bold text-text mb-6">
            Materiały prasowe i zasoby dla mediów
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadResources.map((resource, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-xl border border-white/10 hover:border-primary/30 
                         transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text mb-1">{resource.title}</h3>
                    <p className="text-sm text-muted mb-3">{resource.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted">{resource.format}</span>
                      <span className="text-xs text-muted">{resource.size}</span>
                    </div>
                  </div>
                  <a
                    href={resource.url}
                    className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg
                             hover:bg-primary/20 transition-colors group-hover:scale-105"
                    download
                  >
                    <Download className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg
                       hover:bg-primary/90 transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-primary/20 group"
            >
              <Phone className="w-5 h-5" />
              <span>Skontaktuj się z działem PR</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Media Contact */}
        <div id="contact" className="bg-card rounded-xl p-8">
          <h2 className="text-2xl font-bold text-text mb-6">Kontakt dla mediów</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-text mb-2">Zapytania prasowe</h3>
              <a 
                href="mailto:biuro@potencjaldosportu.pl"
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                biuro@potencjaldosportu.pl
              </a>
            </div>

            <div className="mt-8 p-4 bg-background rounded-lg border border-white/10">
              <div className="flex items-start gap-3">
                <ExternalLink className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted">
                    Jesteśmy dostępni dla mediów w zakresie:
                  </p>
                  <ul className="list-disc list-inside text-muted mt-2 space-y-1">
                    <li>Wywiadów eksperckich</li>
                    <li>Komentarzy branżowych</li>
                    <li>Informacji o naszych projektach i badaniach</li>
                    <li>Danych i analiz dotyczących rozwoju młodych talentów</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}