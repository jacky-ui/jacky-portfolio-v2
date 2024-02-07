// style, component and constant imports
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.scss';

function Projects() {
    return(
        <section className='projects'>
            <h2>My Recent Projects</h2>
            <div className='projects__container'>
                <ProjectCard />
            </div>
        </section>
    )
};

export default Projects;