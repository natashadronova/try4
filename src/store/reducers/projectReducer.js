const initState={
  projects: [
    {id:'1', drink:'Coffee Latte', size:'S', extras:'Hazelnut topping'}
    ,{id:'2', drink:'Chai Latte', size:'M', extras: 'Soy Milk'}
    ,{id:'3', drink:'Flat White', size:'L'}
  ]


}
const projectReducer=(state=initState,action)=>{
  return state;
}

export default projectReducer