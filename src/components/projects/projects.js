import React,{useState} from 'react'
import ProjectCard from './projectCard/projectCard'
import ProjectList from './projectList/projectList'

import './style.scss'

const proData =require('../../data/projectData.json')
const projectData =proData.projectData

const Projects= () => {


    const [idPro,setId]=useState(0);
    

    function click(id){setId(id)};




    return(
        <div className='projectsArea'>
                <ProjectList 
                project ={projectData}
                click={click}
            />
                
            
            <ProjectCard  
                imageSrc={projectData[idPro].imageSrc}
            />
            
        </div>
    )
}
export default Projects;
