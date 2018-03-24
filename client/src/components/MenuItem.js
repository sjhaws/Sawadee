import React, { Component } from 'react';
import { Input, Header, Button, Card } from 'semantic-ui-react';
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Jer extends Component {
  state = {user: {} }

  componentDidMount(){
    axios.get("/api/users")
    .then( res => this.setState({user: res.data}))
  }

  render() {
    const { user, dispatch, history } = this.props;
    
    return (
      <Card key={this.props.id} className="ui card five wide column ard">
      <h2>{this.props.name}</h2>
      <h3>${this.props.price}</h3>
      <h3>{this.props.description}</h3>
      <h3>{this.props.dietary}</h3>

      { user.role === "admin" && 
          <Button>Edit Menu Item</Button>
      }

    </Card>
    )
  }
}


const mapStateToProps = state => {
  return { user: state.user };
 };
 
 export default withRouter(connect(mapStateToProps)(Jer));