import React, { Component } from 'react';


import { Header, Image, Grid, Button, Segment } from 'semantic-ui-react';

import logo from '../images/Sawadee-White.png';
import About from './About';



class Home extends Component {
  render() {
    return (
      <div>
        <div className="filtered">
          <div className="heroimg">
            <div className="herologo" centered>
              <Image src={logo} size='large' verticalAlign='middle'  />
            </div>
          </div>
        </div>

        <div class="aboutContainer">
          <About />
        </div>
      </div>

    );
  }
}

export default Home;
