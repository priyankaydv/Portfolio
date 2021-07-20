import React from 'react'
import display3 from './display3.jpeg';
import './Sidebar.css';

const About = () => {
    return (
        <div className="About-main">
        <div className="intro"><br/>
        <h3>Hi there,I'm <br/><h2><b>Priyanka Yadav</b></h2>
        <h6>Web developer</h6>
        </h3>
        </div><br/>
        <div className="about">
            
            <img src={display3} alt="About" />
        </div>
        
        </div>
    )
}

export default About
