import React from 'react';

const BusinessIndexDetail = props => (
  <div id='biz-index'>
    <li>
      <img src={`${props.business.image_url}`} width={100} />
      <h4>{props.business.title}</h4>
      <p>{props.business.price}</p>
      <p>{props.business.phone}</p>
      <p>{props.business.address1}</p>
      <p>{props.business.address2}</p>
    </li>
    <br />
  </div>
);

export default BusinessIndexDetail;
