import React, { useState } from 'react';
import './style.scss'



const ProjectCard =({imageSrc})=>{

const [imageLib, setImageLib]=useState(0)

function clickable(id){
    setImageLib(id)
}
const active=(el)=>el===imageLib?'active':null

function carouselImage(){
    
    if(imageLib===0){
        return(
            <div className='project-image'>
                <img className='project-image-first' onClick={()=>{clickable(imageSrc.length-1)}} src={imageSrc[imageSrc.length-1]} alt='center 3'/>
                <img className='project-image-main' src={imageSrc[imageLib]} alt='center 2'/>
                <img className='project-image-first' onClick={()=>{clickable(imageLib+1)}} src={imageSrc[imageLib+1]} alt='center 1'/>               
        </div>
        )}     else if(imageLib===imageSrc.length-1){
        return(
            
        <div className='project-image'>        
            <img className='project-image-first' onClick={()=>{clickable(imageLib-1)}} src={imageSrc[imageLib-1]} alt='center 1'/>
            <img className='project-image-main' src={imageSrc[imageLib]} alt='center 2'/>  
            <img className='project-image-first' onClick={()=>{clickable(0)}} src={imageSrc[0]} alt='center 3'/>   
        </div>
        )}  
        else if(imageLib>imageSrc.length-1){
            setImageLib(0)
        }      
        else{
            return(
            <div className='project-image'>        
            <img className='project-image-first' onClick={()=>{clickable(imageLib-1)}} src={imageSrc[imageLib-1]} alt='center 1'/>
            <img className='project-image-main' src={imageSrc[imageLib]} alt='center 2'/>  
            <img className='project-image-third' onClick={()=>{clickable(imageLib+1)}} src={imageSrc[imageLib+1]} alt='center 3'/>   
        </div>)
        }
}



    return(
        <div className='project'>
            {carouselImage()}               
        <div className='project-description'>
            {imageSrc.map((el,id)=><div className={`slider slider-${active(id)}`}></div>)}
            
        </div>
    </div>
    )
}
export default ProjectCard;