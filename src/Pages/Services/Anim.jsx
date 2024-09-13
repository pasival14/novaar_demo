import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './service.css';
import anim from '../../assets/Aa1.png';

const Anim = () => {
    const [firstWidth, setFirstWidth] = useState('50%');
    const [secondWidth, setSecondWidth] = useState('50%');
    const [zIndexFirst, setZIndexFirst] = useState(40);
    const [zIndexSecond, setZIndexSecond] = useState(30);
    const [bgColor1, setBgColor1] = useState('transparent');
    const [bgColor2, setBgColor2] = useState('transparent');

    const handleHoverFirst = () => {
        setFirstWidth('65%');
        setSecondWidth('35%');
        setZIndexFirst(40);
        setZIndexSecond(30);
        setBgColor1('rgba(0, 0, 0, 0.5)');
        setBgColor2('transparent');
    };

    const handleHoverSecond = () => {
        setFirstWidth('35%');
        setSecondWidth('65%');
        setZIndexFirst(30);
        setZIndexSecond(40);
        setBgColor1('transparent');
        setBgColor2('rgba(0, 0, 0, 0.5)');
    };

    const handleHoverEnd = () => {
        setFirstWidth('50%');
        setSecondWidth('50%');
        setZIndexFirst(40);
        setZIndexSecond(30);
        setBgColor1('transparent');
        setBgColor2('transparent');
    };

    return (
        <div
            className="w-[1000px] 2xl:w-[75vw] h-[500px] 2xl:h-[60vh] relative bg-center bg-cover bg-no-repeat my-8 rounded-2xl"
            style={{
                backgroundImage: `url(${anim})`
            }}
        >
            <motion.div
                className="first bg-cover h-[500px] 2xl:h-[60vh] absolute border z-40 p-2  rounded-xl"
                style={{
                    width: firstWidth,
                    zIndex: zIndexFirst,
                    backgroundColor: bgColor1,
                    transition: 'background-color 0.5s ease-in-out'
                }}
                onMouseEnter={handleHoverFirst}
                onMouseLeave={handleHoverEnd}
                animate={{ width: firstWidth }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className='2xl:p-6'>
                        <div className="text-white">
                            <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full">DESIGN YOUR DREAMS</span>
                        </div>
                        <div className="text-white pt-2">
                            <h2 className="text-4xl font-bold mb-2">Architecture</h2>
                            <p className="mb-4">Imagine a space that speaks the language of elegance without saying a word, where every nook reflects a piece of you.</p>
                            <button className="flex items-center text-sm font-medium underline">
                                Discover <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div>
                    <div className='2xl:p-6'>
                        <div className="text-white">
                            <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full">ELEVATE YOUR SPACES</span>
                        </div>
                        <div className="text-white">
                            <h2 className="text-4xl font-bold mb-2">Interior Design</h2>
                            <p className="mb-4">We want every part of your area to match your taste and how you live. Our designs are modern, yet they stay stylish and comforting.</p>
                            <button className="flex items-center text-sm font-medium underline">
                                Discover <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="second bg-cover h-[500px] 2xl:h-[60vh] border p-2 rounded-xl absolute top-0 right-0"
                style={{
                    width: secondWidth,
                    zIndex: zIndexSecond,
                    backgroundColor: bgColor2,
                    transition: 'background-color 0.5s ease-in-out'
                }}
                onMouseEnter={handleHoverSecond}
                onMouseLeave={handleHoverEnd}
                animate={{ width: secondWidth }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                        <div className="text-white">
                            <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full">REALIZE YOUR DESIGN</span>
                        </div>
                        <div className="text-white pt-2">
                            <h2 className="text-4xl font-bold mb-2">Construction</h2>
                            <p className="mb-4">Our Construction Management service turns your detailed designs into reality smoothly and efficiently.</p>
                            <button className="flex items-center text-sm font-medium underline">
                                Discover <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="text-white">
                            <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full">UNLOCK YOUR POTENTIAL</span>
                        </div>
                        <div className="text-white pt-2">
                            <h2 className="text-4xl font-bold mb-2">Real Estate</h2>
                            <p className="mb-4">Whether buying or selling, our real estate services are here to make the process easy and smooth for you. </p>
                            <button className="flex items-center text-sm font-medium underline">
                                Discover <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Anim;
