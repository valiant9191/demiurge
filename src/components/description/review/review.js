import React from 'react';
import './style.scss';

import houzz from '../../../assets/houzz.svg'
import yelp from '../../../assets/yelp.svg'



const Review = ({review, buttonActiveLog, result, checkKeys,}) => {
    

    

// alt-name src & url logo functions 
let check;
(review.logo==='houzz')?check=false:check=true;
function checkAlt() {if(check){return('Yelp-Logo')}else{return('Houzz-Logo')}}
function checkSrc() {if(check){ return (yelp)} else{return(houzz)}}
const checkUrlFn=(e)=>{
        if(check){window.location.href='https://www.houzz.com/pro/vadzimboltach/demiurge'}
        else{ window.location.href='https://www.yelp.com/biz/demiurge-san-francisco'}
    }
// button full watch review 
const revCheck=()=>checkKeys===result?"review-active":null

// button change full/short
const buttonChange =()=>checkKeys===result?
    <button className="review-link-button" onClick={buttonActiveLog}>Close</button>:
    <button className="review-link-button" onClick={buttonActiveLog}>Full review...</button>

    
    return(
        <div className={`review ${revCheck()}`}>
            <h1 className="review-title">{review.title}</h1>
            <div className="review-div"> 
               <p className="review-div-text">{review.text}</p>
            </div>
            <div className="review-link">
                {buttonChange()}
                <img className="review-link-img" onClick={checkUrlFn} src={checkSrc()} alt={checkAlt()}  />
            </div>
        </div>
    )
}

export default Review;
