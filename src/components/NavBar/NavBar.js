// imports from react and components
import React, { useState } from 'react';
import NavLinks from '../NavLinks/NavLinks';
import Hamburger from '../Hamburger/Hamburger.js';
import './NavBar.scss';

// import images
import navLogo from '../../assets/images/favicon-32x32.png';

// import constants
import { navContent } from '../../assets/constants/constants.js';

function NavBar() {
    const [ showMenu, setShowMenu ] = useState(false);
    // const [ closeMenu, setCloseMenu ] = useState(false); 

    const toggleShowMenu = () => setShowMenu(prevShowMenu => !prevShowMenu);

    return(
        <nav className='nav'>
            <div className='nav__link'>
                {navContent.map((content) => (
                    <NavLinks
                        key={content.key}
                        componentClass={content.componentClass}
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
            <div className='hamburger--button' role='navigation button' onClick={toggleShowMenu}>
                <div className={`${showMenu ? "hamburger--first" : "hamburger--close1"}`}></div>
                <div className={`${showMenu ? "hamburger--second" : "hamburger--close2"}`}></div>
                <div className={`${showMenu ? "hamburger--third" : "hamburger--close3"}`}></div>
            </div>
            <Hamburger showMenuList={showMenu} closeMenuToggle={toggleShowMenu}/>
        </nav>
    )
};

export default NavBar;