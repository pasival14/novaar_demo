// import React from 'react';
import back from '../../assets/service.jpg'; 
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="sticky flex items-center justify-center h-[75vh] md:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.div 
            className="relative z-10 text-center text-white p-8"
            initial = {{ y: '100%' }}
            animate = {{ y: 0 }}
            transition = {{ duration: 0.5 }}
            >
                <div className="flex justify-center space-x-4 mb-8">
                    <button className="bg-transparent border border-white px-2 md:px-4 py-2 rounded text-sm">Letter from the CEO</button>
                    <button className="bg-transparent border border-white px-2 md:px-4 py-2 rounded text-sm">Our Next Chapter</button>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">What We Can<br />Do For You.</h1>
                <p className="text-lg mb-8">Curious about what we have to offer? Let us show you.</p>
                <button className="bg-orange-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-[16px]">Request a Consult</button>
            </motion.div>
        </div>
    );
}

export default HeroSection;
