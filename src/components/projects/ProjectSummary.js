import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = (project) => {
  
  return (
    <tr>
    <td><Link to={{
        pathname:'/order/' + project.project.id, state: project.project}}>
        {project.drink}
        </Link></td>
    <td>{project.size}</td>
    <td>{project.extras}</td>
    <td>{project.date}</td>
    </tr>
    // <div className="card z-depth-0 project-summary">
    
    //   <div className="card-content grey-text text-darken-3">
    //     <span className="card-title"></span>
    //     <p>Posted by Nat</p>
    //     <p className="grey-text">03 June 2019</p>
    //   </div>
    // </div>

  )

}

export default ProjectSummary;