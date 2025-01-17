import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  club?: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export function Demo() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    club: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    // Validate form
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setStatus({
        type: 'error',
        message: 'Imię i nazwisko są wymagane'
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Proszę podać prawidłowy adres email'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('demo_registrations')
        .insert([
          {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            club: formData.club || null
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          throw new Error('Ten adres email jest już zarejestrowany');
        }
        throw error;
      }

      setStatus({
        type: 'success',
        message: 'Rejestracja przebiegła pomyślnie! Sprawdź swoją skrzynkę email.'
      });

      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        club: ''
      });

    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Wystąpił błąd podczas rejestracji. Spróbuj ponownie później.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
      {/* Header Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
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
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg p-8">
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
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-text mb-4">
                  Zarejestruj się na DEMO
                </h2>
                <p className="text-muted">
                  Wypełnij formularz, aby otrzymać dostęp do wersji demonstracyjnej
                </p>
              </div>

              {status.type && (
                <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                  status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-muted mb-2">
                      Imię
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background text-text rounded-lg border border-white/10 
                               focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                               transition-all"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-muted mb-2">
                      Nazwisko
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background text-text rounded-lg border border-white/10 
                               focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                               transition-all"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background text-text rounded-lg border border-white/10 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                             transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="club" className="block text-sm font-medium text-muted mb-2">
                    Klub (opcjonalnie)
                  </label>
                  <input
                    type="text"
                    id="club"
                    name="club"
                    value={formData.club}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background text-text rounded-lg border border-white/10 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                             transition-all"
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary 
                           text-white rounded-lg hover:bg-primary/90 transition-all duration-300 
                           group font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Przetwarzanie...</span>
                    </>
                  ) : (
                    <>
                      <span>Zarejestruj się na DEMO</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-sm text-muted text-center">
                  Rejestrując się, akceptujesz nasz{' '}
                  <a href="/terms" className="text-primary hover:text-primary/80 transition-colors">
                    regulamin
                  </a>
                  {' '}i{' '}
                  <a href="/privacy-policy" className="text-primary hover:text-primary/80 transition-colors">
                    politykę prywatności
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}