import React from 'react';

const _starsImg = {
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

const Stars = (props) => (
  <img className='stars' src={`${_starsImg[props.rating]}`}></img>
);

export default Stars;
