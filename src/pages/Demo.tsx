import React from 'react';
import { Phone, Mail, MessageCircle, Star, Users, Brain, Target, Clock } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  club: string;
  quote: string;
}

export function Demo() {
  const testimonials: Testimonial[] = [
    {
      name: "Karol Kaszowski",
      role: "Trener UEFA A",
      club: "FC Wrocław Academy",
      quote: "Soccer Talent Predictor to przełomowe narzędzie w identyfikacji młodych talentów. Precyzyjne analizy znacząco usprawniły moją pracę."
    },
    {
      name: "Michał Pawlak",
      role: "Trener techniki indywiudalnej",
      club: "MP Sports",
      quote: "Dzięki tej platformie mogę lepiej zrozumieć potencjał każdego zawodnika i zaplanować jego indywidualny rozwój."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80"
            alt="Young soccer players"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Miesiąc za darmo</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
              Soccer Talent Predictor
              <span className="block text-primary mt-2">
                Odkryj Talent, Zbuduj Przewagę
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl">
              Wypróbuj nasz system za darmo przez 30 dni. Bez zobowiązań, bez ukrytych opłat.
              Przekonaj się, jak AI może wspomóc rozwój młodych talentów.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone Contact */}
              <a
                href="tel:+48697319807"
                className="group bg-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 
                         transform hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6
                              group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-4">Zadzwoń do nas</h3>
                <p className="text-muted mb-6">Porozmawiaj z naszym ekspertem</p>
                <p className="text-primary font-semibold group-hover:scale-105 transition-transform">
                  +48 697 319 807
                </p>
              </a>

              {/* Email Contact */}
              <a
                href="mailto:biuro@potencjaldosportu.pl"
                className="group bg-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 
                         transform hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6
                              group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-4">Napisz do nas</h3>
                <p className="text-muted mb-6">Wyślij wiadomość e-mail</p>
                <p className="text-primary font-semibold group-hover:scale-105 transition-transform">
                  biuro@potencjaldosportu.pl
                </p>
              </a>

              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/48697319807"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 
                         transform hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6
                              group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-4">WhatsApp</h3>
                <p className="text-muted mb-6">Napisz na WhatsApp</p>
                <p className="text-primary font-semibold group-hover:scale-105 transition-transform">
                  Kliknij, aby otworzyć czat
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">Analiza AI</h3>
                <p className="text-muted">Zaawansowana analiza predyspozycji sportowych</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">Predykcja</h3>
                <p className="text-muted">Precyzyjne prognozy rozwoju zawodnika</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">Wsparcie</h3>
                <p className="text-muted">Pełne wsparcie dla trenerów i klubów</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-text text-center mb-12">
              Co mówią o nas trenerzy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-muted mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-text">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.club}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-text mb-6">
              Nie czekaj - zacznij już dziś!
            </h2>
            <p className="text-lg text-muted mb-8">
              Skontaktuj się z nami i rozpocznij 30-dniowy okres próbny. 
              Przekonaj się, jak Soccer Talent Predictor może wspomóc rozwój młodych talentów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48697319807"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary 
                         text-white rounded-lg hover:bg-primary/90 transition-all duration-300 
                         transform hover:scale-105 shadow-lg hover:shadow-primary/20"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Zadzwoń teraz</span>
              </a>
              <a
                href="mailto:biuro@potencjaldosportu.pl"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 
                         border-primary text-primary rounded-lg hover:bg-primary/10 
                         transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Wyślij e-mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}