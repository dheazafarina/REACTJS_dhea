import React from 'react';
import axios from 'axios'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import white from './assets/Nav Drawer White.png';
import Menu from './Menu';

class Login extends React.Component {
  initialState = {
    name: '',
    password: '',
    token_type: '',
    access_token: ''
  }
  state = this.initialState

  // support@technopartner.id 1234567
  getAccess = () => {
    axios.post('http://staging.co.id/tpid-test/oauth/access_token', {
      'client_secret': '0a40f69db4e5fd2f4ac65a090f31b823',
      'client_id': 'e78869f77986684a',
      'grant_type': 'password',
      'username': this.state.name,
      'password': this.state.password
    })
    .then(res => 
      console.log(res),
      this.setState({
        access_token: 'KUW8livLIUb9CjmgDaNgIqqVAYvpNUDUv4m9r4b9',
        token_type: 'Bearer'
      }),
      this.login()
    )
    .catch(e => console.log(e))
  }
  login = () => {
    axios.post('http://staging.co.id/tpid-test/api/login', {
      headers: {
        'Authorization': `Bearer KUW8livLIUb9CjmgDaNgIqqVAYvpNUDUv4m9r4b9`
      },
      body: {
        'username': this.state.name,
        'password': this.state.password
      }
    })
    .then(r => 
      console.log(r)
    )
    .catch(e => console.log(e))
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render(){
    const { name, password } = this.state;
    return(
      <BrowserRouter>
        <div>
          <main>
            <Route path='/menu' exact component={Menu} />
          </main>
        </div>

        <div className="App-login" style={{padding: '20px'}}>
          <div>
            <img src={white} style={{width: '10%'}} alt=""/>
            <div className="title"><b>Login</b></div>

            <div style={{marginTop: '5vh', marginBottom: '10px'}}>Email address</div>
            <input type='text' className="input-login" name="name" id="name" value={name} onChange={this.handleChange}/>

            <div style={{marginTop: '10px', marginBottom: '10px'}}>Password</div>
            <input type='password' className="input-login" name="password" id="password" value={password} onChange={this.handleChange}/>

            <button className="btn-login" onClick={this.getAccess}>LOGIN</button>
            <div className="center f15">
              <p>Not registered yet? Sign up here</p>
              <p>Forgot password?</p>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Login;