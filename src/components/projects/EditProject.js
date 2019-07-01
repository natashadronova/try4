import React, { Component } from 'react';
import styles from "./CreateProject.module.css";
import M from "materialize-css";
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Select from 'react-select';
import Firebase from '../../config/fbConfig';

const size = [
  { value: 'Small', label: 'Small' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Large', label: 'Large' },
];

const drink = [
  { value: 'Mocha', label: 'Mocha' },
  { value: 'Latte', label: 'Latte' },
  { value: 'Hot Chocolate', label: 'Hot Chocolate' },
  { value: 'Flat White', label: 'Flat White' }
];

const extras = [
  { value: 'Soy milk', label: 'Soy milk' },
  { value: 'Almond milk', label: 'Almond milk' },
  { value: 'Caramel topping', label: 'Caramel topping' },
  { value: 'Vanilla topping', label: 'Vanilla topping' },
  { value: 'Hazelnut topping', label: 'Hazelnut topping' },
  { value: 'Decaf', label: 'Decaf' },
  { value: 'Double shot', label: 'Double shot' }
];

class EditProject extends Component {

  constructor(props) {
    super(props);

    this.state = {
        drink: '',
        size: '',
        extras: '',
        other:''
    };
}

  componentDidMount(props) {
    M.AutoInit(); //to initialize  all elements
    //http://fullstackhybrid.com/using-materializecss-with-reactjs/  
 }

  handleChange = (e) => {
    // console.log(this.props)
    this.setState({
      [e.target.id]: e.target.value
      
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
   this.props.createProject(this.state);
    console.log(this.state)
  };

  render() {
    const {auth, firestore, order} = this.props;
    if (!auth.uid)  return <Redirect to='/signin'/>;

    if (!order) {
      return (
        null
      );
    }

    // if (!order){
    //   const drink = 'Mocha';
    //   const extras = '';
    //   const size='Medium'
    // } else {
    //   const drink = order.drink;
    //   const extras=order.extras;
    //   const size=order.size;
    // }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add your order</h5>
         
          {/* ////////////////////////////////////////////////////////////////////// */}
          <div className='section'>
          {/* <Select value={selectedOption} onChange={this.handleChange}
        options={drink} ref='selections' className=''/>
          <Select value={selectedOption} onChange={this.handleChange}
        options={size} ref='selections' className=''/> */}
{/* {(order && order.drink)|| 'Mocha'}  */}
            <div className="input-field col s12">
              <select value={(order && order.drink)|| 'Mocha'} ref='selections' onChange={this.handleChange} id='drink'>
                <option defaultValue disabled>Choose your option</option>
                <option value="Mocha">Mocha</option>
                <option value="Latte">Latte</option>
                <option value="Hot chocolate">Hot Chocolate</option>
                <option value="Flat white">Flat White</option>
              </select>
              <label>Coffee</label>
            </div>
          </div>
          <div className='section'>
            <div className="input-field col s12">
              <select value={(order && order.size)|| 'Medium'} ref='selections' onChange={this.handleChange}  id='size'>
                <option value="Small"  >Small</option>
                <option value="Medium" defaultValue  >Medium</option>
                <option value="Large"  >Large</option>
              </select>
              <label>Size</label>
            </div>
          </div>
          <div className='section'>
            <div className="input-field col s12">
              <select multiple onChange={this.handleChange}  value={[(order && order.extras)|| '']} id='extras'>
                <option value="" disabled  >Choose your option</option>
                <option value="Soy Milk"  >Soy milk</option>
                <option value="Almond Milk"  >Almond milk</option>
                <option value="Caramel"  >Caramel topping</option>
                <option value="Vanilla"  >Vanilla topping</option>
                <option value="Hazelnut"  >Hazelnut topping</option>
                <option value="Decaf"  >Decaf</option>
                <option value="Extra shot" onChange={this.handleChange} >Double shot</option>
              </select>
              <label>Extras</label>
            </div>
          </div>
          <div className='section'>
          <div className="input-field col s12">
            {/* <label htmlFor="other">If other, please specify</label> */}
            <input type="text" id='other' value={(order && order.other)|| ''} placeholder="If other, please specify. Ex: Orange Juice" onChange={this.handleChange} />
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


// export default connect(mapStateToProps,mapDispatchToProps) (EditProject)

const mapStateToProps = (state, ownProps) => {
  const id=ownProps.match.params.id;
  const orders=state.firestore.data.orders;
  const order=orders ? orders[id]:null;
  console.log(order);
  return {
     // projects: state.firestore.ordered.order,
      order:order,
      auth:state.firebase.auth,
      // notifications:state.firestore.ordered.notifications,
      
    }
  
  }
  export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
    {collection: 'orders', orderBy:[['drink'], ['size'], ['extras'], ['submitted']] },

    {collection: 'notifications',limit:3, orderBy: ['time','desc']}
    ])
)(EditProject);