import React from 'react';
import { useState } from 'react';
import './style.scss';


const ProjectList =({project, click})=>{

    const [active,setActive]=useState(0)
   
    function activeFn(id){
if(active===id){ return("active")}
    }


    return(
        <div className='projects-list'>
            {project.map((el,id)=>(
                <h2 className={`projects-name projects-name--${activeFn(id)}`} onClick={()=>(click(id),setActive(id) )} key={id}>{el.projectName}</h2> 
            ))}
                              
            </div>
    )
}
export default ProjectList;