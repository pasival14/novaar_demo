import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import vid from './assets/01.mp4';
import Button from './Body/Button';

const Video = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const isInView1 = useInView(ref1, { margin: "-100px 0px -100px 0px", once: true });
    const isInView2 = useInView(ref2, { margin: "-100px 0px -100px 0px", once: true });

    return ( 
        <div className='w-full grid grid-cols-4'>
            <motion.div 
            className='col-span-1 bg-black py-12 px-20 -pr-[8px] text-white'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            ref={ref2}
            >
                <div className=' flex justify-end'>
                    <div className='w-12 h-12 border-2 rotate-45'></div>
                </div>
                <div className='w-full h-[50%] pb-8 flex flex-col items-center justify-end'>
                    <h2 className='text-4xl'>Architectural excellence</h2>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
                </div>
                <Link to="./service">
                    <Button />
                </Link>
            </motion.div>
            <motion.div 
            className="relative col-span-3 h-[40vh] md:h-[75vh] overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            ref={ref1}
            >
                <video
                    src={vid}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'>
                    <div className='relative w-full h-full'>
                        <div className='w-full text-white absolute bottom-8 left-0 px-8'>
                            <p className='opacity-40'>RMO</p>
                            <div className='w-full h-[2px] bg-white bg-opacity-40' />
                            <div className='grid grid-cols-5  mt-2 p-4 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg'>
                                <div className='col-span-2'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
                                </div>
                                <div className='col-span-3 grid grid-cols-3 justify-items-center'>
                                    <div>
                                        <p>Type</p>
                                        <p>Commercial</p>
                                    </div>
                                    <div>
                                        <p>Purpose</p>
                                        <p>Lounge/Night Club</p>
                                    </div>
                                    <div>
                                        <p>Location</p>
                                        <p>N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
     );
}
 
export default Video;