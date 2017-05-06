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
      <div className="new-session-btns">
        {this.renderProfileBtn()}
        {this.renderLogoutBtn()}
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
      <Link
        to={`user/${this.props.currentUser.id}`}
        id='profile-nav-btn'
        className='circle'>
          <i className="fa fa-user" aria-hidden="true" />
      </Link>
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
