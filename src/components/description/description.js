import React from 'react';

import './style.scss'
import Review from './review/review'

import projectData from '../../data/projectData.json'
import { useState } from 'react';


const reviewData=projectData.review

const Description = () => {


// review fn
    const [result,setResult]=useState('0')
    const buttonActiveLog=(e)=>{
        result===e?setResult(0):setResult(e)
    }



    return(
        <section>
                <div className='description-icon' />
                    <div className='description-text'>
                    <h1 className='description-text-title'>CEO Demiurge - Vadzim Boltach</h1>
                    <p className='description-text-main'>We Create Best, our Main is Quality!</p>

                </div>

                <div className="description-text description-text-intro"><p>Demiurge, modern cabinets & kitchens,  we combine traditional craftsmanship with modern functionality,modern cabinets & kitchens, minimalistic and highly functional with dramatic angles and flowing curves.
</p></div>
                <div className='review-row'>
                {reviewData.yelp.map((el,id)=>
                    <Review 
                        key={id+el.logo}
                        checkKeys={id+el.logo} 
                        result={result} 
                        review={el}  
                        buttonActiveLog={()=>buttonActiveLog(id+el.logo)} 
                        />)
                }
                </div>
                <div className='review-row'>
                {reviewData.houzz.map((el,id)=>
                    <Review 
                        key={id+el.logo}
                        checkKeys={id+el.logo} 
                        result={result} 
                        review={el}  
                        buttonActiveLog={()=>buttonActiveLog(id+el.logo)} 
                        />)
                }
                </div>
      
        </section>
    )
}
export default Description;