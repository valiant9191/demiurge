import React from 'react'
import logo from '../../assets/foto/San Francisco Residence Mission District/contemporary-kitchen (1).jpg'
// import projectData from  '../../data/projectData.json'

import './style.scss'

const proData =require('../../data/projectData.json')
const projectData =proData.projectData
const Projects= () => {

    return(
        <div className='projects'>
            <div className='projects-list'>
                <h2>First project</h2>
                <h2>Second project</h2>
                <h2>Third project</h2>
                <h2>{projectData[0].projectName}</h2>
            </div>
            <div className='project'>
                <div className='project-image'>
                    <img className='project-image-first' src={logo} alt='center 1'/>
                    <img className='project-image-second' src={logo} alt='center 2'/>
                    {/* <img className='project-image-first' src={require('/src/assets/foto/Sausalito Residence San Francisco/contemporary (1).jpg')} alt='center 3'/> */}
                </div>
                <div className='project-description'>
                    
                </div>
            </div>
            
        </div>
    )
}
export default Projects;
