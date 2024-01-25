import NavLinks from '../NavLinks/NavLinks';
import './NavBar.scss';

// import images
import navLogo from '../../assets/images/favicon-32x32.png';

// import constants
import { navContent } from '../../assets/constants/constants.js';

function NavBar() {
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
        </nav>
    )
};

export default NavBar;