import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { user } = this.props.globalState;
    return (
      <div className="App">
        <p>Hey, {user.name}! This boilerplate is running React and Redux.</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  globalState: state.globalState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
