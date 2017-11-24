import React, { Component } from 'react';
import { connect } from 'react-redux';
import GMap from '../components/GMap';

class Maps extends Component {
  render() {
    return (
      <div>
        <p>This is the Maps component.</p>
        <GMap
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '640px', width: '800px' }} />}
          mapElement={<div style={{ height: '640px' }} />}
        />
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
