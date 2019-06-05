import React from 'react';

const ProjectSummary = (project) => {

  return (
    

    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.drink}</span>
        <p>Posted by Nat</p>
        <p className="grey-text">03 June 2019</p>
      </div>
    </div>

  )

}

export default ProjectSummary;