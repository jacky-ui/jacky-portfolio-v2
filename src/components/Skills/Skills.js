// Style, and component imports
import SkillsCard from '../SkillsCard/SkillsCard';
import './Skills.scss';

function Skills() {
    return(
        <section className="skills">
            <h2>My Stack and Tools:</h2>
            <SkillsCard />
        </section>
    )
};

export default Skills;