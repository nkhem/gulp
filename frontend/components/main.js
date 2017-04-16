import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { fetchTermMatches } from '../actions/dropdown_actions';
import Header from './header';
import DropdownList from './dropdown_list';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {termMatches: []};
  }

  render() {
    return (
      <div id='main' className='main-content'>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout }
          fetchTermMatches={ this.props.fetchTermMatches } />
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
    fetchTermMatches: term => dispatch(fetchTermMatches(term)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
