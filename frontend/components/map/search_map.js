import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

import MarkerManager from './marker_manager';

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297},
  zoom: 13
};

class SearchMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('search-map'), _mapOptions);
    this.map.setOptions({ scrollwheel: false });
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  render() {
    return (
      <div className='map' id='search-map' />
    );
  }
}

export default withRouter(SearchMap);
