import React from 'react';
import { Link } from 'react-router';

class SessionBtns extends React.Component {
  renderNewSessionBtns(){
    return (
      <nav className="login-signup">
        <Link to="login">Log In</Link>
        <br/>
        <Link to="signup">Sign Up</Link>
      </nav>
    );
  }

  renderSignOut(signout){
    return (
      <button
        className="signout-btn"
        onClick={ signout }>
        Sign Out
      </button>
    );
  }

  render() {
    let renderBtns = this.props.loggedIn
    ? this.renderSignOut
    : this.renderNewSessionBtns;

    return (
      <div id='session-btns'>
        { renderBtns(this.props.signout) }
      </div>
    );
  }

}

export default SessionBtns;
