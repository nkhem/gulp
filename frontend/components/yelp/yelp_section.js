import React from 'react';
import Stars from './stars';

const YelpSection = (props) => {
  return (
    <div className='yelp-section'>
    <a href={props.yelp_url} target="_blank">
      <img src="http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493840751/Yelp_burst_positive_RGB_tmqdjp.png"></img>
    </a>
    <p>{props.rating}</p>
    <Stars rating={props.rating} />
    </div>
  );
};

export default YelpSection;
