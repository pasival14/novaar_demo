import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import final from '../../assets/final.jpg'
import linkedin from '../../assets/linkedin.svg'
import insta from '../../assets/instagram.svg'
import face from '../../assets/facebook.svg'
import x from '../../assets/twitter.svg'
import home from '../../assets/home.svg'
import call from '../../assets/caller.svg'
import mail from '../../assets/mail.svg'

import React from 'react'

const Contact = () => {

  const ref1 = useRef(null);

  const isInView1 = useInView(ref1, { margin: "-100px 0px -100px 0px", once: true });

  const phoneNumber = '+2348065797525';
  const email = 'contact@novaarng.com'

  return (
    <div>
      <div
      className='relative w-full h-screen bg-cover bg-center'
      style={{
        backgroundImage: `url(${final})`
      }}
      >
        <div className='h-full bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h2 className='text-3xl md:text-6xl text-white'>CONTACT US</h2>
          <ul className='flex items-center justify-center gap-2 mt-2'>
            <li>
              <img src={linkedin} className='w-7 md:w-10 h-7 md:h-10' alt="" />
            </li>
            <li>
              <img src={insta} className='w-6 md:w-8 h-6 md:h-8' alt="" />
            </li>
            <li>
              <img src={face} className='w-7 md:w-10 h-7 md:h-10' alt="" />
            </li>
            <li>
              <img src={x} className='w-7 md:w-10 h-7 md:h-10' alt="" />
            </li>
          </ul>
        </div>
      </div>
      <motion.div 
      className='bg-gray-200 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 py-12 md:py-48 px-4 md:px-36'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      ref={ref1}
      >
        <div className='flex flex-col justify-center items-center'>
          <img src={home} className='w-24 md:w-32 h-24 h-md:32' alt="" />
          <p className='text-lg text-center my-7'>You can visit our Lagos office during office hours for a more personalized experience and direct contact to one of our experts.</p>
          <p className='text-gray-600 text-lg'>No 3/5, Coker street, Maryland, Lagos</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={call} className='w-[100px] md:w-28 h-[100px] md:h-28' alt="" />
          <p className='text-lg text-center my-7'>For urgent enquiries, you can place a call to our support during office hours ( From 9 A.M to 5 P.M on weekdays only. )</p>
          <a
          href={`tel:${phoneNumber}`}
          className='text-lg text-center text-gray-600'
          > +234 8065737525</a>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={mail} className='w-w-24 md:w-32 h-24 h-md:32' alt="" />
          <p className='text-lg my-7 text-center'>You can leave a message for us via email  and we will get back to you as quickly as possible</p>
          <a href={`mailto:${email}`} className='text-lg text-center text-gray-600' > contact@novaarng,com </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
