import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import logo from '../images/Sawadee-White.png';

class Home extends Component {
  render() {
    return (
        <div className="filtered">
          <div className="heroimg">
            <div className="herologo" centered>
              <Image src={logo} size='large' verticalAlign='middle'  />
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
