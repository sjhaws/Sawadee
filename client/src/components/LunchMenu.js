import React, { Component } from 'react';
import { Input, Header, Button, Card } from 'semantic-ui-react';
import axios from "axios";
import Jer from "./MenuItem";


class LunchMenu extends Component {
  state = {menus: []}

  componentDidMount(){
    axios.get("/api/menus")
      .then(res => this.setState({menus: res.data}))
  }

  render() {
    return (
      <div className="ui container">
      <br />
      <Header as='h1' textAlign='center'>Lunch Menu</Header>
        <div className="ui grid">
          { this.state.menus.map( menu => 
            <Jer {...menu}/>
          )}
        </div>
      </div>
    );
  }
}

export default LunchMenu;
