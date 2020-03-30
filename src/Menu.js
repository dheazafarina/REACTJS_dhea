import React from 'react';
import black from './assets/Nav Drawer Black.png';

class Menu extends React.Component {
  constructor(){
    super();
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