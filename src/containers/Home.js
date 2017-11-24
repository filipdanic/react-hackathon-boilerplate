import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className="card" style={{ maxWidth: 420 }}>
        <div className="card-image">
          <img
            alt="Concert"
            src="https://cdn.fstoppers.com/styles/full/s3/media/2015/10/1_bush_sean_molin_concert_music_photography_fstoppers.jpg"
            className="img-responsive"
          />
        </div>
        <div className="card-header">
          <div className="card-title h5">Home</div>
          <div className="card-subtitle text-gray">This is the home component.</div>
        </div>
        <div className="card-body">
          <p>Well, it’s actually a <code>Card</code> component inside of the Home container. This boilerplate is running with the following: React, React-Router, Redux, and SpectreCSS.</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Yahoo!</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
