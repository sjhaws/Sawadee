import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import About from './About';


class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Sawadee Thai</Header>

        <About />
      </div>
    );
  }
}

export default Home;
