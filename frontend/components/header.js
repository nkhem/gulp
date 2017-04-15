import React from 'react';
import SessionBtns from './session_btns';
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
    console.log('inside header.renderSearchBar:');
    console.log(this.props.onSearchTermChange);
    if (!this.props.isSessionFormOpen) {
      return <SearchBar onSearchTermChange={ this.props.businessSearch } />;
    }
  }

  render() {
    console.log('inside header.render:');

    console.log(this.props.onSearchTermChange);
    return (
      <div id='header'>
        {this.renderSearchBar()}
        {this.renderSessionBtns()}
      </div>
    );
  }

}

export default Header;
