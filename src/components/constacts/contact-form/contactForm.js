import React from 'react'

const contactForm=()=> {


    return(
        <div className="contact-form">
            <p>Please fill out the contact form below or give us a ring during our business hours. 
We look forward to hearing about your project.</p>
        <form>
            {/* name */}
            <div className="row">
                <input className="input"></input>
                <input className="input"></input>
            </div>
            {/* phone */}
            <div className="row">
                <input className="input"></input>
                <input className="input"></input>
                <input className="input"></input>
            </div>
            {/* e-mail */}
            <div className="row">
                <input className="input"></input>
            </div>
            {/* location */}
            <div className="row">
                <input className="input"></input>
            </div>
            {/* message */}
            <div className="row">
                <input className="input"></input>
            </div>



        </form>
        </div>
    )
}

export default contactForm
