import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './slideshow.css';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../src/assets/N-VION/01.png';
import image11 from '../src/assets/THE THEME/01.png';
import image2 from '../src/assets/Aa1.png';
import image3 from '../src/assets/EDGE/R1.png';
import image4 from '../src/assets/LITH/05.png';
import image5 from '../src/assets/INTERIOR/H1.png';
import image6 from '../src/assets/CRYSTALINE DAY/02.png';
import image7 from '../src/assets/BEACH/A1.png';
import image8 from '../src/assets/INTERIOR/E1.png';
import image9 from '../src/assets/E3.png';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    { image: image1, title: "N-VION", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image2, title: "APHRODITE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image3, title: "EDGE RESIDENCE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image4, title: "LITH RESIDENCE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image5, title: "Building E", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image6, title: "CRYSTALINE DAY", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image7, title: "BEACH HOUSE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image8, title: "Building H", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image9, title: "RMO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image11, title: "Building J", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." }
];

const Slideshow = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);  // Track the current slide index

    const onAutoplayTimeLeft = (swiper, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex); 
    };


    return (
        <div className="app w-full h-[85vh] md:h-screen overflow-hidden relative text-white">
            <Swiper
                spaceBetween={0}
                effect={'fade'}
                centeredSlides={true}
                speed={1000}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                onSlideChange={handleSlideChange}
                className="mySwiper"
            >
                <AnimatePresence>
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[85vh] md:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                                <div className="relative h-full w-full bg-black bg-opacity-20">
                                    <motion.div 
                                        key={currentSlide} 
                                        className='absolute bottom-16 left-4 md:bottom-56 ml:bottom-40 md:left-7 ml:left-10'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeInOut",
                                            delay: 1.5
                                        }}
                                    >
                                        <div className="text-white">
                                            <h2 className="text-xl text-start md:text-4xl ml:text-2xl md:font-bold">{slide.title}</h2>
                                            <h3 className="w-[50vw] md:w-[40%] text-[16px] md:text-lg ml:text-[16px] pt-2 md:font-bold text-start">{slide.description}</h3>
                                        </div>
                                        <div className="px-1 mt-3">
                                            <Link to="./project">
                                                <a className="mr-4 text-[14px] md:text-[16px] border hover:bg-gray-500 h-[40px] w-[90px] p-[8px] rounded-xl font-bold flex items-center justify-center transition duration-300">Explore</a>
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </AnimatePresence>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Slideshow;
