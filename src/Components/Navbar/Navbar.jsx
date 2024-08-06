import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import {links} from '../../Data'
import { FaBarsStaggered } from "react-icons/fa6";
import {AiOutlineClose} from 'react-icons/ai'
import './navbar.css'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";



const Navbar = () => {
 const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <div>
      <nav>
        <div className="container nav_container">
          <Link to="/" className='logo'  onClick={() => setIsNavShowing(false)}>
            <img src={Logo} alt="nav Logo" />
          </Link>
          <ul className={`nav_links ${isNavShowing ? 'show_nav' :
           'hide_nav'}`}>
            {
                links.map(({name, path}, index) => {
                    return(
                        <li key={index}>
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' :
                         ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                        </li>
                    )
                })
            }
          </ul>

          <div className="socials">
          <FaInstagram />
          <FaXTwitter/>
          <FaFacebook/>
          </div>
        <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
           {
            isNavShowing? <AiOutlineClose/> :  <FaBarsStaggered/>
           }
        </button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
