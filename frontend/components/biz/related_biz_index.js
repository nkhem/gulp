import React from 'react';
import BusinessIndexDetail from './business_index_detail';

import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';

class RelatedBizIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessesList: []
    };

    this.renderBizDetails = this.renderBizDetails.bind(this);
  }

  componentWillMount(){
    let catAlias = this.props.currentBizCategory.alias;
    this.props.fetchBusinessesByCategory(catAlias).then(res => {
      let bizList = res.businesses.filter(biz => {
        if (biz.id !== this.props.currentBizId) return biz;
      });
      this.setState({
        businessesList: bizList
      });
    });
  }

  renderBizDetails(){
    let { businessesList } = this.state;
    return businessesList.map( biz => {
      return <BusinessIndexDetail
        business={biz}
        fetchUser={this.props.fetchUser}
        key={biz.alias}
        id='related-biz-index-detail'
        isRelatedBizIndex={true}
        />;
    });
  }

  render() {
    return (
      <div className='related-biz-index'>
        <h2>Similar Businesses</h2>
        <div className='related-biz-index-ul'>
          {this.renderBizDetails()}
        </div>
      </div>
    );
  }

}

export default RelatedBizIndex;
