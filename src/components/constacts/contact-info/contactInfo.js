import React from 'react'
import './style.scss'

import demiurgeLogo from '../../../assets/demiurge-png.png'


const ContactInfo=()=>{
    return(
        <div className="contact info">
            <img className="contact-img" src={demiurgeLogo} alt="demiurge-logo"></img>
            <div className="contact-block">
                <div className="contact">
                <div className="contact section">
                    <h1>PHONE:</h1>
                    <p>(650) 521-7406</p>
                    <h1>E-mail:</h1>
                    <p>demiurge@demiurge.com</p>
                </div>
                <div className="contact section">
                    <h1>Business Hours:</h1>
                    <p>Monday-Friday: </p>
                    <p>7:00 AM - 4:00 PM </p>
                </div>
                <div className="contact section">
                    <h1>ADDRESS:</h1>           
                    <p>1775 Egbert Avenue </p>
                    <p>San Francisco, CA 94124 United States </p>
                </div>
                </div>
                {/* <div className="contactmap"><p>map</p></div> */}

            </div>
        </div>
    )
}
export default ContactInfo;