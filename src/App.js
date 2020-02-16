import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import HatsPage from './pages/hatspage/hatspage.component'
import './App.css';
import { Switch, Route } from 'react-router-dom';


function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
