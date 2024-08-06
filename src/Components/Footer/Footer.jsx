import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import SubscribeComponent from './SuscribeComponent';

const Footer = () => {
  return (
    <div className='text-white w-full h-screen p-[15vh] bg-black'>
      <div className='w-full ml:text-[12px] flex items-center justify-between'>
        <div>
          <h2 className='opacity-50 text-[15px] ml:text-[11px] mb-1'>Projects</h2>
          <ul className=''>
            <li>Commercial</li>
            <li>Residential</li>
            <li>Interior</li>
            <li>Renovation</li>
            <li>Villa</li>
          </ul>
        </div>
        <div>
          <h2 className='opacity-50 text-[15px] ml:text-[11px] mb-1'>Our Services</h2>
          <ul>
            <li>Architecture</li>
            <li>Interior Design</li>
            <li>Construction Management</li>
            <li>Real Estate</li>
          </ul>
        </div>
        <div>
          <h2 className='opacity-50 text-[15px] ml:text-[11px] mb-1'>Company</h2>
          <ul>
            <li>About US</li>
            <li>The Team</li>
            <li>Events</li>
            <li>Locations</li>
          </ul>
        </div>
        <div>
          <h2 className='opacity-50 text-[15px] ml:text-[11px] mb-1'>Contact</h2>
          <ul>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>
      <div className='sub w-[40vw] ml:w-[30vw]'>
        <SubscribeComponent />
      </div>
      <div className='nov-container w-full flex items-center  justify-center'>
        <img className='novlogo md:h-[13vh]' src={logo} alt="" />
        <div className='w-1 md:h-[16vh] bg-white md:mx-10 2xl:mx-16'></div>
        <div className='flex items-center justify-center'>
          <h1 className='novtext ml:text-[70px] font-nocturne'>NOVAAR</h1>
        </div>
      </div>
      <hr />
      <p className='text-[#ccc] text-[1.2rem] mt-3 ml:mt-3 text-center'>&copy;N0VAAR 2024</p>
    </div>
  );
}

export default Footer;
