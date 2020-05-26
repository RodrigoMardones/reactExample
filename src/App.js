import React from 'react';
import './App.css';
import Home from './pages/home';
import Details from './pages/details';
import NotFound from './pages/notfound';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Switch>
        <Route  exact path='/' component={Home}/>
        <Route path='/details/:id' component={Details} />
        <Route component={NotFound} />
    </Switch>
  )

}



export default App;
