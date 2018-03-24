import React, { Component } from 'react';
import { Input, Header, Button, Card } from 'semantic-ui-react';
import axios from "axios";

class LunchMenu extends Component {
  state = {menus: []}

  componentDidMount(){
    axios.get("/api/menus")
      .then(res => this.setState({menus: res.data}))
  }

  render() {
    return (
      <div>
      <Header as='h1' textAlign='center'>Lunch Menu</Header>
        {/* { this.state.map( menu => 
          <div key={menu.id} className="ui card two wide column">
          <h2>{menu.name}</h2>
          <h3>${menu.price}</h3>
          <h3>{menu.description}</h3>
          <h3>{menu.dietary}</h3>
        </div>
        )} */}
      </div>
    );
  }
}

export default LunchMenu;
