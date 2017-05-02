import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

import MarkerManager from './marker_manager';

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
  zoom: 13
};

class SearchMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('search-map'), _mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  render() {
    return (
      <div id='search-map' />
    );
  }
}

export default withRouter(SearchMap);
