// style and constant import
import './ProjectCard.scss';

import testing from '../../assets/images/bees-knees.png';

function ProjectCard() {
    return(
        <>
            <article className='projectCard'>
                <img
                    className='projectCard__img' 
                    src={testing}
                    alt=''
                />
            </article>
            <article className='projectCard'>
                <img
                    className='projectCard__img' 
                    src={testing}
                    alt=''
                />
            </article>
            <article className='projectCard'>
                <img
                    className='projectCard__img' 
                    src={testing}
                    alt=''
                />
            </article>                        
        </>
    )
};

export default ProjectCard;