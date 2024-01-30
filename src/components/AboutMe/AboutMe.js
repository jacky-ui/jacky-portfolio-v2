// style, constants and component imports
import { aboutMe } from '../../assets/constants/constants';
import './AboutMe.scss';

function AboutMe() {
    return(
        <section className='aboutme'>
            <h2>Hi, I'm Jacky Du. Nice to meet you.</h2>
            <p>{aboutMe}</p>
        </section>
    )
};

export default AboutMe;