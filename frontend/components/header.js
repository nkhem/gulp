import React from 'react';
import SessionBtns from './session_btns';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.renderSessionBtns = this.renderSessionBtns.bind(this);
  }

  renderSessionBtns(){
    console.log('renderSessionBtns this.props.logout:');
    console.log(this.props.logout);
    if (this.props.hideSessionBtns) {
      return null;
    } else {
      return (
      <SessionBtns
        loggedIn={ this.props.loggedIn }
        logout={ this.props.logout } />
      );
    }
  }
  render() {
    console.log('Header render this.props.logout:');
    console.log(this.props.logout);
    return (
      <div id='header'>
        {this.renderSessionBtns()}
      </div>
    );
  }

}

export default Header;
