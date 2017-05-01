import React from 'react';
import { Link } from 'react-router';

class SessionBtns extends React.Component {
  constructor(props) {
    super(props);
    this.renderLogoutBtn = this.renderLogoutBtn.bind(this);
  }

  renderNewSessionBtns(){
    return (
      <nav className="login-btn transparent-btn">
        <Link to="login" className="login-btn">Log In</Link>
        <br/>
        <button className="signup-btn blue-btn">
          <Link to="signup">Sign Up</Link>
        </button>
      </nav>
    );
  }

  renderLogoutBtn(){
    return (
      <button
        id="logout-btn transparent-btn"
        onClick={ this.props.logout }>
        Log Out
      </button>
    );
  }

  render() {
    let renderBtns = this.props.loggedIn
    ? this.renderLogoutBtn
    : this.renderNewSessionBtns;

    return (
      <div id='session-btns'>
        { renderBtns() }
      </div>
    );
  }

}

export default SessionBtns;
