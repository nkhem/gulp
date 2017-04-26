import React from 'react';
import { withRouter } from 'react-router';

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
      <div key={biz.id}>
        <li>
          <img src={`${biz.image_url}`} width={100} />
          <h4 onClick={this.handleClick.bind(this)}>{biz.title}</h4>
          <p>{biz.price}</p>
          <p>{biz.phone}</p>
          <p>{biz.address1}</p>
          <p>{biz.address2}</p>
        </li>
        <br />
      </div>
    );
  }

}

export default withRouter(BusinessIndexDetail);
