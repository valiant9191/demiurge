import React from 'react';
import './style.scss';


const ProjectList =({project, click})=>{
    return(
        <div className='projects-list'>
            {project.map((el,id)=>(
                <h2 className='projects-name' onClick={()=>click(id)} key={id}>{el.projectName}</h2> 
            ))}
                              
            </div>
    )
}
export default ProjectList;