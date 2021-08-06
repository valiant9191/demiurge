import React from 'react';

import './style.scss'

const FotoCard = ({props,active,clickable,id}) =>{
    return(
        <div className={`fotoCard fotoCard-${active}`} onClick={()=>clickable(id)}>
            <img className={`fotoCard-img fotoImg-${active} ` } src={props}  alt={props.toString()} />
        </div>
    )
}

export default FotoCard;