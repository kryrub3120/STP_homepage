import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Products = React.lazy(() => import('./pages/Products').then(module => ({ default: module.Products })));
const Team = React.lazy(() => import('./pages/Team').then(module => ({ default: module.Team })));
const Funding = React.lazy(() => import('./pages/Funding').then(module => ({ default: module.Funding })));
const FundingProjectDetail = React.lazy(() => import('./pages/FundingProjectDetail').then(module => ({ default: module.FundingProjectDetail })));
const Demo = React.lazy(() => import('./pages/Demo').then(module => ({ default: module.Demo })));
const SoccerTalentPredictor = React.lazy(() => import('./pages/SoccerTalentPredictor').then(module => ({ default: module.SoccerTalentPredictor })));
const ConsultingAI = React.lazy(() => import('./pages/ConsultingAI').then(module => ({ default: module.ConsultingAI })));
const RecruitmentOptimization = React.lazy(() => import('./pages/RecruitmentOptimization').then(module => ({ default: module.RecruitmentOptimization })));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const CookiesPolicy = React.lazy(() => import('./pages/CookiesPolicy').then(module => ({ default: module.CookiesPolicy })));
const Terms = React.lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));
const Blog = React.lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const BlogPost = React.lazy(() => import('./pages/BlogPost').then(module => ({ default: module.BlogPost })));
const Media = React.lazy(() => import('./pages/Media').then(module => ({ default: module.Media })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route change
    const gtag = window.gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
        send_to: 'G-020MLSBZQT'
      });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 lg:pt-20">
        <React.Suspense fallback={<PageLoader />}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/produkty" element={<Products />} />
            <Route path="/produkty/predyktor-talentu-pilkarskiego" element={<SoccerTalentPredictor />} />
            <Route path="/produkty/doradztwo-ai" element={<ConsultingAI />} />
            <Route path="/produkty/optymalizacja-rekrutacji" element={<RecruitmentOptimization />} />
            <Route path="/zespol" element={<Team />} />
            <Route path="/finansowanie" element={<Funding />} />
            <Route path="/finansowanie/:projectId" element={<FundingProjectDetail />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
            <Route path="/ciasteczka" element={<CookiesPolicy />} />
            <Route path="/warunki" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </React.Suspense>
      </main>
      <Footer />
       <CookieConsent />
    </div>
  );
}
