import React, { Component } from 'react';
import { connect } from 'react-redux';

class FourOuhFour extends Component {
  render() {
    return (
      <div>
        <p>404</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(FourOuhFour);
