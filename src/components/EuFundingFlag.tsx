import React from 'react';
import { Link } from 'react-router-dom';

export function EuFundingFlag() {
  return (
    <Link 
      to="/finansowanie"
      className="flex items-center ml-2"
      aria-label="Dofinansowanie z Unii Europejskiej"
      title="Dofinansowanie z Unii Europejskiej"
    >
      <img 
        src="/images/Flag_of_Europe.svg-768x512.png" 
        alt="Flaga Unii Europejskiej" 
        className="h-5 w-auto transition-transform hover:scale-110" 
        loading="lazy"
      />
    </Link>
  );
}
