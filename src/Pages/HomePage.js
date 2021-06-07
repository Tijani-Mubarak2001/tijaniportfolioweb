import React from 'react'
import Typewriter from 'typewriter-effect'
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function HomePage(){
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, You can call me<h1>Mubarak</h1>
                    And I'm a 
                    <span> 
                        <Typewriter 
                            onInit = {(typewriter) => {
                                var i =0;
                                var max = 10000;
                                for(i=0; i<max; i++){
                                    typewriter.typeString("Software Developer.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    typewriter.typeString("Web Developer.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    typewriter.typeString("Data Scientist.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    typewriter.typeString("Freelancer.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    typewriter.typeString("Student.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    typewriter.typeString("Pythoneer.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    typewriter.typeString("ML and AI Enthusiast.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start();
                                    max=7;
                                }
                                
                            }}
                        />
                    </span>
                </h1> 
                <p className="h-sub-text">
                Welcome to my Portfolio website😊, you will find detailed information about me here, so, take your time.
                I am open to internship opportunities. Click on the links below to connect. Enjoy!🤗.
                </p>
                <div className="icons">
                    <a href="https://web.facebook.com/mubarak.tijani.200/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                                             
                    </a>
                    <a href="https://github.com/Tijani-Mubarak2001" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                                             
                    </a>
                    <a href="https://www.linkedin.com/in/mubaraktijani/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                                             
                    </a>
                    <a href="https://twitter.com/TijaniMubarakA1" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw"/>
                                             
                    </a>
                    

            
                </div>

            </header>
        </div>
    )
}

export default HomePage;