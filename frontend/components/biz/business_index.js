import React from 'react';
import { connect } from 'react-redux';
import createFragment from 'react-addons-create-fragment';

import { logout } from '../../actions/session_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';

import Header from '../header';
import BusinessIndexDetail from './business_index_detail';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderBizTitles = this.renderBizTitles.bind(this);
  }

  renderBizTitles() {
    console.log("this.props.businesses:");
    console.log(this.props.businesses);
    return (
      <ol id='biz-index-list'>
        { createFragment(this.props.businesses).forEach( biz => {
          console.log(biz);
          return <BusinessIndexDetail business={biz} key={biz.alias}/>;
        })}
      </ol>
    );
  }

  render(){
    let shouldRenderBizTitles = Boolean(this.props.businesses.length > 0);
    return (
      <div id='main' className='biz-index'>
        <h1>gulp</h1>
        <h3>{ this.renderBizTitles() }</h3>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    businesses: state.businesses
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout()),
    fetchSearchResults: term => dispatch(fetchSearchResults(term)),
    fetchBusinessesByCategory: cat => dispatch(fetchBusinessesByCategory(cat)),
    fetchBusiness: title => dispatch(fetchBusiness(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
