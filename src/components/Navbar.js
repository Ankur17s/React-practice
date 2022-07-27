import React, { useState } from 'react'
import "../Styles/Navbar.css"

function Navbar() {

    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");

    const navToggle = () => {
        active === "nav_menu" ? setActive("nav_menu nav__active") : setActive("nav_menu");

        // toggleIcon
        toggleIcon === "nav_toggler"
            ? setToggleIcon("nav_toggler toggle")
            : setToggleIcon("nav_toggler");
    }

    return (
        <div className='nav'>

            <div className='nav_brand_img'>
                <img src='images/pepcoding_logo2.png' />
            </div>

            <ul className={active}>
                <li className='nav_item'><a href='#' className='nav_link'>Trainings</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>Guaranteed Job Program</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>NADOS</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>Resources</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>Login</a></li>
            </ul>

            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
    )
}

export default Navbar;