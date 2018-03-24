import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

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
        <Link to='/login'>
          <Menu.Item name='Admin' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary  className="header">
          <Link to='/'>
            <Menu.Item name='Sawadee' />
          </Link>
          <Link to='LunchMenu'>
            <Menu.Item name='lunch menu' />
          </Link>
          <Link to='DinnerMenu'>
            <Menu.Item name='Dinner Menu'/>
          </Link>
          <Link to='Info'>
            <Menu.Item name='Info'/>
          </Link>
          <Link to='Cart'>
            <Menu.Item name='Cart'/>
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
