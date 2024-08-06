import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./about.css"
import "./aboutq.css"
import about from '../../assets/about-hero.mp4'
import Info from '../../Info';
import PeopleSwiper from '../../People';
import image3 from '../../assets/1.bmp';
import { motion } from 'framer-motion';
import backg from '../../assets/inter.bmp'
import Partners from './Partners';
import Icon from './Icon';
import Svg from './Svg';
import aphro from '../../assets/aphro.png'
import Cards from './Cards';
import Mission from './Mission'
import Button from './Button';


const About = () => {
  return (
    <div className='' >
      <div 
      className='w-full h-[70vh] md:h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden md:block flex items-center justify-center'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${backg})`
      }}
      >
        {/* <div className='bg-white absolute top-0 left-0 bg-opacity-20 w-full md:h-screen'></div> */}
        <div className=' absolute ml-4 ml:top-[190px] md:top-[300px] left-0 ml:pl-6 md:pl-10'>
          <h2 className='text-white font-nocturne text-2xl ml:text-3xl md:text-6xl leading-tight text-balance '>Pushing The Boundaries <br /> of Innovation</h2>
          <p className='text-white text-[13px] md:text-[16px] my-2'>Redefining what is posible when luxury<br /> meets innovation in modern architecture.</p>
          <div className='flex flex-col '>
            <motion.div 
            className='flex items-center'
            whileHover={{ scale: 1.03,
              transition: { duration: 0.5 }
             }}
            >
              <div className='my-2 clip1 rounded-lg w-[200px] md:w-[300px] bg-black'>
                <button className=" bg-transparent w-full px-4 py-2 text-white rounded-l text-sm">Letter from the CEO</button>
              </div>
              <div className='clip2 bg-black p-[6px] pl-8 rounded-lg -m-5'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white" // Change color to white
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
            whileHover={{ scale: 1.03,
              transition: { duration: 0.5 }
             }}
            >
              <button className="bg-transparent border w-full border-white md:px-4 py-1 md:py-2 rounded text-sm">Our Next Chapter</button>
            </motion.div>
          </div>
        </div>
      </div>
      <div 
      className='bg-gray-600 pt-6'
      // style={{
      //   backgroundImage: `url(${backg})`
      // }}
      >
        <div 
        className='md:grid md:grid-cols-2 flex flex-col-reverse md:bg-white md:bg-opacity-50 mx-4 md:mx-8 rounded-xl'
        style={{ boxShadow: '10px 0 20px rgba(0, 0, 0, 0.8)' }}
        >
          <div 
          className='about1 hidden bg-cover min-h-full bg-center rounded-xl md:block'
          style={{
            backgroundImage: `url(${image3})`
          }}
          ></div>
          <div 
          className='text-white p-6 bg-black bg-opacity-50 ml:pt-14 md:pt-20'>
            <h2 className='text-lg md:text-2xl ml:text-xl xl:text-2xl 2xl:text-4xl'>About Us</h2>
            <p className='md:text-[20px] ml:text-[12px] mt-4 ml:mt-4  md:my-7 lg:mt-6 text-balance'>At Novaar, we believe that your home or 
            workspace should reflect your aspirations, achievements, and 
            vision for the future.<br />
            The concept of modern architecture zealously drives each project 
            we undertake. Our approach is simple: to blend form and function 
            to maximize space, light, and the natural environment. <br />
            Each design is a testament to our commitment to excellence, 
            pushing the boundaries of traditional architecture to explore new 
            horizons. <br />
            Our buildings are not just structures but landmarks that command 
            attention and admiration.</p>
            <div className='w-full h-[2px] my-4 md:mt-36 ml:mt-4 bg-white'></div>
            <Icon />
            <div className='w-full h-[2px] my-4 lg:my-8 bg-white'></div>
            <Info />
          </div>
        </div>
        <div className='md:flex items-center justify-center bg-black px-2 my-5'>
          <div 
          className='md:w-1/4 p-3 md:p-0 md:h-[100px] lg:h-[13vh] flex items-center md:border-r border-white justify-center'
          style={{ boxShadow: '4px 0 20px rgba(0, 0, 0, 0.8)' }}
          >
            <p className='text-2xl  text-center text-white'>Our Partners</p>
          </div>
          <Partners />
        </div>
        
        <div className='hidden md:pb-0 pb-20 mt-16 md:flex items-center justify-center'>
          <div className='clip3 flex px-4 ml:py-4 lg:px-24 ml:px-6 flex-col bg-white bg-opacity-80 w-[70vw] pt-8 pl-1 h-[60vh]  rounded-l-xl'>
            <Svg />
            <h1 className='text-3xl ml:py-0 md:py-5 opacity-80'>Who We Are</h1>
            <p className='text-[16px] ml:text-[15px] 2xl:leading-relaxed text-balance md:text-xl opacity-80'>
            "Our legacy is built upon a foundation of innovation. In an ever-evolving world, our designs stay ahead of the curve, incorporating the latest technology and architectural strategies to create aesthetically remarkable, environmentally sustainable, intelligent spaces. Imagine living or working in a space that looks impressive and seamlessly adapts to your needs, making your life easier, safer, and more enjoyable."
            </p>
              <Button prop = 'Our Services'/>
          </div>
          <div 
          className='clip4 bg-cover bg-center w-[30vw] h-[60vh] xl:-ml-[190px] ml:-ml-[120px] bg-opacity-60  rounded-r-xl'
          style={{
            backgroundImage: `url(${aphro})`
          }}
          ></div>
        </div>

        <div 
        className='md:hidden clip3 relative flex flex-col justify-center bg-cover bg-center bg-no-repeat m-2 p-4'
        style={{
          backgroundImage: `url(${aphro})`
        }}
        >
          <h1 className='text-3xl text-white ml:py-0 md:py-5 opacity-80'>Who We Are</h1>
          <p className='text-[16px] text-white ml:text-[15px] 2xl:leading-relaxed text-balance md:text-xl opacity-80'>
          "Our legacy is built upon a foundation of innovation. In an ever-evolving world, our designs stay ahead of the curve, incorporating the latest technology and architectural strategies to create aesthetically remarkable, environmentally sustainable, intelligent spaces. Imagine living or working in a space that looks impressive and seamlessly adapts to your needs, making your life easier, safer, and more enjoyable."
          </p>
            <Button prop = 'Our Services'/>
        </div>
        
        <div className="motion">
          <div className="motion-container">
            <div className='motion-text md:mt-24'>
              <h1>Architecture in Motion</h1>
              <p>The concept of modern architecture zealously drives each project we undertake. Our approach is simple: to blend, form and function to maximize space, light, and the natural environment. Each design is a testament to our commitment to excellence, pushing the boundaries of modern architecture to explore new horizons. Our buildings are not just structures but landmarks that command attention and admiration.
              </p>
              {/* <span className=''>
                <p>Our Service</p>
                <FaArrowRight/>
              </span> */}
              <div className='flex items-center mt-4'>
                <div className='my-2 clip1 w-[300px] bg-white bg-opacity-50'>
                  <button className=" bg-transparent w-full px-4 py-2 text-white rounded-lg text-sm">Projects</button>
                </div>
                <div className='clip2 bg-white bg-opacity-50 p-[6px] pl-8 rounded-lg -m-5'>
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white" 
                  className="size-6 rounded-lg"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                  </svg>
                </div>
              </div>
            </div>
            <div className="motion-grid">
              <div className="motion-grid-row">
              <h1>100+</h1>
              <h2>PROPERTIES</h2>
              <p>Our portfolio showcases our capabilities and vision. From luxurious homes that offer an escape to tranquility to cutting-edge commercial spaces that foster creativity and productivity, each property is a display of what is possible when luxury meets innovation in modern architecture.</p>
              </div>

              <div className="motion-grid-row">
              <h1>70+</h1>
              <h2>CLIENTS</h2>
              <p>At Novaar, we serve a wide range of clients. Whether you're buying your first home and seeking a comfortable and elegant space, or a company needing office space that reflects your brand's values, we have what you need.</p>
              </div>

              <div className="motion-grid-row">
              <h1>100%</h1>
              <h2>HAPPY CLIENTS</h2>
              <p>Our client-centered process, from conceptualization to completion, is meticulously managed to ensure satisfaction and efficiency. Our team works closely with clients to understand their vision and requirements, providing personalized consultations, a range of design options, and expert advice on materials, sustainability, and functionality.</p>
              </div>

              <div className="motion-grid-row">
              <h1>100%</h1>
              <h2>PROJECT COMPLETION</h2>
              <p>Once a design is approved, our project management team ensures that the construction phase adheres to timelines, budgets, and our high standards. We keep clients informed at every stage, making the journey from the initial concept to handing over the keys as seamless and enjoyable as possible.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='md:flex items-center p-6 justify-center'>
          <div 
          className='w-1/3 h-[430px] 2xl:h-[450px] mt-10 p-4 flex items-center justify-center mr-3'
          style={{
            borderWidth: '8px',
            borderStyle: 'solid',
            borderImage: 'linear-gradient(to right, #f6d365, #fda085) 1'
          }}
          >
            <h2 className='text-5xl 2xl:text-6xl text-white'>Incorporating Ideas<br /> From Top Architects<br /> All Over The World</h2>
          </div>
          <Cards />
        </div>
        <div>
          <Mission />
        </div>
        <div className='mt-3 p-6 bg-black '>
            <div className='md:grid grid-cols-4'>
              <div className='col-span-1 mb-3 md:mb-0'>
                  <div className='ml-7 mt-5 text-white'>
                    <h2 className='text-xl mb-3'>Our Team</h2>
                    <h2 className='text-4xl w-[80%]'>Pushing the boundaries of innovation</h2>
                    <p className='text-[16px] mt-6 w-[80%] opacity-25'>Our team consist of experts in every section of the construction industry, ensuring we make the best informed decision on every project</p>
                  </div>
              </div>
              <div className='col-span-3'>
                <PeopleSwiper />
              </div>
            </div>
        </div>   
        
      </div>

    </div>
  );
};

export default About;
