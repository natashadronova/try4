import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    //  console.log(this.props);
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col1 s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col2 s12 m4 offset-m1">
            <Notifications />
          </div>

        </div>

      </div>
    )


  }

}

const mapStateToProps = (state) => {
 
  return {
    projects: state.firestore.ordered.orders
  }

}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'orders' }
  ])
)(Dashboard);