import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { Clock, Send } from 'lucide-react';

export function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const targetDate = new Date("2025-06-30T00:00:00").getTime();

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              DEMO Soccer Talent Predictor
            </h1>
            <p className="text-xl text-muted mb-8">
              Zarejestruj się już teraz, aby uzyskać 3-miesięczny darmowy dostęp do Soccer Talent Predictor
            </p>
            <div className="flex items-center justify-center gap-3 text-primary">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-semibold">Start: 30.06.2025 r.</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-card rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-text mb-6">
                Do startu pozostało:
              </h2>
              <Countdown 
                date={targetDate}
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{days}</div>
                      <div className="text-sm text-muted">Dni</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{hours}</div>
                      <div className="text-sm text-muted">Godzin</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{minutes}</div>
                      <div className="text-sm text-muted">Minut</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{seconds}</div>
                      <div className="text-sm text-muted">Sekund</div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-card rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-text mb-8 text-center">
              Formularz rejestracyjny
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Imię i nazwisko"
                className="px-4 py-2 w-full max-w-md bg-background text-text rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="px-4 py-2 w-full max-w-md bg-background text-text rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-text rounded-lg hover:bg-opacity-80 transition-all duration-300 group"
              >
                <span>Zarejestruj się</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}