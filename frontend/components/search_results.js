import React from 'react';
import BusinessIndex from './biz/business_index';
import BusinessMap from './map/business_map';

const SearchResults = props => (
  <div>
    <BusinessIndex />
    <BusinessMap />
  </div>
);

export default SearchResults;
