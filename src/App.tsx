import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Lazy load pages with proper dynamic imports
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Products = React.lazy(() => import('./pages/Products').then(module => ({ default: module.Products })));
const Team = React.lazy(() => import('./pages/Team').then(module => ({ default: module.Team })));
const Funding = React.lazy(() => import('./pages/Funding').then(module => ({ default: module.Funding })));
const Demo = React.lazy(() => import('./pages/Demo').then(module => ({ default: module.Demo })));

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
            <Route path="/team" element={<Team />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}