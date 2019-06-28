import React from 'react';
import ProjectSummary from './ProjectSummary';



const ProjectList = ({ projects,auth }) => {
  
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
           
            function checkAuthor()  {
              if (project.authorID===auth.uid) {
               
                return true
              }
            }
            return (

              <ProjectSummary project={project} key={project.id} drink={project.drink} size={project.size} extras={project.extras} authored={checkAuthor()}
              /> // 
            )
          })}

        </tbody>
      </table>
    </div>
  )

}


export default ProjectList;