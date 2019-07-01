import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { tsConstructorType } from '@babel/types';

const ProjectSummary = (project,authored) => {
  
  


  

  
  
  function routeChange (e)  {
    e.preventDefault();
    // console.log(project);
    if (project.authored===true) {
      // console.log(project.project.id);
      // return <Redirect to='/createproject'/>
    }
    // 
   
  }
  console.log(this)
  return (
    <tr>
    <td><Link to={{
        pathname:'/order/' + project.project.id, state: project.project, id: project.project.id}}> 
        {project.drink}
        </Link></td>
    <td>{project.size}</td>
    <td>{project.extras}</td>
    <td>{moment(project.project.date).calendar()}</td>
    {(project.authored===true) &&
     <td>
       
       <a className="waves-effect waves-light btn-small orange" onClick={routeChange}> 
          <NavLink to={
            `order/${project.project.id}/edit`} > Edit</NavLink>
      </a>
       
     <button className="waves-effect waves-light btn-small red" >Delete</button>
     </td>
    }
   
    {/* <td><a ><button className="waves-effect waves-light btn-small orange" onClick={handleEdit}> Edit</button></a></td> */}
    
    </tr>


  )


}

export default ProjectSummary;