// Import style
import './NavLinks.scss';

function NavLinks({ componentClass, title, link, aria }) {
    return(
        <>
            <a className={componentClass} href={link} aria-label={aria}>{title}</a>
        </>
    )
};

export default NavLinks;