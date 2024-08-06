// File path: components/Mision.jsx

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import disc from '../../assets/disc.png';
import Button from './Button';

const sentence = "To elevate human experience through innovative, collaborative, and socially responsible design.";

const Mision = () => {
    const controls = useAnimation();
    const missionRef = useRef(null);
    const [letterAnimationComplete, setLetterAnimationComplete] = useState(false);

    const letterAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05
            }
        })
    };

    const divAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.6
            }
        })
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start("visible");
                    } else {
                        controls.start("hidden");
                        setLetterAnimationComplete(false);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (missionRef.current) {
            observer.observe(missionRef.current);
        }

        return () => {
            if (missionRef.current) {
                observer.unobserve(missionRef.current);
            }
        };
    }, [controls]);

    return (
        <div ref={missionRef}>
            <div
                className='bg-cover bg-center w-full h-screen p-16 2xl:p-24 flex flex-col justify-between'
                style={{
                    backgroundImage: `url(${disc})`
                }}
            >
                <div className='w-full flex items-center justify-between'>
                    <p className='text-white'>Our Mission</p>
                    <Button prop='Contact Us' />
                </div>
                <div className='mission w-full flex items-center justify-center mt-4 2xl:mt-14'>
                    <motion.h1
                        className='text-white font-bold text-5xl 2xl:text-6xl leading-normal 2xl:leading-relaxed w-2/3 2xl:w-3/5 text-center font-nocturne'
                        initial="hidden"
                        animate={controls}
                        onAnimationComplete={() => setLetterAnimationComplete(true)}
                    >
                        {sentence.split("").map((char, index) => (
                            <motion.span key={index} custom={index} variants={letterAnimation}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>
                <div className='text-white grid grid-cols-3 gap-2'>
                    {letterAnimationComplete && (
                        <motion.div
                            className='mision1 text-lg'
                            initial="hidden"
                            animate={controls}
                            variants={divAnimation}
                            custom={1}
                        >
                            <h2>1. Innovate</h2>
                            <p className='pl-2 text-balance'>To craft architecture that embodies innovation, sustainability, and social responsibility.</p>
                        </motion.div>
                    )}
                    {letterAnimationComplete && (
                        <motion.div
                            className='mission2 text-lg text-balance'
                            initial="hidden"
                            animate={controls}
                            variants={divAnimation}
                            custom={2}
                        >
                            <h2>2. Anticipate challenges</h2>
                            <p className='pl-2'>To design spaces that not only meet the needs of today but also anticipate the challenges of tomorrow.</p>
                        </motion.div>
                    )}
                    {letterAnimationComplete && (
                        <motion.div
                            className='mission3 text-lg text-balance'
                            initial="hidden"
                            animate={controls}
                            variants={divAnimation}
                            custom={3}
                        >
                            <h2>3. Sustainable practices</h2>
                            <p className='pl-2'>We are dedicated to pioneering architectural excellence through sustainable practices and innovative design.</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Mision;
