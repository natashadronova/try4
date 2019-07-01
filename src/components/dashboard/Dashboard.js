import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  
  render() {
    const { projects, auth,notifications,authors } = this.props;
   
    if (!auth.uid) return <Redirect to='/signin'/>
      return (
      <div className="dashboard container">
        <div className="row">
          <div className="col1 s12 m6">
            <ProjectList projects={projects} auth={auth} />
          </div>
          <div className="col2 s12 m4 offset-m1">
            <Notifications notifications={notifications}/>
          </div>

        </div>

      </div>
      )
  
  
    }
  
  }
  
const mapStateToProps = (state) => {
 
  return {
      projects: state.firestore.ordered.orders,
      auth:state.firebase.auth,
      notifications:state.firestore.ordered.notifications,
      
    }
  
  }
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
    {collection: 'orders', orderBy:[['drink'], ['size'], ['extras'], ['submitted']] },

    {collection: 'notifications',limit:3, orderBy: ['time','desc']}
    ])
)(Dashboard);