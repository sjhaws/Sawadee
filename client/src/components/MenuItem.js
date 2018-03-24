import React, { Component } from 'react';
import { Input, Header, Button, Card } from 'semantic-ui-react';
import axios from "axios";

const MenuItem = (menu) => (
  <div className="ui container">
      <div key={menu.id} className="ui card two wide column">
      <h2>{menu.name}</h2>
      <h3>${menu.price}</h3>
      <h3>{menu.description}</h3>
      <h3>{menu.dietary}</h3>
    </div>
  </div>
)

export default MenuItem;