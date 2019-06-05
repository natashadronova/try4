import React from 'react';
import ProjectSummary from './ProjectSummary';



const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} drink={project.drink}/>
        )
      })}
    </div>
  )

}
// <div className="card z-depth-0 project-summary">
{/* <table>
<thead>
  <tr>
    <th>Drink</th>
    <th>Size</th>
    <th>Additions</th>
    <th>Date</th>
  </tr>
</thead>
<tbody>
  <tr></tr>
</tbody>
</table>
</div> */}

export default ProjectList;