import React, { useState } from 'react';

import FotoCard from './fotoCard/fotocard';
import LeftArrow from '../../../assets/angle-pointing-to-left.svg'
import RightArrow from '../../../assets/angle-arrow-pointing-to-right.svg'



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
                <img className='project-image-main' src={imageSrc[imageLib]} alt='center 2'/>
                <img className='project-image-first project-image-first-left' onClick={()=>{clickable(imageSrc.length-1)}} src={LeftArrow} alt='left arrow'/>
                <img className='project-image-first project-image-first-right' onClick={()=>{clickable(imageLib+1)}} src={RightArrow} alt='right arrow'/>               
        </div>
        )}     else if(imageLib===imageSrc.length-1){
        return(
            
        <div className='project-image'>
            <img className='project-image-main' src={imageSrc[imageLib]} alt='center 2'/>          
            <img className='project-image-first project-image-first-left' onClick={()=>{clickable(imageLib-1)}} src={LeftArrow} alt='left arrow'/>
            <img className='project-image-first project-image-first-right' onClick={()=>{clickable(0)}} src={RightArrow} alt='right arrow'/>   
        </div>
        )}  
        else if(imageLib>imageSrc.length-1){
            setImageLib(0)
        }      
        else{
            return(
            <div className='project-image'>
            <img className='project-image-main' src={imageSrc[imageLib]} alt='center 2'/>          
            <img className='project-image-first project-image-first-left' onClick={()=>{clickable(imageLib-1)}} src={LeftArrow} alt='center 1'/>
            <img className='project-image-first project-image-first-right' onClick={()=>{clickable(imageLib+1)}} src={RightArrow} alt='right arrow'/>   
        </div>)
        }
}



    return(
        <div className='project'>
            {carouselImage()}               
        <div className='project-description'>
            {imageSrc.map((el,id)=>
                <div key={id} className={`slider slider-${active(id)}` }></div>
            )}
            
        </div>
        {/* <div>
            {imageSrc.map((el,id)=>(
                <FotoCard key={id} props={el} />
            ))}
        </div> */}
    </div>
    )
}
export default ProjectCard;