import React from 'react';
import BusinessIndex from './biz/business_index';
import BusinessMap from './map/business_map';

class SearchResults extends React.Component {

  render() {
    return (
      <div>
        <BusinessIndex />
        <BusinessMap />
      </div>
    );
  }

}

export default SearchResults;
