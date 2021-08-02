import React from 'react';


import './style.scss'
import demiurgeLogo from '../../assets/demiurge-png.png'

// const demiurgeLogo = require('../../assets/demiurge.jpg')
const Navigation = () => {


    return(

    <div className='navbar'> 
          <div className='navbar-logo' >
            <img src={demiurgeLogo}/>
          </div>        
          <ul className='navbar-links'>
          
            <li to='#background'>Home</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
          
        </div>
        )
}
export default Navigation;