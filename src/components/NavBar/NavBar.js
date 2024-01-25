import React, { useState } from 'react';
import NavLinks from '../NavLinks/NavLinks';
import './NavBar.scss';

// import images
import navLogo from '../../assets/images/favicon-32x32.png';

// import constants
import { navContent } from '../../assets/constants/constants.js';

function NavBar() {
    const [ showMenu, setShowMenu ] = useState(false);
    const [ closeMenu, setCloseMenu ] = useState(false); 

    return(
        <nav className='nav'>
            <div className='nav__link'>
                {navContent.map((content) => (
                    <NavLinks
                        key={content.content}
                        title={content.content}
                        link={content.link}
                        aria={content.arialabel}
                    />
                ))}
            </div>
            <div className='nav__image'>
                <img 
                    src={navLogo}
                    alt='site logo'
                />
            </div>
            <div className='hamburger--button' role='navigation button' onClick={() => setShowMenu(true)}>
            <div className={`${showMenu ? "hamburger--first" : "hamburger--close1"}`}></div>
            <div className={`${showMenu ? "hamburger--second" : "hamburger--close2"}`}></div>
            <div className={`${showMenu ? "hamburger--third" : "hamburger--close3"}`}></div>
        </div>
        </nav>
    )
};

export default NavBar;