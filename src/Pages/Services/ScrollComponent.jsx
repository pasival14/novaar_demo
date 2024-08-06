// src/components/ScrollComponent.jsx

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { images } from './images'; // Import images from your assets

const ScrollComponent = () => {
  const [section, setSection] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / maxHeight) * 100;

    controls.start({
      height: `${scrollPercentage}%`,
      transition: { duration: 0.2 },
    });

    if (scrollPercentage >= 100) {
      setSection((prevSection) => (prevSection + 1) % images.length);
      window.scrollTo(0, 0); // Reset scroll position
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-screen flex">
        {section % 2 === 0 ? (
          <img src={images[section]} alt="Image" className="w-full h-full object-cover" />
        ) : (
          <div className="flex w-full h-full">
            <div className="flex-1 flex flex-col justify-center items-start p-10">
              <h1 className="text-4xl font-bold mb-4">Text Section {section}</h1>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex-1">
              <img src={images[section]} alt="Image" className="w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 h-48 w-8 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="bg-blue-500 w-full rounded-full"
          style={{ height: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
};

export default ScrollComponent;


