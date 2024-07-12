import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { projects } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ProjectDetailsContainer from '../ProjectDetailsContainer/ProjectDetailsContainer';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0] || null);

  if (!projects.length) return null;

  const handleProjectHover = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__layout">
        <div className="projects__list">
          {projects.map((project) => (
            <div
              key={uniqid()}
              className="project__preview"
              role="button"
              tabIndex={0}
              onMouseEnter={() => handleProjectHover(project)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleProjectHover(project);
                }
              }}
            >
              <ProjectContainer project={project} />
            </div>
          ))}
        </div>
        <div className="projects__details">
          <ProjectDetailsContainer project={selectedProject} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
