import React from 'react';
import SessionBtns from './session/session_btns';
import SearchBar from './search_bar.js';

import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.renderSessionBtns = this.renderSessionBtns.bind(this);
    this.renderSearchBar = this.renderSearchBar.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderSessionBtns(){
    if (this.props.isSessionFormOpen) {
      return null;
    } else {
      return (
      <SessionBtns
        currentUser={ this.props.currentUser}
        loggedIn={ this.props.loggedIn }
        logout={ this.props.logout } />
      );
    }
  }

  renderSearchBar(){
    if (!this.props.isSessionFormOpen && this.props.shouldDisplaySearchBar) {
      return <SearchBar
        searchResults={ this.props.searchResults }
        fetchSearchResults={ this.props.fetchSearchResults }
        fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
        fetchBusiness={this.props.fetchBusiness}
        id="header-search-bar"
        />;
    }
  }

  renderHeader(){
    if (this.props.shouldDisplayLogo) {
      return <Link to="/"><h1 className='gulp-logo'>gulp</h1></Link>;
    } else {
      return <h1 className='gulp-logo'> </h1>;
    }
  }

  render() {
    return (
      <nav className={`main-nav ${this.props.className}`}>
        {this.renderHeader()}
        {this.renderSearchBar()}
        {this.renderSessionBtns()}
      </nav>
    );
  }

}

export default Header;
