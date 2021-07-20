import React from 'react';
import GitHub from './GitHub.png';
import './Sidebar.css';

const projectCard = ({project: {name,image,deployed_url,github_url}}) => {
    return (
        <div className="projectCard  col-md-6 col-lg-4">
        <figure className="projectCard_wrapper">
        <a href={deployed_url} target="_blank" >
        <img src={image} alt={name} className="ProjectCard_image" />
        </a>
        <div className="project_Title">
        <a href={github_url} >
        <img src={GitHub} alt="Github" className="ProjectCard_icon" />
        </a>
        {name}
        </div>
        </figure>
            
        </div>
    )
}

export default projectCard;

