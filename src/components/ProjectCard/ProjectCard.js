// style and constant import
import './ProjectCard.scss';

function ProjectCard({ header, deployedLink, codeLink, summary, altText, tool, image }) {
    return(
        <>
            <article className='projectCard'>
                <img
                    className='projectCard__img' 
                    src={image}
                    alt={altText}
                />
                <figcaption className='projectCard__caption'>
                    <h3>{header}</h3>
                    <p>{summary}</p>
                    <div className='projectCard__caption--flex'>
                        <a href={codeLink} target='new'>Github</a>
                        { deployedLink ? <a href={deployedLink} target='new'>Deployed</a> : <></> }
                    </div>
                    <p>{tool}</p>
                </figcaption>
            </article>                                                                                   
        </>
    )
};

export default ProjectCard;