import React, { Component } from 'react';

import styles from "./CreateProject.module.css";

class CreateProject extends Component {
  // constructor(props) {
  // super(props);
  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('select');
  //   var instances = M.FormSelect.init(elems, options);
  // }); 
  // $(document).ready(function(){
  //   $('select').formSelect();
  // });


  // }

  // componentDidMount() {
  //   var elems = document.querySelectorAll('#drink');
  //   var instances = M.FormSelect.init(elems, options);
  // }

  state = {
    drink: '',
    size: ''


  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  } 

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add your order</h5>
          <div className="input-field">
            <label htmlFor="drink">Drink</label>
            <input type="text" id='drink' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Size">Size (S / M / L)</label>
            <input type="text" id='size' onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <h6 className="grey-text text-darken-3">Any toppings?</h6>
            <p>
              <label>
                <input type="checkbox" id='vanilla' name='vanilla' value='vanilla' className='col s12 m6 l3'/>
                <span>None</span>
              </label>
              <label>
                <input type="checkbox"  className="col s12 m6 l3" />
                <span>Hazelnut</span>
              </label>
              <label>
                <input type="checkbox" id='vanilla' name='vanilla' value='vanilla' className='col s12 m6 l3'/>
                <span>Vanilla</span>
              </label>
              <label>
                <input type="checkbox"  className="col s12 m6 l3" />
                <span>Caramel</span>
              </label>
            </p>
            <input type="text" id='size' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className={"btn pink lighten-1 z-depth-0 " + styles.button}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject
