import React from 'react';
import Data from './Data.js';
import ProjectCard from './ProjectCard.js';
import './Sidebar.css';

const Projects = () => {
    return (
        <div className="container projects">
        <div className="row">
        {
            Data.map(project =>
                <ProjectCard key={project.name} project={project}  />)
        }
        </div>
         
        </div>
    )
}

export default Projects
