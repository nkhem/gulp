import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

import MarkerManager from './marker_manager';

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297  - 0.06},
  zoom: 12,
  zoomControl: true,
  scaleControl: true,
  scrollwheel: false,
  disableDoubleClickZoom: false
};

class SearchMap extends React.Component {
  constructor(props) {
    super(props);
    this.markerManager = null;
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('search-map'), _mapOptions);
    this.markerManager = new MarkerManager(this.map);
    this.updateMarkers(this.props.businesses);
  }

  componentDidUpdate() {
    this.updateMarkers(this.props.businesses);
  }

  updateMarkers(){
    this.markerManager.updateMarkers(this.props.businesses);
  }

  render() {
    return (
      <div className='map' id='search-map' />
    );
  }
}

export default withRouter(SearchMap);
