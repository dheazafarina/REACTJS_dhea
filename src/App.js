import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div>
          <main>
            <Route path='/home' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/menu' exact component={Menu} />
          </main>
        </div>
    </BrowserRouter>
  );
}

export default App;

