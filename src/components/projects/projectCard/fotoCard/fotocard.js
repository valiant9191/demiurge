import React from 'react';

const FotoCard = ({props}) =>{
    console.log(props)
    return(
        <div className="fotoCard">
            <img src={props}  alt={props.toString()}/>
        </div>
    )
}

export default FotoCard;