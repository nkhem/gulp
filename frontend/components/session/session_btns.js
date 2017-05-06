import React from 'react';
import { Link } from 'react-router';

class SessionBtns extends React.Component {
  constructor(props) {
    super(props);
    this.renderLogoutBtn = this.renderLogoutBtn.bind(this);
    this.renderProfileBtn = this.renderProfileBtn.bind(this);
    this.renderLogoutAndProfileBtns = this.renderLogoutAndProfileBtns.bind(this);
  }

  renderNewSessionBtns(){
    return (
      <nav className="new-session-btns">
        <Link to="login" className="transparent-btn" id="login-btn">Log In</Link>
        <br/>
        <button className="gray-btn" id="signup-btn">
          <Link to="signup">Sign Up</Link>
        </button>
      </nav>
    );
  }

  renderLogoutAndProfileBtns(){
    return (
      <div>
        {this.renderLogoutBtn()}
        {this.renderProfileBtn()}
      </div>
    );
  }

  renderLogoutBtn(){
    return (
      <button
        className="transparent-btn"
        id="logout-btn"
        onClick={ this.props.logout }>
        Log Out
      </button>
    );
  }

  renderProfileBtn(){
    return (
      <div>
        <Link to={`user/${this.props.currentUser.id}`}>Profile</Link>
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
    );
  }

  render() {
    let renderBtns = this.props.loggedIn
    ? this.renderLogoutAndProfileBtns
    : this.renderNewSessionBtns;

    return (
      <div>
        { renderBtns() }
      </div>
    );
  }

}

export default SessionBtns;
