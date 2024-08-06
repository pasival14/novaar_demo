import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './service.css';
import image1 from '../../assets/A4.bmp'
import image2 from '../../assets/6.bmp'
import image3 from '../../assets/inter.bmp'
import image4 from '../../assets/G7.bmp'
import image5 from '../../assets/P1.bmp'
import aphro from '../../assets/APHRODITE/5.bmp'
import HeroSection from './HeroSection';
import Anim from './Anim';
import Dashboard from './Dashboard';


const Service = () => {

    return ( 
        <div className=" bg-gray-800 text-white">
            <HeroSection />
            <div className='w-full flex items-center justify-center align-middle pt-16'>
                <h1 className='text-4xl'>Our Services</h1>
            </div>
            <div className='w-full flex items-center justify-center align-middle space-x-4'>
                <Anim />
            </div>
            <div className="mt-12">
                <div className=" p-16 px-48 bg-white grid grid-cols-5">
                    <div className="text-center col-span-1">
                        <h1 className="text-[16px] text-gray-800">How Novaar Works</h1>
                    </div>
                    <div className='col-span-4'>
                        <p className="px-4 text-2xl font-bold text-gray-600">
                        At Novaar, your home or workspace should reflect your aspirations, achievements, and vision for the future. This philosophy is at the heart of everything we do, from our meticulously designed structures to our personalized client services.                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex p-4">
                                <div className='h-[110%] ml:h-[100%] w-[2px] bg-black' />
                                <div className='flex flex-col p-3'>
                                    <div className="w-12 h-12 bg-green-950 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    1
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Initial Consultation</h2>
                                    <p className="text-gray-600">
                                    Our team takes the time to understand your vision, needs, and goals, ensuring a clear foundation for your project.                                    </p>
                                </div>
                            </div>
                            <div className="flex p-4">
                                <div className='h-[110%] ml:h-[100%] w-[2px] bg-black' />
                                <div className='flex flex-col p-3'>
                                    <div className="w-12 h-12 bg-green-950 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    2
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Scheduling and Sessions</h2>
                                    <p className="text-gray-600">
                                    Our scheduling and sessions are designed to accommodate your timeline, providing structured yet flexible planning meetings to keep the project on track.                                    </p>
                                </div>
                            </div>
                            <div className="flex p-4">
                                <div className='h-[110%] ml:h-[100%] w-[2px] bg-black' />
                                <div className='flex flex-col p-3'>
                                    <div className="w-12 h-12 bg-green-950 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    3
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Tailored Design</h2>
                                    <p className="text-gray-600">
                                    Our tailored design approach ensures that every detail of your project is customized to reflect your unique style and functional requirements, creating spaces that inspire and innovate.                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className="mt-16 px-4">
                            <button className="px-6 py-3 bg-green-950 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                                Start your Consultation →
                            </button>
                            <div className="mt-4 text-gray-600">
                                <span className="flex items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.286a1 1 0 00.95.69h5.29c.969 0 1.371 1.24.588 1.81l-4.285 3.11a1 1 0 00-.364 1.118l1.716 5.286c.3.921-.755 1.688-1.54 1.118L10 15.347l-4.285 3.11c-.784.57-1.838-.197-1.539-1.118l1.716-5.286a1 1 0 00-.364-1.118l-4.285-3.11c-.783-.57-.381-1.81.588-1.81h5.29a1 1 0 00.95-.69l1.716-5.286z" />
                                </svg>
                                100% Customer satisfaction
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-2 px-24 bg-gray-200 text-black'>
                    <div className='my-36'>
                        <h1 className='text-6xl mb-4'>Architecture</h1>
                        <h2 className='text-xl mt-8 font-bold'>Brand alignment and image</h2>
                        <p className='w-[70%] text-lg'>A luxurious building must reflect the client's brand identity while also ensuring the design elements align with the core values and image the client wants to project.</p>
                        <h2 className='text-xl mt-8 font-bold'>Sustainability and technology</h2>
                        <p className='w-[70%] text-lg'>Incorporating sustainable practices and advanced technologies to appeal to a modern, environmentally conscious clientele.</p>
                        <button className='mt-8 p-2 px-5 text-white bg-green-950 rounded-full'>Projects</button>
                    </div>
                    <div className='w-full h-full px-12 py-10'>
                        <div className='relative bg-gray-300 rounded-xl w-full h-full'>
                            <div 
                            className='w-[60%] h-[70%] m-2 absolute bg-cover bg-center  top-1 left-1  rounded-lg z-40 overflow-hidden'
                            style={{
                                backgroundImage: `url(${image1})`
                            }}
                            />
                            <div  
                            className='w-[55%] h-[55%] m-2 bg-cover bg-center absolute bottom-1 right-1  rounded-lg z-30 overflow-hidden'
                            style={{
                                backgroundImage: `url(${image2})`
                            }}
                            >
                                {/* <img src={image2} alt="" className='w-[55%] h-[55%] object-cover p-3 z-30 absolute bottom-1 right-1' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white text-black p-6'>
                <div>
                    <h2 className='text-3xl pt-3'>Featured Project</h2>
                    <h1 className='t-img text-6xl flex justify-center items-center my-5 font-bold  '>APHRODITE</h1>
                </div>
                <div className='w-full h-[2px] bg-black' />
                <div className='flex'>
                    <div className='mt-3 w-1/2'>
                        <div className='w-full'>
                            <img src={aphro} alt="" className='object-cover' />
                        </div>
                    </div>
                    <div className='min-h-fit mx-5 w-[1px] bg-black' />
                </div>
            </div>
            <div 
            className='w-full h-screen relative flex flex-col items-center justify-centert bg-cover bg-center'
            style={{
                backgroundImage: `url(${image4})`
            }}
            >
                <div className='absolute top-0 right-0 w-full h-screen bg-black bg-opacity-40 z-20' />
                <div className='absolute z-30 top-[30px] flex flex-col items-center justify-center'>
                    <h1 className='text-lg'>The NOVAAR differnce</h1>
                    <h2 className='text-4xl'>Creating Spaces That Tells</h2>
                    <h2 className='text-4xl'>Your Story</h2>
                </div>
                <div className='z-30 flex items-center justify-center w-full h-screen'>
                    <div className='w-[400px] '>
                        <div className='h-[180px] flex flex-col border justify-center items-center w-full rounded-xl bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg'>
                            <h2 className='text-5xl'>Interior Design</h2>
                            <p className='my-2 text-lg'>Luxury that is unique to you.</p>
                        </div>
                        <div className='w-full h-[380px] mt-2 border rounded-lg bg-center bg-cover' 
                        style={{
                            backgroundImage: `url(${image3})`
                        }}
                        />
                    </div>
                    <div className='bg-black w-[700px] h-[568px] ml-2 border relative bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-lg'>
                        <div className='w-[60%] h-[80%] m-2 bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${image5})`
                        }}
                        />
                        <div className='w-[70%] absolute bottom-0 right-0 p-4 border bg-black bg-opacity-50 m-3 rounded-lg backdrop-filter backdrop-blur-lg'>
                            <h1 className='text-6xl leading-none'>"</h1>
                            <h2>"Our approach to interior design is holistic, considering every detail from furniture and lighting to textures and colors, to create a cohesive and harmonious space."</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Dashboard />
            </div>
        </div>
    );
}
 
export default Service;
