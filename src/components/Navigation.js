import React ,{useState} from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom'
const Navigation = () => {
    const[active,setActive]=useState('')
    return (
        <div>
        <div className="navbar">
        <div className="navbar_active"></div>
        <div className="navbar_items">
        
        
        <Link to="/About"><div className="navbar_item"onClick={()=>setActive('About')}>About</div></Link>
        <Link to="/Projects"><div className="navbar_item"onClick={()=>setActive('Projects')}>Projects</div></Link>
        <Link to="/Resume"><div className="navbar_item"onClick={()=>setActive('Resume')}>Resume</div></Link>
        <Link to="/Certificate"><div className="navbar_item"onClick={()=>setActive('Certificate')}>Certificate</div></Link>
        <Link to="/Skills"><div className="navbar_item"onClick={()=>setActive('Skills')}>Skills</div></Link>
        </div>
        </div>
       
        <div className="heading">{active}</div></div>
        
        
    )
}

export default Navigation
