import React, { Component } from 'react';
import { Header, Divider } from 'semantic-ui-react';
import "../index.css"

class About extends Component {

  render() {
    return (
    <div class="ui centered grid">
      <div class="ten wide column">
        <Divider horizontal>About Us</Divider>
        <p>
        <h4 class="Hquote">
        <em>
        Sawadee will treat your taste buds to the finest in Thai cooking.
        </em>
        </h4>
          <br/>

          Indulge yourself in the classic cuisine Sawadee offers.  Many people think of Thai food as spicy. In truth dishes run the gamut from pleasantly mild to piquantly spicy. At Sawadee Thai Restaurant individual dishes are adjusted to taste with our superb sauces and dips. Sawadee has over 50 dishes on her menu including classic Pad Thai with shrimp and crisp vegetables, seafood with zesty Nam Phrik chili sauce, Barbecued chicken or Skewered pork with sweet Nam Jim Kai sauce. For the curry lover, Sawadee prepares red, yellow and green curry dishes, each with their subtle differences. Sawadee Thai Restaurant is truly an adventure.
          <br/>

          <blockquote>City Weekly Magazine praised Sawadee's cooking as, <em>"The most authentic Thai eating experience in Utah."</em>
          </blockquote>
          <blockquote>The Deseret News said of Sawadee's cooking, <em>"I suggest it heartily for seasoned Thai lovers and newbies alike."</em>
          </blockquote>
          <blockquote>Writer Joan Oviatt has declared, <em>"Sawadee is by far my favorite Thai chef. Her dishes delight the palate."</em>
          </blockquote>
        </p>
      </div>
    </div>
    );
  }
}

export default About;
