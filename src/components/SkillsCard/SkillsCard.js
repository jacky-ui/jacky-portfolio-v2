// style, component and constant imports
import { skills } from '../../assets/constants/constants';
import './SkillsCard.scss';

function SkillsCard() {
    return(
        <article className='skillscard'>
            {skills.map((skill) => (
                <div className={`skillscard__container ${skill.listClass ? "column" : ""}`} key={skill.title}>
                    <h3>{skill.title}</h3>
                    <ul className='skillscard__list'>
                        {skill.skillSet.map((tool) => (
                            <li key={tool.skillName}>
                                {tool.skillIcon ? 
                                    <div>
                                        <img 
                                            src={tool.skillIcon}
                                            alt={tool.altText}
                                        />
                                        <p>{tool.skillName}</p>
                                    </div> :
                                    <p>{tool.skillName}</p>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {/*<div className='skillscard__container'>
                <h3>Front End Skills</h3>
                <ul className='skillscard__list'>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <p>HTML</p>
                    </li>
                </ul>
            </div>
            <div className='skillscard__container'>
                <h3>Front End Skills</h3>
                <ul className='skillscard__list'>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <p>HTML</p>
                    </li>
                </ul>
            </div>
            <div className='skillscard__container column'>
                <h3>Libraries, Tools, and Others</h3>
                <ul className='skillscard__list'>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                </ul>
            </div>*/}
        </article>
    )
};

export default SkillsCard;