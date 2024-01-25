import NavLinks from '../NavLinks/NavLinks';
import './NavBar.scss';

// import constants
import { navContent } from '../../assets/constants/constants.js';

function NavBar() {
    return(
        <nav>
            {navContent.map((content) => (
                <NavLinks
                    key={content.content}
                    title={content.content}
                    link={content.link}
                    aria={content.arialabel}
                />
            ))}
        </nav>
    )
};

export default NavBar;