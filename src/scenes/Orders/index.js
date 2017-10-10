import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

const Orders = () => (
  <div>
    <h1>Orders</h1>
  </div>
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));