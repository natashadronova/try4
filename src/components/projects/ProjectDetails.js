import React from 'react'
import { firestore } from 'firebase';
import {connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const ProjectDetails=(props) =>{
  // const id=props.match.params.id;
  
  const {order}=props;
  if(order) {
    return(
    <div className="container section project-details">
       <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Drink</th>
            <td>{order.drink}</td>
          </tr>
          <tr>
            <th>Size</th>
            <td>{order.size}</td>
          </tr>
          <tr>
            <th>Extras</th>
            <td>{order.extras}</td>
          </tr>
          <tr>
          <th>Ordered</th>
            <td>{order.date}</td>
          </tr>
        </tbody>
        </table>
    </div>)
  } else {
    return(
      <div className='container center'>
      <p>Loading order...</p>
      </div>
    )
  }
  
};

const mapStateToProps=(state,ownProps)=>{
  const id=ownProps.match.params.id;
  const orders=state.firestore.data.orders;
  const order=orders ? orders[id]:null;
  
  return {
    order:order
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'orders'}
  ])
) (ProjectDetails);
