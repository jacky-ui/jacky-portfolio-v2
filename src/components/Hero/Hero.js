// import react, styles and components
import './Hero.scss';

// import assets
import avatarImage from '../../assets/images/avataaars.svg';
import codingBg from '../../assets/images/coding-background-v2.png';

function Hero() {
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