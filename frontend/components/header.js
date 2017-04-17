import React from 'react';
import SessionBtns from './session/session_btns';
import SearchBar from './search_bar.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.renderSessionBtns = this.renderSessionBtns.bind(this);
    this.renderSearchBar = this.renderSearchBar.bind(this);
  }

  renderSessionBtns(){
    if (this.props.isSessionFormOpen) {
      return null;
    } else {
      return (
      <SessionBtns
        loggedIn={ this.props.loggedIn }
        logout={ this.props.logout } />
      );
    }
  }

  renderSearchBar(){
    if (!this.props.isSessionFormOpen) {
      return <SearchBar fetchSearchResults={ this.props.fetchSearchResults } />;
    }
  }

  render() {
    return (
      <div id='header'>
        {this.renderSearchBar()}
        {this.renderSessionBtns()}
      </div>
    );
  }

}

export default Header;
