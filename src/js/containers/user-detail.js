import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetail extends Component {
  
  render() {
    if (!this.props.user) {
      return (<h4>Please select a user...</h4>);
    } else {
      return (    
        <div>
          <h2>{this.props.user.first} {this.props.user.last}</h2>
          <h3>Age: {this.props.user.age}</h3>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
