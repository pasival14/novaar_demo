import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './slideshow.css';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../src/assets/Aa1.bmp';
import image2 from '../src/assets/A11.bmp';
import image3 from '../src/assets/S1.bmp';
import image4 from '../src/assets/all.bmp';
import image5 from '../src/assets/G3.bmp';
import image6 from '../src/assets/02.bmp';
import image7 from '../src/assets/G9.bmp';
import image8 from '../src/assets/G7.bmp';
import image9 from '../src/assets/E3.bmp';

const slides = [
    { image: image1, title: "Building A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image2, title: "Building B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image3, title: "Building C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image4, title: "Building D", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image5, title: "Building E", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image6, title: "Building F", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image7, title: "Building G", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image8, title: "Building H", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." },
    { image: image9, title: "Building I", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet." }
];

const Slideshow = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (swiper, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className="app w-full h-screen overflow-hidden relative text-white">
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
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="absolute inset-0 flex p-4 pt-[400px] xl:pt-[500px] md:px-16 justify-between bg-black bg-opacity-20">
                                <div className="text-white">
                                    <h2 className="text-2xl w-[50%] md:w-[35%] md:text-4xl font-bold">{slide.title}</h2>
                                    <h3 className="md:w-[40%] w-[75%] pt-2 font-bold">{slide.description}</h3>
                                </div>
                                <div className="mt-4">
                                    <a href="/#" className="mr-4 border mt-12 md:mt-16 hover:bg-gray-500 h-[40px] w-[72px] p-[8px] rounded-xl font-bold flex items-center justify-center transition duration-300">Explore</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
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
