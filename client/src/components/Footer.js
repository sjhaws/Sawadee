import React, { Component } from 'react';
import "../index.css"

class Footer extends Component {

  render() {
    return (
    <div class="footWrap">
      <div class="ui grid">
        <div class="center aligned three column row">
          <div class="column">
            <h5>Location</h5>
            <p>754 East South Temple Street<br/>
            Salt Lake City, Utah 84102
            </p>
          </div>

          <div class="column">
            <div class="two column row">
                <h5>Hours</h5>
              <div class="column">
              <p>
                <strong>Lunch: </strong>
                Monday - Saturday
                <br/>
                11:00 AM - 3:00 PM
              </p>
              </div>
              <div class="column">
              <br/>
              <p>
                <strong>Dinner: </strong>
                Monday - Thursday
                <br/>
                5:00 PM - 9:30 PM
                <br/>
                Firday - Saturday
                <br/>
                5:00 PM - 10:00PM
                </p>
              </div>
              <br/>
              <p>
                Sunday: CLOSED
              </p>
            </div>
          </div>

          <div class="column">
          <h5>Contact</h5>
          <p><a href="tel:1-801-328-8424">Phone: 801-328-8424</a>
          <br/>
          <a href="mailto:info@sawadee1.com">Email: info@sawadee1.com</a>
          </p>
          <br/>
          <div class="socialmedia">
          <button class="ui facebook button">
          <a href="https://www.facebook.com/" target="_blank">
          <i class="facebook icon"></i>
          facebook
          </a>
          </button>
          <button  class="ui twitter button">
          <a href="https://www.twitter.com/" target="_blank">
          <i class="twitter icon"></i>
          Twitter
          </a>
          </button>
          <button class="ui instagram button">
          <a href="https://www.instagram.com/" target="_blank">
          <i class="instagram icon"></i>
          Instagram
          </a>
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


export default Footer;
