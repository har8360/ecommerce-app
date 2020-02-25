import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatspage/hatspage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import './App.css';
import { Switch, Route } from 'react-router-dom';


function App(props) {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
