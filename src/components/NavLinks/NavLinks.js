// Import style
import './NavLinks.scss';

function NavLinks({ title, link, aria }) {
    return(
        <>
            <a className='navlinks' href={link} aria-label={aria}>{title}</a>
        </>
    )
};

export default NavLinks;