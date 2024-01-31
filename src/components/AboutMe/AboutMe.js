// style, constants and component imports
import { aboutMe } from '../../assets/constants/constants';
import './AboutMe.scss';

function AboutMe() {
    return(
        <section className='aboutme' id="about">
            <div>
                <h2>Hi, I'm Jacky Du. Nice to meet you.</h2>
                <p>{aboutMe}</p>
            </div>
        </section>
    )
};

export default AboutMe;