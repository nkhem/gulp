import React from 'react';
import { withRouter } from 'react-router';

import YelpSection from '../yelp/yelp_section';

class BusinessIndexDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.router.replace(`/business/${this.props.business.id}`);
  }

  render() {
    const biz = this.props.business;
    return (
      <div id={`${biz.id}`} className="biz-index-detail" onClick={this.handleClick.bind(this)}>
        <img src={`${biz.image_url}`} width={100} />
        <div className="info-box">
          <h3>{biz.title}</h3>
          <p>{biz.price}</p>
          <p>{biz.phone}</p>
          <p>{biz.address1}</p>
          <p>{biz.address2}</p>
        </div>

        <YelpSection
          className='biz-index-yelp'
          rating={biz.rating}
          yelpUrl={biz.yelp_url}
           />

      </div>
    );
  }

}

export default withRouter(BusinessIndexDetail);
