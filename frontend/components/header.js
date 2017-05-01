import React from 'react';
import SessionBtns from './session/session_btns';
import SearchBar from './search_bar.js';

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
        />;
    }
  }

  renderHeader(){
    if (this.props.shouldDisplayLogo) {
      return <h1 className='gulp-logo'>gulp</h1>;
    } else {
      return <h1 className='gulp-logo'> </h1>;
    }
  }

  render() {
    return (
      <nav className='main-nav'>
        {this.renderHeader()}
        {this.renderSearchBar()}
        {this.renderSessionBtns()}
      </nav>
    );
  }

}

export default Header;
