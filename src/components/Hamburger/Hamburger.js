// import styles
import './Hamburger.scss';

// import constants
import { navLinks } from '../../assets/constants/constants.js';


function Hamburger(props) {
    return(
        <div className={`${props.showMenuList ? "hamburger" : "hamburger--none"}`}>
        </div>
    )
};

export default Hamburger;