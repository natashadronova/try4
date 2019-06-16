import React, { Component } from 'react';

import styles from "./CreateProject.module.css";
import M from "materialize-css";

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
   
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add your order</h5>
          {/* <div className="input-field">
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
                <input type="checkbox" id='vanilla' name='vanilla' value='vanilla' className='col s12 m6 l3' />
                <span>None</span>
              </label>
              <label>
                <input type="checkbox" className="col s12 m6 l3" />
                <span>Hazelnut</span>
              </label>
              <label>
                <input type="checkbox" id='vanilla' name='vanilla' value='vanilla' className='col s12 m6 l3' />
                <span>Vanilla</span>
              </label>
              <label>
                <input type="checkbox" className="col s12 m6 l3" />
                <span>Caramel</span>
              </label>
            </p>
            <input type="text" id='size' onChange={this.handleChange} />
          </div> */}


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

export default CreateProject
