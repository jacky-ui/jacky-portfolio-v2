// import styles and components
import './Hamburger.scss';
import NavLinks from '../NavLinks/NavLinks';

// import constants
import { navContent } from '../../assets/constants/constants.js';


function Hamburger(props) {
    return(
        <div className={`${props.showMenuList ? "hamburger" : "hamburger--none"}`}>
            <ul className='hamburger__list'>
                {navContent.map((content) => (
                    <li onClick={props.closeMenuToggle}>
                        <NavLinks
                            key={content.content}
                            title={content.content}
                            link={content.link}
                            aria={content.arialabel}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Hamburger;