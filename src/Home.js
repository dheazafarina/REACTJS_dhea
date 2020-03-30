import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import white from './assets/Nav Drawer White.png';
import Login from './Login';
import './App.css';

class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Route path='/login' exact component={Login} />
          </main>
        </div>
      
        <div>
          <header className="App-header">
            <div style={{padding: '20px'}}>
              <img src={white} style={{width: '10%'}} alt=""/>
              <p>
                Good Morning
              </p>
            </div>
            <div className="buttons">
              <button className="button signup">SIGN UP</button>
              <button path="/login" className="button login"><Link to="/login">LOGIN</Link></button>
            </div>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;

