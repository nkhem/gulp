import React from 'react';

import { Link } from 'react-router';

class Header extends React.Component {
  renderSignInSignUp(){
    return (
      <nav className="login-signup">
        <Link to="login">Log In</Link>
        <br/>
        <Link to="signup">Sign Up</Link>
      </nav>
    );
  }

  renderSignOut(){

  }

  render() {
    return (
      <div id='header'>
        {this.renderSignInSignUp()}
      </div>
    );
  }

}

export default Header;
