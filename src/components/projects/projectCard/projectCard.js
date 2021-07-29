import React from 'react';
import './style.scss'



const ProjectCard =({imageSrc})=>{



    return(
        <div className='project'>
            <div className='project-image'>
                <img className='project-image-first' src={imageSrc[0]} alt='center 1'/>
                <img className='project-image-main' src={imageSrc[1]} alt='center 2'/>
                <img className='project-image-first' src={imageSrc[2]} alt='center 3'/>
            </div>
        <div className='project-description'>
            
        </div>
    </div>
    )
}
export default ProjectCard;