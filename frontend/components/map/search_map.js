import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import _ from 'lodash';

import MarkerManager from './marker_manager';

let _mapOptions = {
  center: {lat: 37.773972 - 0.01, lng: -122.431297  - 0.09},
  zoom: 12
};

class SearchMap extends React.Component {
  constructor(props) {
    super(props);
    this.markerManager = null;
    this.state = {
      businesses: []
    };
  }

  componentDidMount() {
    const mapNode = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(mapNode, _mapOptions);
    this.markerManager = new MarkerManager(this.map, this.props.router);

    this.setState({businesses: this.props.businesses});
    this.updateMarkers(this.state.businesses);
  }

  componentDidUpdate() {
    let currentBusinesses = this.state.businesses;
    let nextBusinesses = this.props.businesses;

    if (!_.isEqual(currentBusinesses, nextBusinesses)) {
      this.setState({
        businesses: nextBusinesses
      });

      this.updateMarkers(nextBusinesses);
    }
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
