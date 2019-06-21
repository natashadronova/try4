import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = (project) => {
  return (
    <tr>
    <td><Link to={{
        pathname:'/order/' + project.project.id, state: project.project, id: project.project.id}}> 
        {project.drink}
        </Link></td>
    <td>{project.size}</td>
    <td>{project.extras}</td>
    <td>{project.date}</td>
    </tr>


  )

}

export default ProjectSummary;