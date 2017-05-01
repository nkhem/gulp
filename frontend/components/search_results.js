import React from 'react';
import { connect } from 'react-redux';

import BusinessIndex from './biz/business_index';
import BusinessMap from './map/business_map';

const SearchResults = props => (
  <div>
    <BusinessIndex />
    <BusinessMap
      businesses={props.businesses} />
  </div>
);

const mapStateToProps = state => {
  return { businesses: state.businesses.list };
};

export default connect(
  mapStateToProps,
  null
)(SearchResults);
