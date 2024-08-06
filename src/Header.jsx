import React, { useState, useEffect } from 'react';
import ink from '../src/assets/linkedin.svg';
import tweet from '../src/assets/social-media.svg';
import instagram from '../src/assets/instagram.svg';
import novaar from './assets/novaar.png';
import burgerIcon from './assets/burger.png';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className={`text-black font-bold fixed top-0 left-0 z-50 w-full ${visible ? 'transition-opacity duration-500 opacity-100' : 'transition-opacity duration-500 opacity-0 pointer-events-none'}`}>
            <div className='flex justify-between px-6 mt-[10px] md:mt-0 md:pt-0 md:px-8'>
                <div className='flex md:p-2'>
                    <Link to="./">
                        <h1 className='text-2xl font-thin pt-[10px] font-nocturne'>NOVAAR</h1>
                    </Link>
                </div>
                <div className='hidden md:flex m-3 mt-2 text-sm'>
                    <ul className='flex p-2 px-4 pt-3 text-md font-semibold'>
                        <li className={`hover:cursor-pointer ${location.pathname === '/' ? '' : ''}`}>
                            <Link to="./">Home</Link>
                        </li>
                        <li className={`px-12 hover:cursor-pointer ${location.pathname === '/about' ? 'text-[#5f604b]' : ''}`}>
                            <Link to="./about">About Us</Link>
                        </li>
                        <li className={`hover:cursor-pointer ${location.pathname === '/project' ? 'text-[#5f604b]' : ''}`}>
                            <Link to="./project">Projects</Link>
                        </li>
                        <li className={`px-12 hover:cursor-pointer ${location.pathname === '/service' ? 'text-[#5f604b]' : ''}`}>
                            <Link to="./service">Our Services</Link>
                        </li>
                        <li className={`hover:cursor-pointer ${location.pathname === '/contact' ? 'text-[#5f604b]' : ''}`}>
                            <Link to="./contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='hidden md:flex py-[10px]'>
                    <img className='h-[30px]' src={ink} alt="LinkedIn" />
                    <img className='h-[27px] px-[20px] pt-1' src={instagram} alt="Instagram" />
                    <img className='h-[30px]' src={tweet} alt="Twitter" />
                </div>
                <div className='flex z-50 md:hidden items-center'>
                    <img
                        src={burgerIcon}
                        alt="Menu"
                        className={`w-[40px] border-black rounded-lg border-solid border-2 cursor-pointer transform transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}
                        onClick={toggleMenu}
                    />
                </div>
            </div>
            <div className={`fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex flex-col items-center justify-center z-40 transition-all duration-700 transform ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <ul className='flex flex-col items-center text-white text-lg font-semibold'>
                    <li className={`hover:cursor-pointer py-2 ${location.pathname === '/' ? 'text-[#5f604b]' : ''}`}>
                        <Link to="./" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className={`hover:cursor-pointer py-2 ${location.pathname === '/about' ? 'text-[#5f604b]' : ''}`}>
                        <Link to="./about" onClick={handleLinkClick}>About Us</Link>
                    </li>
                    <li className={`hover:cursor-pointer py-2 ${location.pathname === '/project' ? 'text-[#5f604b]' : ''}`}>
                        <Link to="./project" onClick={handleLinkClick}>Projects</Link>
                    </li>
                    <li className={`hover:cursor-pointer py-2 ${location.pathname === '/service' ? 'text-[#5f604b]' : ''}`}>
                        <Link to="./service" onClick={handleLinkClick}>Our Services</Link>
                    </li>
                    <li className={`hover:cursor-pointer py-2 ${location.pathname === '/contact' ? 'text-[#5f604b]' : ''}`}>
                        <Link to="./contact" onClick={handleLinkClick}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
