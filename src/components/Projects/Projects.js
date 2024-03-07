// style, component and constant imports
import { projects } from '../../assets/constants/constants';
import ProjectCard from '../ProjectCard/ProjectCard';
import NavLinks from '../NavLinks/NavLinks.js';
import './Projects.scss';

function Projects() {
    return(
        <section className='projects'>
            <h2>My Recent Projects</h2>
            <div className='projects__container'>
                {projects.map((project) => (
                    <ProjectCard 
                        key={project.summary}
                        image={project.projectImage}
                        header={project.subheader}
                        deployedLink={project.deployed}
                        codeLink={project.code}
                        summary={project.summary}
                        altText={project.imageAlt}
                        tool={project.tools}
                    />
                ))}
            </div>
            <div className='projects__link'>
                <NavLinks
                    componentClass='navlinks'
                    title='See more on Github'
                    link='https://github.com/jacky-ui'
                    aria='Jacky Du Github'
                />
            </div>
        </section>
    )
};

export default Projects;