import React, { Component } from 'react';

import styles from "./CreateProject.module.css";
import M from "materialize-css";
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {

  componentDidMount() {
    M.AutoInit(); //to initialize  all elements
    //http://fullstackhybrid.com/using-materializecss-with-reactjs/
    
  }

  state = {
    drink: '',
    size: '',
    extras:'',
    other:'',
    date:Date.now()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
      
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
   this.props.createProject(this.state);
    console.log(this.state)
  }

  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add your order</h5>
         
          {/* ////////////////////////////////////////////////////////////////////// */}
          <div className=' section'>
            <div className="input-field col s12">
              <select ref='selections' onChange={this.handleChange} id='drink'>
              <option value="" disabled defaultValue>Choose your option</option>
                <option value="mocha">Mocha</option>
                <option value="latte">Latte</option>
                <option value="hot_chocolate">Hot Chocolate</option>
                <option value="flat_white">Flat White</option>
              </select>
              <label>Coffee</label>
            </div>
          </div>
          <div className='section'>
            <div className="input-field col s12">
              <select ref='selections' onChange={this.handleChange}  id='size'>
                <option value="small"  >Small</option>
                <option value="medium" defaultValue  >Medium</option>
                <option value="large"  >Large</option>
              </select>
              <label>Size</label>
            </div>
          </div>
          <div className='section'>
            <div className="input-field col s12">
              <select multiple onChange={this.handleChange}  id='extras'>
                <option value="" disabled  >Choose your option</option>
                <option value="soy_milk"  >Soy milk</option>
                <option value="almond_milk"  >Almond milk</option>
                <option value="caramel"  >Caramel topping</option>
                <option value="vanilla"  >Vanilla topping</option>
                <option value="hazelnut"  >Hazelnut topping</option>
                <option value="decaf"  >Decaf</option>
                <option value="extra_shot" onChange={this.handleChange} >Double shot</option>
              </select>
              <label>Extras</label>
            </div>
          </div>
          <div className='section'>
          <div className="input-field col s12">
            <label htmlFor="other">If other, please specify</label>
            <input type="text" id='other' placeholder="ex: Orange Juice" onChange={this.handleChange} />
          </div>
          </div>
          <div className='container'>
            <div className="input-field">
              <button className={"btn pink lighten-1 z-depth-0 " + styles.button}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    createProject:(project)=>dispatch(createProject(project))
  }
}

const mapStateToProps=(state)=>{
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CreateProject)
