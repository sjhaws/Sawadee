import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import logo from "../images/Sawadee-Full-Logo@2x.png";

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        {/* <Link to='/register'>
          <Menu.Item name='Register' />
        </Link> */}
          <Menu.Item>
          <div className="ui menu">
            <a className="browse item active">
              Account
              <i className="dropdown icon"></i>
            </a>
          </div>
          <div className="ui fluid popup bottom left transition visible animating scale out">
          <div class="ui four column relaxed equal height divided grid">
            <div className="column">
            <div className="ui link list">
              <Link to='Login' className="item">
                <Menu.Item name='Login'/>
              </Link>
              <Link to='Cart' className="item">
                <Menu.Item name='Order Online'/>
              </Link>
              </div>
            </div>
            </div>
          </div>
          </Menu.Item>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary  className="header">
          <Link to='/'>
            <img src={logo} alt="logo" className="toplogo" />
          </Link>
          <Link to='LunchMenu'>
            <Menu.Item name='lunch menu' />
          </Link>
          <Link to='DinnerMenu'>
            <Menu.Item name='Dinner Menu'/>
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
