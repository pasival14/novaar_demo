import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import SubscribeComponent from './SuscribeComponent';

const Footer = () => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { margin: "-100px 0px -100px 0px", once: true });
  const isInView2 = useInView(ref2, { margin: "-100px 0px -100px 0px", once: true });
  const isInView3 = useInView(ref3, { margin: "-100px 0px -100px 0px", once: true });
  const isInView4 = useInView(ref4, { margin: "-100px 0px -100px 0px", once: true });

  return (
    <div className='text-white w-full pt-8 md:pt-12 md:px-[15vh] md:py-12 bg-black'>
      <motion.div 
      className='w-full ml:text-[12px] grid grid-cols-2 gap-6 justify-items-center md:flex md:items-center md:justify-between'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      ref={ref1}
      >
        <div>
          <h2 className='opacity-50 text-[15px] ml:text-[11px] mb-1'>Projects</h2>
          <Link to="./project">
            <ul className=''>
              <li>Commercial</li>
              <li>Residential</li>
              <li>Interior</li>
              <li>Renovation</li>
              <li>Villa</li>
            </ul>
          </Link>
        </div>
        <div>
          <h2 className='opacity-50 text-[15px] ml:text-[11px] mb-1'>Our Services</h2>
          <Link to="./service">
            <ul>
              <li>Architecture</li>
              <li>Interior Design</li>
              <li>Construction</li>
              <li>Real Estate</li>
            </ul>
          </Link>
        </div>
        <div>
          <h2 className='opacity-50 text-[15px] ml:text-[11px] mb-1'>Company</h2>
          <Link to="./about">
            <ul>
              <li>About US</li>
              <li>The Team</li>
              <li>Events</li>
              <li>Locations</li>
            </ul>
          </Link>
        </div>
        <div>
          <h2 className='opacity-50 text-[15px] ml:text-[11px] mb-1'>Contact</h2>
          <Link to="./contact">
            <ul>
              <li>Linkedin</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Pinterest</li>
            </ul>
          </Link>
        </div>
      </motion.div>
      <motion.div 
      className='sub px-5 md:px-0 md:w-[40vw] ml:w-[30vw]'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      ref={ref2}
      >
        <SubscribeComponent />
      </motion.div>
      <motion.div 
      className='nov-container w-full flex items-center  justify-center'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      ref={ref3}
      >
        <img className='novlogo w-[45px] md:w-[12vh]' src={logo} alt="" />
        <div className='w-1 h-16 md:h-[16vh] bg-white mx-2 md:mx-10 2xl:mx-16'></div>
        <div className='flex items-center justify-center'>
          <h1 className='novtext text-[55px] md:text-[140px] ml:text-[70px] font-nocturne'>NOVAAR</h1>
        </div>
      </motion.div>
      <hr />
      <motion.p 
      className='text-[#ccc] text-[1.2rem] mt-3 ml:mt-3 text-center'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      ref={ref4}
      >&copy;N0VAAR 2024</motion.p>
    </div>
  );
}

export default Footer;
