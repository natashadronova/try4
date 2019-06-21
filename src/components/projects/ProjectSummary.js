import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProjectSummary = (project) => {
  console.log(project.project.date)
  return (
    <tr>
    <td><Link to={{
        pathname:'/order/' + project.project.id, state: project.project, id: project.project.id}}> 
        {project.drink}
        </Link></td>
    <td>{project.size}</td>
    <td>{project.extras}</td>
    <td>{moment(project.project.date).calendar()}</td>
    </tr>


  )

}

export default ProjectSummary;