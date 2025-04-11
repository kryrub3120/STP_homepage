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
      {/* Logo pionowe dla ekranów >= md (768px) */}
      <img 
        src="/images/Logo_UE_RGB_UE_Dofinansowane_RGB-3_pionowe.png" 
        alt="Logo Unii Europejskiej - Dofinansowane" 
        className="hidden md:block h-12 w-auto transition-transform hover:scale-105" 
        loading="lazy"
      />
      
      {/* Logo poziome dla ekranów < md (768px) */}
      <img 
        src="/images/Logo_UE_RGB_UE_Dofinansowane_RGB-3.png" 
        alt="Logo Unii Europejskiej - Dofinansowane" 
        className="md:hidden h-8 w-auto transition-transform hover:scale-105" 
        loading="lazy"
      />
    </Link>
  );
}
