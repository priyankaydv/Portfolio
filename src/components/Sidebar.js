import React from 'react';
import Dp1 from './Dp1.jpeg';
import Facebook from './Facebook.png';
import instagram1 from './instagram1.png';
import GitHub from './GitHub.png';
import linkedin from './linkedin.png'
import Download from './Download.png';
import email from './email.png';
import phone from './phone.png';
import './Sidebar.css';
import Cv from './Cv.pdf';

const Sidebar= () => {
    const emailmehandler=()=>{
        window.open("mailto:ydpriyanka01@gmail.com")

    }
    return (
        <div className="sidebar">
        <img src={Dp1} alt="avatar" className="sidebar_image"/>
        <div className="sidebar_name"><span>Priyanka Yadav</span></div>
        <div className="sidebar_item sidebar_title">Web Developer</div>
        <a href={Cv} download="Cv.pdf" >
        <div className="sidebar_item sidebar_resume">
        <img src={Download} alt="resume" className="sidebar_icon"/>Download Resume</div></a>
        <figure className="sidebar_social-icons my-2 ">
        <div className="social-contact">
        <a href="https://www.linkedin.com/in/priyanka-yadav-9a321a192/" ><img src={linkedin} alt="linkedIn" className="sidebar_icon mr-3 sidebar_linkedin"/></a>
        <a href="#" ><img src={instagram1} alt="instagram" className="sidebar_icon mr-3 sidebar_instagram"/></a>
        <a href="#" ><img src={Facebook} alt="facebook" className="sidebar_icon mr-3 sidebar_facebook"/></a>
        <a href="https://github.com/priyankaydv"><img src={GitHub} alt="github" className="sidebar_icon sidebar_github"/></a></div></figure>
        
        <div className="sidebar_contact">
        <div className="sidebar_items">
        
        </div>
        <div className="sidebar_item"><img src={email} alt= "email" className="logo"/>ydpriyanka01@gmail.com </div>
        

        <div className="sidebar_item sidebar_email" onClick={emailmehandler}>Email-me</div>
</div>
        </div>
    )
}

export default Sidebar;
