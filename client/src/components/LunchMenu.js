import React, { Component } from 'react';
import { Input, Header, Button, Card } from 'semantic-ui-react';
import axios from "axios";
import MenuItem from "./MenuItem";

class LunchMenu extends Component {
  state = {menus: []}

  componentDidMount(){
    axios.get("/api/menus")
      .then(res => this.setState({menus: res.data}))
  }

  render() {
    return (
      <div className="ui container">
      <Header as='h1' textAlign='center'>Lunch Menu</Header>
        { this.state.menus.map( menu => 
          <MenuItem {...menu} />
        )}
      </div>
    );
  }
}

export default LunchMenu;
