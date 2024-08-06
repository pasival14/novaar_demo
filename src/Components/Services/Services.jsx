import React from 'react';
import  './services.css'
import Card from '../../UI/Card'
import { FaArrowRight } from "react-icons/fa";
// import Team from '../Team/Team';

const Services = () => {
  return (
    <div>
      <div className='services p-2 bg-gray-200'>
       <div className='card1'>
        <Card
        headerText='OCEAN WAVE'
        paragraghText='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet fuga nostrum deleniti ipsam mollitia, molestiae debitis'
        />
        <div className="card-flex">
          <span>
            <p>Residential</p>
            <p>Lagos</p>
          </span>
          <h1>Explore</h1>
        </div>
        
        </div>

        <div className='card2 my-4'>
        <Card
        headerText='PUZZLE TOWER'
        paragraghText='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet fuga nostrum deleniti ipsam mollitia, molestiae debitis'
        />
        <div className="card-flex">
          <span>
            <p>Commercial</p>
            <p>Berlin</p>
          </span>
          <h1>Explore</h1>
        </div>
        </div>

        <div className='card3'>
        <Card
        headerText='HONEY COMB'
        paragraghText='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet fuga nostrum deleniti ipsam mollitia, molestiae debitis'
        />
        <div className="card-flex">
          <span>
            <p>Commercial</p>
            <p>Berlin</p>
          </span>
          <h1>Explore</h1>
        </div>
        </div>

        <div className='card4 mt-4'>
        <Card
        headerText='YELLOW SUITES'
        paragraghText='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet fuga nostrum deleniti ipsam mollitia, molestiae debitis'
        />
        <div className="card-flex">
          <span>
            <p>Commercial</p>
            <p>Lagos</p>
          </span>
          <h1>Explore</h1>
        </div>
        </div>

        {/*ARCHITECTURE IN MOTION SECTION*/}
       <div className="motion">
        <div className="motion-container">
          <div className='motion-text'>
            <h1>Architecture in Motion</h1>
            <p>The concept of modern architecture zealously drives each project we undertake. Our approach is simple: to blend, form and function to maximize space, light, and the natural environment. Each design is a testament to our commitment to excellence, pushing the boundaries of modern architecture to explore new horizons. Our buildings are not just structures but landmarks that command attention and admiration.
            </p>
            <span className=''>
              <p>Our Service</p>
              <FaArrowRight/>
            </span>
          </div>
          <div className="motion-grid">
            <div className="motion-grid-row">
            <h1>200+</h1>
            <h2>PROPERTIES</h2>
            <p>Our portfolio showcases our capabilities and vision. From luxurious homes that offer an escape to tranquility to cutting-edge commercial spaces that foster creativity and productivity, each property is a display of what is possible when luxury meets innovation in modern architecture.</p>
            </div>

            <div className="motion-grid-row">
            <h1>300+</h1>
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
      </div>
      {/* <Team/> */}
    </div>
  )
}

export default Services
