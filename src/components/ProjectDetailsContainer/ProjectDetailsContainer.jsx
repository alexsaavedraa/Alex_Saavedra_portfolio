import React from 'react';
import './ProjectDetailsContainer.css';
import uniqid from 'uniqid';

const ProjectDetailsContainer = ({ project }) => {
  if (!project) {
    return <p>Select a project to see details</p>;
  }

  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <h4 className='project-tagline'>{project.tagline}</h4>
      <div><img src={project.image} alt={" "} className="project-image" /></div>
      <div className='project-stack-container'>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            • {item} 
            
          </li>
          
        ))}
      </ul>
    )}
    </div>
      <div className="details-container">
      <p className="description">
  {project.description && project.description.map((item) => (
    
    <React.Fragment key={item}>
       <br/>
      {item}
      <br />
     
    </React.Fragment>
  ))}
</p>
      </div>

      {project.links && (
      <div className='project__links'>
      {Object.entries(project.links).map(([key, [url, icon]]) => (
        <div key={uniqid()} className='link-wrapper'>
          <a href={url} aria-label={key} className='link'>
            <span className='link__text'>{key}</span>
            <img src={icon} alt={" "} className='project__icon' />
          </a>
        </div>
      ))}
    </div>
    )}


   
    </div>
  );
};

export default ProjectDetailsContainer;
