import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Products } from '../components/Products';
import { HowItWorks } from '../components/HowItWorks';
import { AthleteDevelopment } from '../components/AthleteDevelopment';

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <AthleteDevelopment />
      <Products />
      <HowItWorks />
    </div>
  );
}