// style, constants and component imports
import { aboutMe } from '../../assets/constants/constants';
import MileStone from '../MileStone/MileStone';
import './AboutMe.scss';

function AboutMe() {
    return(
        <section className='aboutme'>
            <div>
                <h2>Hi, I'm Jacky Du. Nice to meet you.</h2>
                <p>{aboutMe}</p>
            </div>
        </section>
    )
};

export default AboutMe;