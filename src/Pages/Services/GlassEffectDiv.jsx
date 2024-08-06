import React from 'react';
import 'tailwindcss/tailwind.css';
import img from '../../assets/1.bmp'

const GlassEffectDiv = () => {
  return (
    <div 
    className="flex items-center justify-center h-screen bg-cover bg-center"
    style={{
        backgroundImage: `url(${img})`
    }}
    >
      <div className="relative w-80 h-80 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Glass Effect</h1>
        <p className="text-white">
          This is a div with an opaque, glass-like background using Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default GlassEffectDiv;
