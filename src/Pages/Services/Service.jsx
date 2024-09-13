import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './service.css';
import { MdArrowOutward } from "react-icons/md";
import image1 from '../../assets/A4.bmp'
import image2 from '../../assets/6.bmp'
import image3 from '../../assets/inter.bmp'
import image4 from '../../assets/G7.bmp'
import image5 from '../../assets/P1.bmp'
import aphro from '../../assets/EDGE/R1.png'
import aint from '../../assets/EDGE/R3.png'
import aint2 from '../../assets/EDGE/R5.png'
import nv from '../../assets/N-VION/01.png'
import anim2 from '../../assets/2nd.png';
import anim from '../../assets/1st.png';
import HeroSection from './HeroSection';
import Anim from './Anim';
import Dashboard from './Dashboard';
import Real from './Real';
import Construction from './Construction';
import Video from '../../Video';


const Service = () => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  
  const isInView1 = useInView(ref1, { margin: "-100px 0px -100px 0px", once: true });
  const isInView2 = useInView(ref2, { margin: "-100px 0px -100px 0px", once: true });
  const isInView3 = useInView(ref3, { margin: "-100px 0px -100px 0px", once: true });
  const isInView4 = useInView(ref4, { margin: "-100px 0px -100px 0px", once: true });
  const isInView5 = useInView(ref5, { margin: "-100px 0px -100px 0px", once: true });
  const isInView6 = useInView(ref6, { margin: "-100px 0px -100px 0px", once: true });
  const isInView7 = useInView(ref7, { margin: "-100px 0px -100px 0px", once: true });
  const isInView8 = useInView(ref8, { margin: "-100px 0px -100px 0px", once: true });
  const isInView9 = useInView(ref9, { margin: "-100px 0px -100px 0px", once: true });

    return ( 
        <div className=" bg-gray-800 text-white">
            <div>
                <HeroSection />
            </div>
            <motion.div 
            className='w-full flex items-center justify-center align-middle pt-16'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            ref={ref1}
            >
                <h1 className='text-2xl md:text-4xl'>Our Services</h1>
            </motion.div>
            <motion.div 
            className='hidden w-full md:flex items-center justify-center align-middle space-x-4'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            ref={ref2}
            >
                <Anim />
            </motion.div>
            <motion.div 
            className='md:hidden mt-8'
            animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            ref={ref3}
            >
                <div className='overflow-x-hidden relative'>
                    <img src={anim} className='w-full h-[47vh] object-cover object-center' alt="" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between bg-black bg-opacity-50">
                        <div className='2xl:p-6'>
                            <div className="text-white">
                                <span className="bg-white text-gray-800 text-[10px] px-1 py-1 rounded-full">DESIGN YOUR DREAMS</span>
                            </div>
                            <div className="text-white pt-1">
                                <h2 className="text-xl font-bold mb-1">Architecture</h2>
                                <p className="mb-1 text-[14px]">Imagine a space that speaks the language of elegance without saying a word, where every nook reflects a piece of you.</p>
                                <button className="flex items-center text-sm font-medium underline">
                                    Discover <span className="ml-2">→</span>
                                </button>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className="text-white">
                                <span className="bg-white text-gray-800 text-[10px] px-2 py-1 rounded-full">ELEVATE YOUR SPACES</span>
                            </div>
                            <div className="text-white">
                                <h2 className="text-xl font-bold mb-2">Interior Design</h2>
                                <p className="mb-1 text-[14px]">We want every part of your area to match your taste and how you live. Our designs are modern, yet they stay stylish and comforting.</p>
                                <button className="flex items-center text-sm font-medium underline">
                                    Discover <span className="ml-2">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-1 relative'>
                    <img src={anim2} className='w-full h-[47vh] object-cover object-center' alt="" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between bg-black bg-opacity-50">
                        <div className='relative flex flex-col items-end'>
                            <div className="text-white">
                                <span className="bg-white text-gray-800 text-[10px] px-2 py-1 rounded-full ">REALIZE YOUR DESIGN</span>
                            </div>
                            <div className="text-white pt-1 flex flex-col items-end">
                                <h2 className="text-xl font-bold mb-1">Construction</h2>
                                <p className="mb-1 text-[14px] text-end">Our Construction Management service turns your detailed designs into reality smoothly and efficiently.</p>
                                <button className="flex items-center text-sm font-medium underline">
                                    Discover <span className="ml-2">→</span>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <div className="text-white">
                                <span className="bg-white text-gray-800 text-[10px] px-2 py-1 rounded-full">UNLOCK YOUR POTENTIAL</span>
                            </div>
                            <div className="text-white pt-1 flex flex-col items-end">
                                <h2 className="text-xl font-bold mb-1">Real Estate</h2>
                                <p className="mb-1 text-[14px] text-end">Whether buying or selling, our real estate services are here to make the process easy and smooth for you. </p>
                                <button className="flex items-center text-sm font-medium underline">
                                    Discover <span className="ml-2">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div 
            className="md:mt-12"
            animate={{ opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            ref={ref4}
            >
                <div className="pt-6 md:p-16 md:px-48 bg-white md:grid grid-cols-5">
                    <div className="md:text-center col-span-1 px-4">
                        <h1 className="font-bold text-lg md:text-[16px] text-gray-800">How Novaar Works</h1>
                    </div>
                    <div className='col-span-4'>
                        <p className="px-4 md:text-2xl font-bold text-gray-600">
                        At Novaar, your home or workspace should reflect your aspirations, achievements, and vision for the future. This philosophy is at the heart of everything we do, from our meticulously designed structures to our personalized client services.                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex p-4">
                                <div className='h-[110%] ml:h-[100%] w-[2px] bg-black' />
                                <div className='flex flex-col p-3'>
                                    <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5f604b] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    1
                                    </div>
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Initial Consultation</h2>
                                    <p className="text-gray-600">
                                    Our team takes the time to understand your vision, needs, and goals, ensuring a clear foundation for your project.                                    </p>
                                </div>
                            </div>
                            <div className="flex p-4">
                                <div className='h-[110%] ml:h-[100%] w-[2px] bg-black' />
                                <div className='flex flex-col p-3'>
                                    <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5f604b] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    2
                                    </div>
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Scheduling and Sessions</h2>
                                    <p className="text-gray-600">
                                    Our scheduling and sessions are designed to accommodate your timeline, providing structured yet flexible planning meetings to keep the project on track.                                    </p>
                                </div>
                            </div>
                            <div className="flex p-4">
                                <div className='h-[110%] ml:h-[100%] w-[2px] bg-black' />
                                <div className='flex flex-col p-3'>
                                    <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5f604b] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    3
                                    </div>
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Tailored Design</h2>
                                    <p className="text-gray-600">
                                    Our tailored design approach ensures that every detail of your project is customized to reflect your unique style and functional requirements, creating spaces that inspire and innovate.                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className="mt-16 px-4">
                            <button className="px-6 py-3 bg-[#5f604b] text-white font-semibold rounded-lg shadow-md hover:bg-[#c9beab] transition duration-300">
                                Start your Consultation →
                            </button>
                            <div className="mt-4 text-gray-600 pb-6 md:pb-0">
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
            </motion.div>
            <motion.div
                animate={{ opacity: isInView5 ? 1 : 0, y: isInView5 ? 0 : 50 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                ref={ref5}
            >
                <div className='md:grid grid-cols-2 px-4 md:px-24 bg-gray-200 text-black'>
                    <div className='md:my-36 py-12 md:py-8'>
                        <h1 className='text-2xl md:text-6xl mb-2 md:mb-4'>Architecture</h1>
                        <h2 className='text-lg md:text-xl mt-5 md:mt-8 font-bold'>Brand alignment and image</h2>
                        <p className='md:w-[70%] text-[16px] md:text-lg'>A luxurious building must reflect the client's brand identity while also ensuring the design elements align with the core values and image the client wants to project.</p>
                        <h2 className='text-lg md:text-xl mt-8 font-bold'>Sustainability and technology</h2>
                        <p className='md:w-[70%] text-[16px] md:text-lg'>Incorporating sustainable practices and advanced technologies to appeal to a modern, environmentally conscious clientele.</p>
                        <button className='mt-8 p-2 px-5 text-white bg-[#5f604b] rounded-full'>Projects</button>
                    </div>
                    <div className='hidden md:block w-full h-full px-12 py-10'>
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
            </motion.div>
            <motion.div 
            className='hidden relative w-full h-[75vh] md:h-screen md:flex flex-col gap-1 bg-center md:pl-16 ml:pl-28 bg-cover'
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=600')"
            }}
            animate={{ opacity: isInView6 ? 1 : 0, y: isInView6 ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            ref={ref6}
            >
                <div className=' absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg'/>
                <h2 className='z-40 my-5 md:my-16 ml:my-12 md: text-xl md:text-3xl ml:text-xl flex items-center justify-center'>Featured projects</h2>
                <div className='w-full h-fit z-30 flex overflow-hidden relative'>
                    <div className='first md:w-[55vw] ml:w-[50vw] h-full md:flex flex-col gap-1'>
                        <div className='w-full md:grid grid-cols-4 gap-1'>
                            <div className='col-span-3 md:h-[45vh] bg-cover bg-center border'
                                style={{
                                    backgroundImage: `url(${aphro})`
                                }}
                            ></div>
                            <div className='col-span-1 mt-1 grid grid-cols-2 md:flex flex-col gap-1'>
                                <div className='relative w-full h-64 md:h-1/2 border bg-cover bg-center'
                                style={{
                                    backgroundImage: `url(${aint})`
                                }}
                                >
                                    <div className='absolute top-0 left-0 bg-black w-full h-full bg-opacity-25'/>
                                    <div className='absolute bottom-3 left-2'>
                                        <h2 className='text-lg md:text-2xl ml:text-lg text-balance'>LUXURY AT A GLANCE</h2>
                                    </div>
                                </div>
                                <div className='w-full md:h-1/2 border p-1 bg-black backdrop-filter backdrop-blur-lg bg-opacity-70'>
                                    <div className='w-full h-3/5 bg-cover bg-bottom rounded-md'
                                    style={{
                                        backgroundImage: `url(${aint2})`
                                    }}
                                    />
                                    <h2 className='text-[15px] ml:text-[12px] m-2'>Reflecting each and every of the client's desires and dream. </h2>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-1'>
                            <div className='col-span-1 h-[10vh] border flex items-center justify-center'>
                                <h2 className='text-3xl ml:text-xl'>Edge <br />Residence</h2>
                            </div>
                            <div className='col-span-1 h-[10vh] border p-1 px-2 bg-black bg-opacity-50'>
                                <p className='text-[18px] ml:text-[12px] font-bold opacity-45'>Amenities</p>
                                <p className='ml:text-[10px]'>Zaha Hadid Bathroom, Kohler Kitchen, Swimiing Pool.</p>
                            </div>
                            <div className='col-span-1 h-[10vh] border flex items-center justify-center p-2 bg-black bg-opacity-50'>
                                <p className='text-[16px] ml:text-[11px]'>Pushing the boundaries of innovation and exceeding client's expectations.</p>
                            </div>
                            <div className='col-span-1 h-[10vh] border'>
                                <div className='h-full text-xl ml:text-lg flex items-center justify-center'>
                                    <h2>EXPLORE</h2>
                                    <div>
                                        <MdArrowOutward />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden second w-[55vw] ml:w-[50vw] h-full md:flex flex-col gap-1 absolute top-0 left-[50px] transform translate-x-full'>
                        <div className='w-full h-[50vh] grid grid-cols-4 gap-1'>
                            <div className='col-span-3 h-full bg-cover bg-center border'
                                style={{
                                    backgroundImage: `url(${nv})`
                                }}
                            ></div>
                            <div className='col-span-1 flex flex-col gap-1'>
                                <div className='w-full h-1/2 border'></div>
                                <div className='w-full h-1/2 border'></div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-1'>
                            <div className='col-span-1 h-[10vh] border flex items-center justify-center'>
                                <h2 className='text-3xl ml:text-xl'>N-VION</h2>
                            </div>
                            <div className='col-span-1 h-[10vh] border p-1 px-2 bg-black bg-opacity-50'>
                                <p className='text-[18px] ml:text-[12px] font-bold opacity-45'>Amenities</p>
                                <p className='ml:text-[10px]'>Zaha Hadid Bathroom, Kohler Kitchen, Swimiing Pool.</p>
                            </div>
                            <div className='col-span-1 h-[10vh] border flex items-center justify-center p-2 bg-black bg-opacity-50'>
                                <p className='text-[16px] ml:text-[11px]'>Redefining luxury through innovation and technology</p>
                            </div>
                            <div className='col-span-1 h-[10vh] border'></div>
                        </div>
                    </div>
                </div>
                <div
                    className='hidden md:block absolute h-full top-0 left-0 z-40 w-full '
                    style={{
                        background: 'linear-gradient(to left, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0) 20%)'
                    }}
                />
            </motion.div>

            <motion.div 
            className='w-full h-full md:h-screen relative flex flex-col items-center justify-centert bg-cover bg-center'
            style={{
                backgroundImage: `url(${image4})`
            }}
            animate={{ opacity: isInView7 ? 1 : 0, y: isInView7 ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            ref={ref7}
            >
                <div className='absolute top-0 right-0 w-full h-full md:h-screen bg-black bg-opacity-40 z-20' />
                <div className='absolute z-30 top-[30px] flex flex-col items-center justify-center'>
                    <h1 className='text-[16px] md:text-lg ml:text-[16px]'>The NOVAAR differnce</h1>
                    <h2 className='text-2xl md:text-4xl ml:text-2xl'>Creating Spaces That Tells</h2>
                    <h2 className='text-2xl md:text-4xl ml:text-2xl'>Your Story</h2>
                </div>
                <div className='z-30 my-32 md:my-0 ml:mt-14 flex items-center justify-center w-full h-fit md:h-screen'>
                    <div className='w-[400px] ml:w-[320px]'>
                        <div className='md:h-[180px] ml:h-[130px] flex flex-col border justify-center items-center w-full rounded-xl bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg'>
                            <h2 className='text-3xl md:text-5xl ml:text-3xl text-center'>Interior Design</h2>
                            <p className='my-2 text-lg ml:text-[16px]'>Luxury that is unique to you.</p>
                        </div>
                        <div className='w-full h-[200px] md:h-[380px] ml:h-[300px] mt-2 border rounded-lg bg-center bg-cover' 
                        style={{
                            backgroundImage: `url(${image3})`
                        }}
                        />
                    </div>
                    <div className='bg-black md:w-[700px] ml:w-[550px] md:h-[568px] ml:h-[438px] ml-2 border relative bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-lg'>
                        <div className='md:w-[60%] w-[55vw] h-[40vh]  md:h-[80%] m-2 bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${image5})`
                        }}
                        />
                        <div className='md:w-[70%] absolute bottom-0 right-0 p-4 border bg-black bg-opacity-50 m-3 rounded-lg backdrop-filter backdrop-blur-lg'>
                            <h1 className='text-6xl ml:text-4xl leading-none'>"</h1>
                            <h2>"Our approach to interior design is holistic, considering every detail from furniture and lighting to textures and colors, to create a cohesive and harmonious space."</h2>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
            animate={{ opacity: isInView8 ? 1 : 0, y: isInView8 ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            ref={ref8}
            >
                <Construction />
            </motion.div>
            <motion.div
            animate={{ opacity: isInView8 ? 1 : 0, y: isInView8 ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            ref={ref9}
            >
                <Real />
            </motion.div>
            {/* <div className=''>
                <Dashboard />
            </div> */}
            <div>
                <Video />
            </div>
        </div>
    );
}
 
export default Service;
