import React, { Component } from 'react';
<<<<<<< HEAD
import { Header, Image } from 'semantic-ui-react';
import logo from '../images/Sawadee-White.png';
=======
import { Header } from 'semantic-ui-react';
import About from './About';

>>>>>>> e0b15bec39ddfb70d2ee374fbe51531a839fd611

class Home extends Component {
  render() {
    return (
<<<<<<< HEAD
        <div className="filtered">
          <div className="heroimg">
            <div className="herologo" centered>
              <Image src={logo} size='large' verticalAlign='middle'  />
            </div>
          </div>
        </div>
=======
      <div>
        <Header as='h1' textAlign='center'>Sawadee Thai</Header>

        <About />
      </div>
>>>>>>> e0b15bec39ddfb70d2ee374fbe51531a839fd611
    );
  }
}

export default Home;
