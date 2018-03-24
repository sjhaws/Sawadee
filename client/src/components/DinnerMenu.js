import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from "axios";
import MenuItem from "./MenuItem";

class DinnerMenu extends Component {
  state = {menus: []}

  componentDidMount(){
    axios.get("/api/menus")
      .then(res => this.setState({menus: res.data}))
  }

  render() {
    return (
      <div className="ui container">
      <br />
      <Header as='h1' textAlign='center'>Dinner Menu</Header>
        <div className="ui grid">
          { this.state.menus.map( menu => 
            <MenuItem {...menu}/>
          )}
        </div>
      </div>
    );
  }
}

export default DinnerMenu;
