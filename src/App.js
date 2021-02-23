import './App.css';

import {  Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/header/header.component';
import Cart from './pages/cart/cart';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/home-page';
function App() {
  return (
    
    <div>
    
      <Header />
      
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/cart' component = {Cart} />
        </Switch>
     
      
    </div>
    
  );
}

export default App;
