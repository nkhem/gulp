import React from 'react';
import BusinessIndexDetail from './business_index_detail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBusinessesByCategory } from '../../actions/business_actions';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.renderBizTitles = this.renderBizTitles.bind(this);
  }

  componentWillReceiveProps(){
    this.setState({
      businesses: this.props.businesses
    });
  }

  renderBizTitles(){
    let { businesses } = this.state;
    return businesses.map( biz => {
      return <BusinessIndexDetail business={biz} />;
    });
  }

  render() {

    return (
      <div>
        <p>{this.renderBizTitles()}</p>
      </div>
    );
  }

}

BusinessIndex.propTypes = {
  businesses: PropTypes.array
};

const mapStateToProps = state => {
  return {
    businesses: Object.values(state.businesses)
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    fetchBusinessesByCategory: cat => dispatch(fetchBusinessesByCategory(cat)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
