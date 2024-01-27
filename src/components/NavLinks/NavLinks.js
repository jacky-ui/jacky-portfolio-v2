// Import style
import './NavLinks.scss';

function NavLinks({ key, title, link, aria }) {
    return(
        <>
            <a className='navlinks' key={key} href={link} aria-label={aria}>{title}</a>
        </>
    )
};

export default NavLinks;