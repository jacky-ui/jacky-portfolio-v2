// import react, styles and components
import React, { useState } from 'react';
import './Hero.scss';

// import assets
import avatarImage from '../../assets/images/avataaars.svg';
import codingBg from '../../assets/images/coding-background-v2.png';

function Hero() {
    const [ currentTitle, nextCurrentTitle ] = useState('Front-End Developer');

    if(currentTitle === 'Front-End Developer') {
        setTimeout(() => {
            nextCurrentTitle('Full-Stack Developer')
        }, 5000);
    } else if(currentTitle === 'Full-Stack Developer') {
        setTimeout(() => {
            nextCurrentTitle('Front-End Developer')
        })
    }

    return(
        <div className='hero' id='home'>
            <h1 className='hero__text'>
                Jacky Du, C. Tech<br/> 
                {/*<span>{currentTitle}</span>*/}
                <span></span>
            </h1>
        </div>
    )
};

export default Hero;