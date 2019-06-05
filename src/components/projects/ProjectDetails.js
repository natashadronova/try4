import React from 'react'

export default function ProjectDetails(props) {
  const id=props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Order-{id} </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, fugiat quis odio nesciunt dolor delectus iste, accusamus libero dolorem atque reprehenderit numquam! Reiciendis quas sequi dicta molestiae nostrum laborum magnam!</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Nat</div>
          <div>3June 2019</div>
        </div>
      </div>
    </div>
  )
}


