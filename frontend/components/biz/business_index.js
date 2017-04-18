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
  }

  componentWillReceiveProps(){
    console.log("this.props.businesses");
    console.log(this.props.businesses);
    console.log("THIS WORKS!!!!!!!");
    console.log(Object.values(this.props.businesses).map(biz => biz.lat) );
    // this.setState({
    //   businesses: [...this.props.businesses
    // });


    // console.log("this.state:");
    // console.log(this.state);
  }

  renderBizTitles(){

  }

  render() {
    console.log("BusinessIndex this.props.businesses:");
    console.log(this.props.businesses);

    return (
      <div>
        <p>business_index:</p>
      </div>
    );
  }

}

BusinessIndex.propTypes = {
  businesses: PropTypes.object
};

const mapStateToProps = state => {
  return {
    businesses: state.businesses
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    fetchBusinessesByCategory: cat => dispatch(fetchBusinessesByCategory(cat)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
