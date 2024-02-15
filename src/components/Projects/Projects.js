// style, component and constant imports
import { projects } from '../../assets/constants/constants';
import ProjectCard from '../ProjectCard/ProjectCard';
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
        </section>
    )
};

export default Projects;