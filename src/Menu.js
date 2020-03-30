import React from 'react';
import axios from 'axios'
import black from './assets/Nav Drawer Black.png';

class Menu extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    axios.get('http://staging.co.id/tpid-test/api/menu/list', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer KUW8livLIUb9CjmgDaNgIqqVAYvpNUDUv4m9r4b9`
      }
    })
    .then(result => result.json())
    .then(result => {
      this.setState({
        data: result,
      })
    })
  }

  render(){
    return(
      <div style={{padding: '20px'}}>
        <div>
          <img src={black} style={{width: '10%'}} alt=""/>
          <div className="title">Menu</div>
        </div>
      </div>
    );
  }
}

export default Menu;