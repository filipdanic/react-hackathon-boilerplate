import React, { Component } from 'react';
import { connect } from 'react-redux';

class Forms extends Component {
  render() {
    return (
      <div>
        <h1>Forms</h1>
        <p>I’ll be wrapping various form elements from <a href="https://picturepan2.github.io/spectre/elements.html#forms">here.</a></p>
        <p>Some random examples:</p>
        <div style={{ width: 420 }}>
          <h2>Inputs</h2>
          <div className="form-group">
            <label className="form-label" htmlFor="input-example-1">Name</label>
            <input className="form-input" type="text" id="input-example-1" placeholder="Name" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="input-example-2">Chat</label>
            <select className="form-select" name="input-example-2" id="input-example-2">
              <option>Choose an option</option>
              <option>Slack</option>
              <option>Skype</option>
              <option>Hipchat</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-switch">
              <input type="checkbox" />
              <i class="form-icon"></i> Send me emails with news and tips
            </label>
          </div>

          <div className="has-icon-right">
            <input type="text" className="form-input" placeholder="..." />
            <i className="form-icon loading"></i>
          </div>

          <hr />
          <h2>Some Buttons</h2>
          <p><button className="btn">default button</button></p>
          <p><button className="btn btn-primary">primary button</button></p>
          <p><button className="btn btn-link">link button</button></p>
          <p><button className="btn loading">button</button></p>
        </div>


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

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
