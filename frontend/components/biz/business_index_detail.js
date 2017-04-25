import React from 'react';

class BusinessIndexDetail extends React.Component {

  render() {
    return (
      <div id='biz-index' key={this.props.business.alias}>
        <li>
          <img src={`${this.props.business.image_url}`} width={100} />
          <h4>{this.props.business.title}</h4>
          <p>{this.props.business.price}</p>
          <p>{this.props.business.phone}</p>
          <p>{this.props.business.address1}</p>
          <p>{this.props.business.address2}</p>
        </li>
        <br />
      </div>
    );
  }

}

export default BusinessIndexDetail;
