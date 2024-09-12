import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./about.css";
import "./aboutq.css";
import about from '../../assets/about-hero.mp4';
import Info from '../../Info';
import PeopleSwiper from '../../People';
import image3 from '../../assets/abost.jpg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import backg from '../../assets/inter.bmp';
import Partners from './Partners';
import Icon from './Icon';
import Svg from './Svg';
import aphro from '../../assets/aphro.png';
import Cards from './Cards';
import Mission from './Mission';
import Button from './Button';

const About = () => {
  // Using refs and inView hook to track when an element is visible
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  
  const isInView1 = useInView(ref1, { margin: "-100px 0px -100px 0px", once: true });
  const isInView2 = useInView(ref2, { margin: "-100px 0px -100px 0px", once: true });
  const isInView3 = useInView(ref3, { margin: "-100px 0px -100px 0px", once: true });

  return (
    <div className=''>
      <div 
        className='w-full h-[70vh] md:h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden md:block flex items-center justify-center'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${backg})`
        }}
      >
        <motion.div
          className='absolute ml-4 ml:top-[190px] md:top-[300px] left-0 ml:pl-6 md:pl-10'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          ref={ref1}
        >
          <h2 className='text-white font-nocturne text-2xl ml:text-3xl md:text-6xl leading-tight text-balance'>
            Pushing The Boundaries <br /> of Innovation
          </h2>
          <p className='text-white text-[13px] md:text-[16px] my-2'>
            Redefining what is possible when luxury<br /> meets innovation in modern architecture.
          </p>
          <div className='flex flex-col'>
            <motion.div 
              className='flex items-center'
              whileHover={{ scale: 1.03, transition: { duration: 0.5 }}}
            >
              <div className='my-2 clip1 rounded-lg w-[200px] md:w-[300px] bg-black'>
                <button className=" bg-transparent w-full px-4 py-2 text-white rounded-l text-sm">
                  Letter from the CEO
                </button>
              </div>
              <div className='clip2 bg-black p-[6px] pl-8 rounded-lg -m-5'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </motion.div>

            <motion.div 
              className='md:w-[340px] bg-gray-100 mt-2'
              whileHover={{ scale: 1.03, transition: { duration: 0.5 }}}
            >
              <button className="bg-transparent border w-full border-white md:px-4 py-1 md:py-2 rounded text-sm">
                Our Next Chapter
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className='bg-gray-600 pt-6'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        ref={ref2}
      >
        <div 
          className='md:grid md:grid-cols-2 flex flex-col-reverse md:bg-white md:bg-opacity-50 mx-4 md:mx-8 rounded-xl'
          style={{ boxShadow: '10px 0 20px rgba(0, 0, 0, 0.8)' }}
        >
          <div 
            className='about1 hidden bg-cover min-h-full bg-center rounded-xl md:block'
            style={{ backgroundImage: `url(${image3})` }}
          ></div>
          <div className='text-white p-6 bg-black bg-opacity-50 ml:pt-14 md:pt-20'>
            <h2 className='text-lg md:text-2xl ml:text-xl xl:text-2xl 2xl:text-4xl'>About Us</h2>
            <p className='md:text-[20px] ml:text-[12px] mt-4 ml:mt-4 md:my-7 lg:mt-6 text-balance'>
              At Novaar, we believe that your home or workspace should reflect your aspirations, achievements, and vision for the future.<br />
              The concept of modern architecture zealously drives each project we undertake. Our approach is simple: to blend form and function to maximize space, light, and the natural environment.<br />
              Each design is a testament to our commitment to excellence, pushing the boundaries of traditional architecture to explore new horizons.<br />
              Our buildings are not just structures but landmarks that command attention and admiration.
            </p>
            <div className='w-full h-[2px] my-4 md:mt-36 ml:mt-4 bg-white'></div>
            <Icon />
            <div className='w-full h-[2px] my-4 lg:my-8 bg-white'></div>
            <Info />
          </div>
        </div>
        
        {/* Add additional motion.div elements as needed with similar scroll animation logic */}
        
        {/* Continue with the rest of your content similarly */}
        
      </motion.div>
    </div>
  );
};

export default About;
