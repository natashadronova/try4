import React from 'react';
import ProjectSummary from './ProjectSummary';



const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      <table>
        <thead>
          <tr>
            <th>Drink</th>
            <th>Size</th>
            <th>Additions</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        
      {projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} drink={project.drink} size={project.size} extras={project.extras}/>
        )
      })}
      
        </tbody>
      </table>
    </div>
  )

}


export default ProjectList;