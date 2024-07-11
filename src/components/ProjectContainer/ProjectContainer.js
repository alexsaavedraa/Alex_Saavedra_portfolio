import uniqid from 'uniqid';
import './ProjectContainer.css';



const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.links && (
      <div className='project__links'>
        {Object.entries(project.links).map(([key, [url, icon]]) => (
          <a
            key={uniqid()}
            href={url}
            aria-label={key}
            className='link link--icon'
          >
            <img src={icon} alt={key} className='project__icon' />
          </a>
        ))}
      </div>
    )}
  </div>
);

export default ProjectContainer;
