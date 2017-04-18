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
    this.state = {
      businesses: []
    }
    this.bizTitles = this.bizTitles.bind(this);
  }
  componentWillMount() {
    this.setState({businesses: this.props.businesses });
    console.log(this.state.map(biz => biz.title));
    this.setState({businesses: [] });

  }
  bizTitles() {
    // return businesses.map( biz => {
    //   return <BusinessIndexDetail business={biz} key={biz.alias}/>;
    // });
  }

  render(){
    let { businesses } = this.props ;

    return (
      <div id='main' className='biz-index'>
        <h1>gulp</h1>
        <ol id='biz-index-list'>{ this.bizTitles() }</ol>
      </div>
    );
  }

}

const mapStateToProps = state => {
  console.log(state.businesses);
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
