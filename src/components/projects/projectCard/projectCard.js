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


// gallery of images after main img depend on width
const imgBlockBottom =()=>{if(window.outerWidth>=1000){

    return(
     <div className="imgBlockBottom">
            {imageSrc.map((el,id)=>( 
                <FotoCard active={active(id)} key={id} props={el} clickable={clickable} id={id} />
            ))}
        </div> 
)}
}
const sliderIcons =()=>{if(window.outerWidth<1000){
    return(
        <div className='project-description'>
        {imageSrc.map((el,id)=>
            <div key={id} className={`slider slider-${active(id)}` }></div>
        )}
        
    </div> 
)}
}



    return(
        <div className='project'>
            {carouselImage()}               
            {sliderIcons()}
            {imgBlockBottom()}
        
         </div>
    )
}
export default ProjectCard;