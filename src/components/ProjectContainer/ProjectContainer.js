import uniqid from 'uniqid';
import './ProjectContainer.css';



const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    <h5>{project.subtitle}</h5>
    


    
  </div>
);

export default ProjectContainer;
