import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProjectSummary = (project) => {
  return (
    <tr>
    <td><Link to={{
        pathname:'/order/' + project.project.id, state: project.project, id: project.project.id}}> 
        {project.drink}
        </Link></td>
    <td>{project.size}</td>
    <td>{project.extras}</td>
    <td>{moment(project.project.date).calendar()}</td>
    <td><a class="waves-effect waves-light btn-small orange">Edit</a></td>
    <td><a class="waves-effect waves-light btn-small red">Delete</a></td>
    </tr>


  )

}

export default ProjectSummary;