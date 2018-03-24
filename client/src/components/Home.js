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

<<<<<<< HEAD

          <div>
          <About />
          </div>
          </div>
=======
        <div class="aboutContainer">
          <About />
        </div>
      </div>
>>>>>>> cb257a1c3bb95475a89ae4853d6694fc7c8c137b

    );
  }
}

export default Home;
