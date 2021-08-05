import React from 'react';

import './style.scss'

const FotoCard = ({props,active}) =>{
    return(
        <div className={`fotoCard fotoCard-${active}`}>
            <img className={`fotoCard-img fotoImg-${active} ` } src={props}  alt={props.toString()}/>
        </div>
    )
}

export default FotoCard;