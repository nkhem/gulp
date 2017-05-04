import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

import MarkerManager from './marker_manager';

let _mapOptions = {
  center: {lat: 37.773972 + 0.01, lng: -122.431297  - 0.05},
  zoom: 13
};

class SearchMap extends React.Component {
  constructor(props) {
    super(props);
    this.markerManager = null;
  }

  componentDidMount() {
    const mapNode = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(mapNode, _mapOptions);
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
      <div ref='map' className='map' id='search-map' />
    );
  }
}

export default withRouter(SearchMap);
