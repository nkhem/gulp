import React from 'react';
import BusinessIndexDetail from './business_index_detail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';
import Header from '../header';
import SearchMap from '../map/search_map';
import Footer from '../footer';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessesList: [],
      categoryTitles: '',
    };
    this.renderBizDetails = this.renderBizDetails.bind(this);
    this.renderSearchTitle = this.renderSearchTitle.bind(this);
  }

  componentWillMount(){
    this.setState({
      businessesList: this.props.businessesList
    });
  }

  componentDidUpdate(){
    let currentBusinesses = this.state.businessesList;
    let nextBusinesses = this.props.businessesList;

    if (currentBusinesses !== nextBusinesses) {
      this.setState({
        businessesList: nextBusinesses
      });
    }

    let currentCategoryTitles = this.state.categoryTitles;
    let nextCategoryTitles = this.props.categoryTitles;

    if (currentCategoryTitles !== nextCategoryTitles) {
      this.setState({
        categoryTitles: nextCategoryTitles
      });
    }
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

  renderSearchTitle(){
    let cat = this.state.businessesList[0].categories[0].title;

    if (cat) {
      return (
        <h2 className='biz-index-title'>
          {`Best ${cat} in San Francisco, CA`}
        </h2>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout }
          fetchSearchResults={ this.props.fetchSearchResults }
          searchResults={ this.props.searchResults }
          fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
          fetchBusiness={this.props.fetchBusiness}
          shouldDisplaySearchBar={true}
          shouldDisplayLogo={true}
          />
          <SearchMap
            businesses={this.state.businessesList} />
        <div className='biz-index'>
          {this.renderSearchTitle()}
          {this.renderBizDetails()}
          <Footer id="biz-index-footer"/>
        </div>
      </div>
    );
  }

}

BusinessIndex.propTypes = {
  businesses: PropTypes.array
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    businessesList: Object.values(state.businesses.list),
    errors: state.session.errors,
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout()),
    fetchBusinessesByCategory: cat => dispatch(fetchBusinessesByCategory(cat)),
    fetchSearchResults: term => dispatch(fetchSearchResults(term)),
    fetchBusiness: title => dispatch(fetchBusiness(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
