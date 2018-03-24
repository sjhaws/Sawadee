import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
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
          <Link to='LunchMenu'>
            <Menu.Item name='lunch menu' />
          </Link>
          <Link to='DinnerMenu'>
            <Menu.Item name='Dinner Menu'/>
          </Link>
          <Link to="Logout">
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
          </Link>
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
        <Link to='LunchMenu'>
          <Menu.Item name='lunch menu' />
        </Link>
        <Link to='DinnerMenu'>
          <Menu.Item name='Dinner Menu'/>
        </Link>
        <Link to="/register">
          <Menu.Item name="Register" />
        </Link>
        <Link to="/login">
          <Menu.Item name="Login" />
        </Link>
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
          <Menu.Item>
             <Button compact basic size='small' color="orange" href="https://www.doordash.com/store/sawadee-utah-thai-restaurant-salt-lake-city-130244/?utm_campaign=gpa" target="_blank">

             Order Now

             </Button>
           </Menu.Item>
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
