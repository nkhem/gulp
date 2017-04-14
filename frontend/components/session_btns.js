import React from 'react';
import { Link } from 'react-router';

class SessionBtns extends React.Component {
  constructor(props) {
    super(props);
    this.renderLogout = this.renderLogout.bind(this);
  }
  renderNewSessionBtns(){
    return (
      <nav className="login-signup">
        <Link to="login">Log In</Link>
        <br/>
        <Link to="signup">Sign Up</Link>
      </nav>
    );
  }

  renderLogout(){
    console.log('SessionBtns renderLogout this.props.logout:');
    console.log(this.props.logout);
    return (
      <button
        className="logout-btn"
        onClick={ this.props.logout }>
        Sign Out
      </button>
    );
  }

  render() {
    let renderBtns = this.props.loggedIn
    ? this.renderLogout
    : this.renderNewSessionBtns;

    return (
      <div id='session-btns'>
        { renderBtns() }
      </div>
    );
  }

}

export default SessionBtns;
