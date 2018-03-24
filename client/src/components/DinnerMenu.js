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
      <Header as='h1' textAlign='center'>Dinner Menu</Header>
      <div>
        <button class="huge ui button">
        <a href="https://www.doordash.com/store/sawadee-utah-thai-restaurant-salt-lake-city-130244/?utm_campaign=gpa" target="_blank">
        Order Now
        </a>
        </button>
      </div>
      <br />
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
