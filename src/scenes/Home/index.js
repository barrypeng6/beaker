import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));