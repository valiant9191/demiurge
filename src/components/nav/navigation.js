import React from 'react';
import { HashLink } from 'react-router-hash-link';


import './style.scss'
import demiurgeLogo from '../../assets/demiurge-png.png'

const Navigation = () => {


    return(

    <div className='navbar'> 
          <div className='navbar-logo' >
            <img src={demiurgeLogo} alt='demiurge-logo'/>
          </div>        
          <ul className='navbar-links'>          
            <HashLink to='#home' className='navbar-links-hash'>Home</HashLink>
            <HashLink to='#projects' className='navbar-links-hash'>Projects</HashLink>
            <HashLink to='#contacts' className='navbar-links-hash'>Contacts</HashLink>
          </ul>
          
        </div>
        )
}
export default Navigation;