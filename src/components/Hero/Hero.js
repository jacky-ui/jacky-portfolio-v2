// import react, styles and components
import './Hero.scss';

// import assets
import avatarImage from '../../assets/images/avataaars.svg';
import codingBg from '../../assets/images/coding-background-v2.png';

function Hero() {
    return(
        <section className='hero' id='home'>
            <h1 className='hero__text'>
                Jacky Du, C. Tech<br/> 
                {/*<span>{currentTitle}</span>*/}
                <span></span>
            </h1>
            <div className='hero__image'>
                <img 
                    src={avatarImage}
                    alt='Jacky Du Avatar'
                />
            </div>
            <div className='hero__bgImage'>
                <img 
                    src={codingBg}
                    alt=""
                />
            </div>
        </section>
    )
};

export default Hero;