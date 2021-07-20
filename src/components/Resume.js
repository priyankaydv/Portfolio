import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="container resume">
        <div className="row">
        <div className="col-lg-6 resume-card">
        <h4 className="resume-card-heading">Education</h4>
        <div className="resume-card-body">
        <div className="resume-card-title">
        <h5>Computer Science engineering (2019-2023)</h5>
        <p className="resume-card-name">Lovely Professional University,Punjab<br/>Current CGPA= 7.81</p>
        <p className="resume-card-details"></p>

        <h5>Intermediate</h5>
        <p className="resume-card-name">Kv Kanpur Cantt<br/>with maths physics and chemsitry 70%</p>
        <p className="resume-card-details"></p>
        <h5>High School</h5>
        <p className="resume-card-name">Kv Ojhar Maharashtra<br/>With 9 cgpa</p>
        <p className="resume-card-details"></p>

        </div>
        </div>
        </div>
        
        
        <div className="col-lg-6 resume-card">
        <h4 className="resume-card-heading">Achievement</h4>
        <div className="resume-card-body">
        <div className="resume-card-title">
        <h5>KV Sports meet</h5>
        <p className="resume-card-name">Winner in inter kv sports meet<br/>Volleyball,2017</p>
        <p className="resume-card-details"></p>
        <h5>Folk Dance </h5>
        <p className="resume-card-name">Winner at folk dance competetion<br/>Kathak, 2018 </p>
        <p className="resume-card-details"></p>

        <h5>Typing Test</h5>
        <p className="resume-card-name">Winner at Typing test competetion<br/>Army Corps Day, 2018 </p>
        <p className="resume-card-details"></p>
        
        
        </div>
        </div>
        </div>
           
        </div>
        <div className="row">
        <div className="language">
        <h4>language Known:</h4>
        <h5>1.English <br/> 2.Hindi</h5>
        </div>
        </div>
        </div>
       
        
    )
}

export default Resume
