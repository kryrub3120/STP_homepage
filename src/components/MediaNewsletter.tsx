import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export function MediaNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to your newsletter service
    // For demo purposes, we'll simulate a successful subscription
    setStatus('success');
    setMessage('Dziękujemy za zapisanie się do biuletynu!');
    setEmail('');
  };

  return (
    <div className="bg-card rounded-xl p-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-text mb-2">Biuletyn dla mediów</h2>
        <p className="text-muted mb-6">
          Zapisz się do naszego biuletynu, aby otrzymywać najnowsze informacje prasowe, 
          aktualności i materiały bezpośrednio na swoją skrzynkę.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          {status !== 'idle' && (
            <div className={`flex items-center gap-2 ${
              status === 'success' ? 'text-green-500' : 'text-red-500'
            }`}>
              {status === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <p>{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}