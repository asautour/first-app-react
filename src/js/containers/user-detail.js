import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class UserDetail extends Component {

  
  render() {
    return (
      <ul>
        
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(UserDetail);
