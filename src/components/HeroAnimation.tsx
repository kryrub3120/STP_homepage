import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroAnimation() {
  // Previous Three.js animation code moved here
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}