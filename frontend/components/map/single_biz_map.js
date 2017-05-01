import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

import MarkerManager from './marker_manager';

class SingleBizMap extends React.Component {

  componentDidMount() {
    const _mapOptions = {
      center: {lat: this.props.business.lat, lng: this.props.business.lng},
      zoom: 15
    };

    this.map = new google.maps.Map(document.getElementById('single-biz-map'), _mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.addMarker(this.props.business);
  }

  render() {
    return (
      <div id='single-biz-map' />
    );
  }
}

export default withRouter(SingleBizMap);
