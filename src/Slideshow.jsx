import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './slideshow.css';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../src/assets/01.png';
import image11 from '../src/assets/THE THEME/01.png';
import image2 from '../src/assets/Aa1.png';
import image3 from '../src/assets/EDGE/R1.png';
import image4 from '../src/assets/LITH/05.png';
import image5 from '../src/assets/INTERIOR/H1.png';
import image6 from '../src/assets/02.png';
import image7 from '../src/assets/BEACH/A1.png';
import image8 from '../src/assets/INTERIOR/G4.png';
import image9 from '../src/assets/E3.png';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    { image: image1, title: "N-VION", description: "A stunning blend of glass and steel, redefining urban sophistication with sweeping city views." },
    { image: image2, title: "APHRODITE", description: "A minimalist sanctuary, where tranquility meets nature amidst clean lines and open spaces." },
    { image: image3, title: "EDGE RESIDENCE", description: "A landmark building that commands attention, with a unique silhouette and innovative design." },
    { image: image4, title: "LITH RESIDENCE", description: "A cutting-edge structure that challenges conventional design, with dynamic shapes and bold materials." },
    { image: image5, title: "BOARD ROOM", description: "A harmonious interior blending comfort, style, and functionality to create a welcoming, dynamic environment." },
    { image: image6, title: "CRYSTALINE DAY", description: "A bold statement of balance and proportion, combining geometric shapes and harmonious design elements." },
    { image: image7, title: "BEACH HOUSE", description: "A beachfront residence that embraces the ocean, with expansive windows and natural elements." },
    { image: image8, title: "RMO-Cafe", description: "An elegant setting with thoughtful design elements that invite relaxation and conversation in a cozy atmosphere." },
    { image: image9, title: "RMO", description: "An architectural masterpiece with an avant-garde facade, offering unparalleled luxury and style." },
    { image: image11, title: "THE THEME", description: "An elegant homage to classical architecture, seamlessly integrating historical charm with modern amenities." }
];

const Slideshow = () => {
    const swiperRef = useRef(null);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const onAutoplayTimeLeft = (swiper, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex); 
    };

    const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className="app w-full h-[85vh] md:h-screen overflow-hidden relative text-white">
            <Swiper
                ref={swiperRef}
                spaceBetween={0}
                effect={'fade'}
                centeredSlides={true}
                speed={1000}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
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
                                                <a className="mr-4 text-[14px] md:text-[16px] border hover:bg-black hover:bg-opacity-50 h-[40px] w-[90px] p-[8px] rounded-xl font-bold flex items-center justify-center transition duration-300">Explore</a>
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
            
            <div className="custom-navigation-buttons absolute right-6 bottom-32 flex flex-col items-center z-20">
                <button onClick={handlePrevSlide} className="custom-button mb-2 p-2 text-black shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-[2px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <button onClick={handleNextSlide} className="custom-button p-2 text-black shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-[2px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </button>
            </div>
        </div>
    );
};

export default Slideshow;
