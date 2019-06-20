import React from 'react'
import { firestore } from 'firebase';

export default function ProjectDetails(props) {
  //HOW TO PASS PROJECT DETAILS FROM PROJECT SUMMARY PAGE TO HERE???
  //console.log('our props:'+props);
  //const id=props.this.state.ordered.orders.id;
  //props.match.params.id;
  return (
    <div className="container section project-details">
   
    {/* <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Drink</th>
            <td>{project.drink}</td>
          </tr>
          <tr>
            <th>Size</th>
            <td>{project.size}</td>
          </tr>
          <tr>
            <th>Extras</th>
            <td>{project.extras}</td>
          </tr>
          <tr>
          <th>Ordered</th>
            <td>{project.date}</td>
          </tr>
        </tbody>
        </table> */}
      {/* <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Order-{id} </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, fugiat quis odio nesciunt dolor delectus iste, accusamus libero dolorem atque reprehenderit numquam! Reiciendis quas sequi dicta molestiae nostrum laborum magnam!</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Nat</div>
          <div>3June 2019</div>
        </div>
      </div> */}
    </div>
  )
}


