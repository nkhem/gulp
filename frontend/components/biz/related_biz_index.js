import React from 'react';
import BusinessIndexDetail from './business_index_detail';
import { connect } from 'react-redux';


import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';

class RelatedBizIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessesList: []
    };

    this.renderBizDetails = this.renderBizDetails.bind(this);
  }

  componentDidMount(){
    this.setState({
      businessesList: this.props.businessesList
    });
  }

  renderBizDetails(){
    let { businessesList } = this.state;
    return businessesList.map( biz => {
      return <BusinessIndexDetail
        business={biz}
        fetchUser={this.props.fetchUser}
        key={biz.id}
        />;
    });
  }

  render() {
    return (
      <div className='related-biz-index'>
        <h2>Similar Businesses</h2>
        {this.renderBizDetails()}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    businessesList: Object.values(state.businesses.list),
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    fetchBusinessesByCategory: cat => dispatch(fetchBusinessesByCategory(cat)),
    fetchBusiness: title => dispatch(fetchBusiness(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedBizIndex);
