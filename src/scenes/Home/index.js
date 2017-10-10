import React from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);