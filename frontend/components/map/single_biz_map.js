import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

import MarkerManager from './marker_manager';

class SingleBizMap extends React.Component {

  componentDidMount() {
    const _mapOptions = {
      center: {lat: this.props.business.lat, lng: this.props.business.lng - 0.008},
      zoom: 15
    };
    const mapNode = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(mapNode, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.setMarker(this.props.business);
  }

  render() {
    return (
      <div ref='map' className='map' id='single-biz-map' />
    );
  }
}

export default withRouter(SingleBizMap);
