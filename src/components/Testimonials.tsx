import React, { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
  image: string;
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      quote: "Soccer Talent Predictor pomógł nam zrewolucjonizować proces identyfikacji młodych talentów. Precyzyjne analizy i rekomendacje znacząco usprawniły naszą pracę.",
      author: "Jacek Zieliński",
      role: "Dyrektor Sportowy",
      company: "Cracovia",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Logo_MKS_Cracovia.svg",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
    },
    {
      quote: "Dzięki Sportpredictor znacznie usprawniliśmy proces selekcji i rozwoju młodych zawodników. To narzędzie stało się nieodzownym elementem naszej akademii.",
      author: "Marek Papszun",
      role: "Trener",
      company: "Raków Częstochowa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Rak%C3%B3w_Cz%C4%99stochowa_logo.svg",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
    },
    {
      quote: "Innowacyjne podejście do analizy danych sportowych pozwoliło nam odkryć potencjał wielu utalentowanych zawodników. Polecam każdemu klubowi, który poważnie myśli o szkoleniu.",
      author: "Tomasz Rząsa",
      role: "Dyrektor Akademii",
      company: "Zagłębie Lubin",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Zag%C5%82%C4%99bie_Lubin_logo.svg",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-text mb-6">
            Co mówią nasi klienci?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Poznaj opinie profesjonalistów, którzy zaufali naszym rozwiązaniom
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary transition-colors md:-left-12"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary transition-colors md:-right-12"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Carousel */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-none w-full md:w-[calc(50%-12px)] snap-center"
              >
                <div className="bg-background p-8 rounded-2xl shadow-lg h-full">
                  <Quote className="w-10 h-10 text-primary/40 mb-6" />
                  <p className="text-text text-lg mb-8 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-text">{testimonial.author}</p>
                      <p className="text-sm text-muted">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    </div>
                    <img 
                      src={testimonial.logo} 
                      alt={testimonial.company}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}