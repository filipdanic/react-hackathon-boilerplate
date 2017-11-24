import React, { Component } from 'react';
import { connect } from 'react-redux';

class Maps extends Component {
  render() {
    return (
      <div>
        <p>This is the Maps component</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
