import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { logout } from '../actions/session_actions';
import { fetchCategories } from '../actions/category_actions';
import { fetchBusinesses } from '../actions/business_actions';
import Header from './header';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.fetchMatches = this.fetchMatches.bind(this);
  }

  fetchMatches(term){
    const results = [];

    this.props.fetchCategories(term)
      .then( res => {
        res.categories.forEach( cat => results.concat([cat.title]));
      });

    this.props.fetchBusinesses(term)
    .then( res => {
      res.businesses.forEach( biz => results.concat([biz.name]));
    });

    results.forEach(res => {console.log(res);});
    this.bestResults(results, term);
  }

  bestResults(results, term){
    const bestResults = [];
    const exactResults = [];
    const exactMatch = word => {
      return word === term.toLowerCase().replace(/[^a-z]/g, "");
    };
    console.log(results);
    results.forEach( result => {
      if (_.map(result.split(" "), word => word.toLowerCase().replace(/[^a-z]/g, "")).some(exactMatch)) {

        exactResults.push(result);
      }
    });
    // include all results that have a whole word that matches term exactly
    bestResults.push(this.exactResults(results, term));

    // up to 9, include results that have matches to starts of words
    while (bestResults.length < 9){
      bestResults.push(this.goodResults(results, term, bestResults));
    }
    // console.log("this.goodResults(results, term, bestResults):");
    // console.log(this.goodResults(results, term, bestResults));

    // console.log(bestResults);
    // up to 6, include other matches

  }

  exactResults(results, term){
    const exactResults = [];
    const exactMatch = word => word.toLowerCase() === term;
    results.forEach( result => {
      if (result.split(" ").toLowerCase().some(exactMatch)) {
        exactResults.push(result);
      }
    });

    return exactResults;
  }

  goodResults(results, term, bestResults){
    const goodResults = [];
    results.forEach( result => {
      result.split(" ").forEach( word => {
        const isGoodMatch = Boolean(
          word.toLowerCase().match(term).index === 0
        );
        const isUniqMatch = !bestResults.includes(result);

        if (isGoodMatch && isUniqMatch){
          goodResults.push(result);
        }
      });
    });
    return goodResults;
  }

  render() {
    return (
      <div id='main' className='main-content'>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout }
          fetchMatches={ this.fetchMatches } />
        <h1>gulp</h1>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout()),
    fetchCategories: term => dispatch(fetchCategories(term)),
    fetchBusinesses: term => dispatch(fetchBusinesses(term))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
