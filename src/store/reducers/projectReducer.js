const initState={
  projects: [
    {id:'1', drink:'Coffee Latte', size:'S', extras:'Hazelnut topping'}
    ,{id:'2', drink:'Chai Latte', size:'M', extras: 'Soy Milk'}
    ,{id:'3', drink:'Flat White', size:'L'}
  ]


}
const projectReducer=(state=initState,action)=>{
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created_project',action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer