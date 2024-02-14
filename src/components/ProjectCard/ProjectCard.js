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
                <figcaption className='projectCard__caption'>
                    <h3>Studio Ghibli API</h3>
                    <p>somethig something fdjsfadsklf fdsjfsdl fdskjfal fdjskfjlas fjdkfljsal fjdskfjslda</p>
                    <div className='projectCard__caption--flex'>
                        <a href='www.google.com'>Deployed</a>
                        <a href='www.google.com'>Github</a>
                    </div>
                    <p>#html #css #sass #javascript</p>
                </figcaption>
            </article>    
            <article className='projectCard'>
                <img
                    className='projectCard__img' 
                    src={testing}
                    alt=''
                />
                <figcaption className='projectCard__caption'>
                    <h3>Studio Ghibli API</h3>
                    <p>somethig something fdjsfadsklf fdsjfsdl fdskjfal fdjskfjlas fjdkfljsal fjdskfjslda</p>
                    <div className='projectCard__caption--flex'>
                        <a href='www.google.com'>Deployed</a>
                        <a href='www.google.com'>Github</a>
                    </div>
                    <p>#html #css #sass #javascript</p>
                </figcaption>
            </article>  
            <article className='projectCard'>
                <img
                    className='projectCard__img' 
                    src={testing}
                    alt=''
                />
                <figcaption className='projectCard__caption'>
                    <h3>Studio Ghibli API</h3>
                    <p>somethig something fdjsfadsklf fdsjfsdl fdskjfal fdjskfjlas fjdkfljsal fjdskfjslda</p>
                    <div className='projectCard__caption--flex'>
                        <a href='www.google.com'>Deployed</a>
                        <a href='www.google.com'>Github</a>
                    </div>
                    <p>#html #css #sass #javascript</p>
                </figcaption>
            </article>  
            <article className='projectCard'>
                <img
                    className='projectCard__img' 
                    src={testing}
                    alt=''
                />
                <figcaption className='projectCard__caption'>
                    <h3>Studio Ghibli API</h3>
                    <p>somethig something fdjsfadsklf fdsjfsdl fdskjfal fdjskfjlas fjdkfljsal fjdskfjslda</p>
                    <div className='projectCard__caption--flex'>
                        <a href='www.google.com'>Deployed</a>
                        <a href='www.google.com'>Github</a>
                    </div>
                    <p>#html #css #sass #javascript</p>
                </figcaption>
            </article>  
            <article className='projectCard'>
                <img
                    className='projectCard__img' 
                    src={testing}
                    alt=''
                />
                <figcaption className='projectCard__caption'>
                    <h3>Studio Ghibli API</h3>
                    <p>somethig something fdjsfadsklf fdsjfsdl fdskjfal fdjskfjlas fjdkfljsal fjdskfjslda</p>
                    <div className='projectCard__caption--flex'>
                        <a href='www.google.com'>Deployed</a>
                        <a href='www.google.com'>Github</a>
                    </div>
                    <p>#html #css #sass #javascript</p>
                </figcaption>
            </article>  
            <article className='projectCard'>
                <img
                    className='projectCard__img' 
                    src={testing}
                    alt=''
                />
                <figcaption className='projectCard__caption'>
                    <h3>Studio Ghibli API</h3>
                    <p>somethig something fdjsfadsklf fdsjfsdl fdskjfal fdjskfjlas fjdkfljsal fjdskfjslda</p>
                    <div className='projectCard__caption--flex'>
                        <a href='www.google.com'>Deployed</a>
                        <a href='www.google.com'>Github</a>
                    </div>
                    <p>#html #css #sass #javascript</p>
                </figcaption>
            </article>                                                                                  
        </>
    )
};

export default ProjectCard;