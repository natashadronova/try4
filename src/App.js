import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import EditProject from './components/projects/EditProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/order/:id/edit' component={EditProject}/>
          <Route path='/order/:id' component={ProjectDetails}/>
          
          <Route  path='/signin' component={SignIn}/>
          <Route  path='/signup' component={SignUp}/>
          <Route  path='/createproject' component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
