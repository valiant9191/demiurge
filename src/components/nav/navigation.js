import React from 'react';

import './style.scss'



const Navigation = () => {


    return(

    <div className='navbar'>         
          <ul className='navbar-links'>
          {/* <div className='navbar-logo' /> */}
            <li to='#background'>Home</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
          
        </div>
        )
}
export default Navigation;