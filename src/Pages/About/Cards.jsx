import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFm9A7OUnU9Jb_rKMdd-Uj1R2fKxc6AsG0Tg&s',  
    name: 'Bjarke Ingels',
    quote: '“Architects need to adapt to the changing climate.”',
  },
  {
    picture: 'https://parametric-architecture.com/wp-content/uploads/2024/04/Rem-Koolhaas-2.jpg',  
    name: 'Rem Koolhaas',
    quote: '“Architecture often fails to address the real needs of the people.”',
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEiVE9yCDimXcNecrIlFm73Pa55__ABVArw&s',  
    name: 'Zaha Hadid',
    quote: ' “Innovation in architecture is stifled by bureaucratic constraints.”',
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVM1fRE_B1NiByuAfLVx9K6Bt7qgI48nchbg&s',  
    name: 'Frank Gehry',
    quote: ' “The public’s understanding of architecture is limited and needs improvement.”',
  },
  {
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Diana_Balmori-999.jpg/800px-Diana_Balmori-999.jpg',  
    name: 'Diana Balmori',
    quote: '“Urban spaces often lack the integration of nature.”',
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGPPIzDEXDh7M0dwylhoPqRiKRj81SYmcWA&s',  
    name: 'Richard Rogers',
    quote: '“Social housing projects often suffer from poor design quality.”',
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4BXxChYHbw5I_Cv7v1FxLkVSlfXY_UkV-g&s',  
    name: 'David Adjaye',
    quote: '“Architecture must address social inequalities.”',
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzXP0zlKI9iXZm-UTCyMUrWaOebzkI75UQA&s',  
    name: 'Maya Lin',
    quote: '“Historical preservation often conflicts with modern needs.”',
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBshEEHEnzzyKBRcJTdRGEva62nj055MKbg&s',  
    name: 'Shigeru Ban',
    quote: '"Good design is not about grand gestures, but about making everyday life better."',
  },
  {
    picture: 'https://www.gsd.harvard.edu/wp-content/uploads/2016/06/Jeanne-Gang_2019-%C2%A9-Saverio-Truglia_crop.jpg',  
    name: 'Jeanne Gang',
    quote: '"Design is about more than just aesthetics; it’s about improving the human experience."',
  },
];

const Cards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [indexMultiplier, setIndexMultiplier] = useState(15);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 1600px)').matches) {
        setIndexMultiplier(14); // Reduce the multiplier for wider screens
      } else if (window.matchMedia('(max-width: 768px)').matches) {
        setIndexMultiplier(40); // Increase space for mobile view
      } else {
        setIndexMultiplier(18); // Default multiplier
      }
    };

    // Set the initial multiplier
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLeftPosition = (index) => {
    if (hoveredIndex !== null && index > hoveredIndex) {
      return `${index * indexMultiplier + 18}%`;
    }
    return `${index * indexMultiplier}%`;
  };

  return (
    <div className='w-full overflow-x-auto md:h-[500px] mt-4 md:mt-0'>
      <div className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center md:mt-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="absolute rounded-lg md:h-[410px] md:w-[280px] bg-gray-700"
            whileHover={{ rotate: 5, x: 8, y: -15 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              left: handleLeftPosition(index),
              zIndex: index,
              transition: 'left 0.3s ease',
              boxShadow: '10px 0 5px -3px rgba(0,0,0,0.5), 0 0 10px 0 rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-4 shadow-lg rounded-lg mt-3 flex flex-col h-full md:h-[400px]">
              <img
                src={card.picture}
                alt={card.name}
                className="w-6 md:w-12 h-6 md:h-12 m-4 rounded-full object-cover"
              />
              <div className="p-4 text-white">
                <h2 className="text-[16px] md:text-xl 2xl:text-2xl font-semibold">{card.name}</h2>
                <p className="mt-2 2xl:text-lg">{card.quote}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute {
            height: 300px;
            width: 200px; /* Increased width */
          }
          .h-[450px] {
            height: 350px;
          }
          .h-[410px] {
            height: 310px;
          }
          .h-[400px] {
            height: 300px;
          }
          .w-[280px] {
            width: 200px; /* Increased width */
          }
          .w-12 {
            width: 40px;
          }
          .h-12 {
            height: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default Cards;
