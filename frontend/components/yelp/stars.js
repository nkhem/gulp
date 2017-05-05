import React from 'react';

export const starsImgUrl = {
  0: 'http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493952146/small_0_2x_xjv7mu.png',
  1:'http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493927918/stars1_ax3kwq.png',
  1.5:'http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493927918/stars1.5_qglzjx.png',
  2:'http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493927918/stars2_mx6w0n.png',
  2.5:'http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493927918/stars2.5_w5sdjk.png',
  3:'http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493927918/stars3_aftixg.png',
  3.5:'http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493927918/stars3.5_vcxeqe.png',
  4:'http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493927918/stars4_nfjet3.png',
  4.5:'http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493927918/stars4.5_xuverj.png',
  5: 'http://res.cloudinary.com/dx0y3rkfs/image/upload/v1493927918/stars5_aht6hn.png',
};

export const Stars = (props) => (
  <img className='stars' src={`${starsImgUrl[props.rating]}`}></img>
);
