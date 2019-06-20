import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';


const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/signup">Sign Up</NavLink></li>
      <li><NavLink to="/signin">Log In</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedOutLinks);