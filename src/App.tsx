import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Products = React.lazy(() => import('./pages/Products').then(module => ({ default: module.Products })));
const Team = React.lazy(() => import('./pages/Team').then(module => ({ default: module.Team })));
const Funding = React.lazy(() => import('./pages/Funding').then(module => ({ default: module.Funding })));
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

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/soccer-talent-predictor" element={<SoccerTalentPredictor />} />
            <Route path="/products/consulting-ai" element={<ConsultingAI />} />
            <Route path="/products/recruitment-optimization" element={<RecruitmentOptimization />} />
            <Route path="/team" element={<Team />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}