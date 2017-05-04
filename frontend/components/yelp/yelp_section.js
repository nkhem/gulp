import React from 'react';
import Stars from './stars';

const YelpSection = (props) => {
  return (
    <div className={props.className}>
      <Stars rating={props.rating} />
      <a href={props.yelpUrl} target="_blank">
        <img
          className='yelp-logo'
          src="http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493840751/Yelp_burst_positive_RGB_tmqdjp.png" />
      </a>
    </div>
  );
};

export default YelpSection;
