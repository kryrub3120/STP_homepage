# Sportpredictor - Dokumentacja v1.0.1

## 🚀 O Projekcie

Sportpredictor to innowacyjna platforma wykorzystująca sztuczną inteligencję do analizy i predykcji potencjału młodych talentów sportowych. Projekt skupia się na dostarczaniu zaawansowanych narzędzi analitycznych dla klubów sportowych i trenerów.

### 🎯 Główne Funkcjonalności

- Analiza potencjału sportowego
- Predykcja rozwoju zawodników
- System rejestracji na demo
- Panel informacyjny dla mediów
- Blog z aktualnościami

## 🛠️ Technologie

- **Frontend:**
  - React 18.3
  - TypeScript
  - Vite
  - Tailwind CSS
  - Lucide React (ikony)
  - React Router DOM
  - React Countdown

- **Backend:**
  - Supabase (baza danych i autentykacja)
  - Row Level Security (RLS)

## 📁 Struktura Projektu

```
src/
├── components/         # Komponenty wielokrotnego użytku
├── pages/             # Strony aplikacji
├── lib/               # Konfiguracja i narzędzia
├── types/             # Definicje TypeScript
├── hooks/             # Custom hooks
└── api/               # Endpointy API

supabase/
└── migrations/        # Migracje bazy danych
```

## 🔧 Konfiguracja Projektu

### Wymagania

- Node.js >= 18
- npm >= 9

### Zmienne Środowiskowe

Utwórz plik `.env` w głównym katalogu:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Instalacja

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Budowanie produkcyjne
npm run build
```

## 📊 Baza Danych

### Tabele

#### demo_registrations
- `id` (uuid, PRIMARY KEY)
- `name` (text, NOT NULL)
- `email` (text, NOT NULL, UNIQUE)
- `club` (text, nullable)
- `created_at` (timestamptz, DEFAULT now())

### Polityki Bezpieczeństwa (RLS)

1. "Anyone can register for demo"
   - Pozwala anonimowym użytkownikom na rejestrację
   - Operacja: INSERT

2. "Authenticated users can read demo registrations"
   - Pozwala uwierzytelnionym użytkownikom na odczyt danych
   - Operacja: SELECT

3. "Service role has full access"
   - Pełny dostęp dla roli serwisowej
   - Operacje: ALL

## 🔐 Bezpieczeństwo

- Implementacja Row Level Security (RLS) w Supabase
- Walidacja danych po stronie klienta i serwera
- Bezpieczne przechowywanie kluczy w zmiennych środowiskowych
- Zabezpieczenie przed duplikatami emaili

## 🎨 Style i UI

- Spójny system kolorów zdefiniowany w `tailwind.config.js`
- Responsywny design (mobile-first)
- Animacje i przejścia
- Dostępność (WCAG)

## 📱 Responsywność

Breakpointy:
- xs: 375px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## 🚀 Deployment

1. Skonfiguruj zmienne środowiskowe na serwerze produkcyjnym
2. Zbuduj projekt: `npm run build`
3. Wdróż zawartość katalogu `dist`

## 🆕 Nowe Funkcjonalności (v1.0.1)

- Komponent CookieConsent dla zgodności z GDPR
- Nowa strona Demo dla potencjalnych klientów
- Rozszerzony komponent AthleteDevelopment
- Ulepszony komponent Products z nowymi funkcjonalnościami
- Zoptymalizowany komponent ScrollToTop dla lepszej nawigacji
- Odświeżony wygląd strony About
- Ulepszenia w komponencie Hero dla lepszego pierwszego wrażenia
- Zmodyfikowany Navbar dla lepszej użyteczności
- Zaktualizowany Footer z nowymi linkami i informacjami
- Drobne poprawki w typach globalnych dla lepszej spójności TypeScript
- Optymalizacje wydajności w różnych komponentach

## 📈 Planowane Funkcjonalności (v1.1)

- [ ] System autentykacji użytkowników
- [ ] Panel administracyjny
- [ ] Integracja z systemem płatności
- [ ] Zaawansowana analityka danych
- [ ] System powiadomień email

## 🐛 Znane Problemy

1. Optymalizacja wydajności przy dużej liczbie rejestracji
2. Dostosowanie polityk RLS do przyszłych funkcjonalności

## 📝 Konwencje Kodowania

- Nazewnictwo komponentów: PascalCase
- Nazewnictwo funkcji i zmiennych: camelCase
- Nazewnictwo plików komponentów: PascalCase.tsx
- Komentarze: JSDoc dla głównych funkcji i komponentów

## 🤝 Współpraca

1. Sklonuj repozytorium
2. Utwórz nową gałąź dla swojej funkcjonalności
3. Commituj zmiany z opisowymi komunikatami
4. Utwórz Pull Request

## 📄 Licencja

Wszelkie prawa zastrzeżone © 2025 Sportpredictor
