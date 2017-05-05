import React from 'react';
import { connect } from 'react-redux';

import BusinessIndex from './biz/business_index';

const SearchResults = props => (
  <div className='search-results-container'>
    <BusinessIndex />
  </div>
);

const mapStateToProps = state => {
  return { businesses: state.businesses.list };
};

export default connect(
  mapStateToProps,
  null
)(SearchResults);
