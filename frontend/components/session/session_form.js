import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { login, signup } from '../../actions/session_actions';

import Header from '../header';

class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      f_name: '',
      l_name: '',
      email: '',
      password: ''
    };

    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  handleSubmit(asGuest){
    let logUserIn = asGuest ? this.loginAsGuest() : this.loginAsTrueUser();
    return e => {
      e.preventDefault();
      logUserIn(e);
      this.setState({
        f_name: '',
        l_name: '',
        email: '',
        password: ''
      });
    };
  }

  loginAsGuest(){
    return e => {
  		this.props.processFormAsGuest({ user: {
        email: 'guest_user@email.com',
        password: 'user_password'} })
        .then( () => this.redirectIfLoggedIn() );
    };
  }

  loginAsTrueUser() {
    return e => {
  		this.props.processFormAsTrueUser({ user: this.state })
        .then( () => this.redirectIfLoggedIn() );
    };
	}

  redirectIfLoggedIn(){
    console.log(this);
    if(this.props.loggedIn && this.props.prevBiz.id){
      this.props.router.push(`/business/${this.props.prevBiz.id}`);
    } else if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let asGuest = true;
    let asUser = false;
    return (
      <div>
        <Header
          isSessionFormOpen={ true }
          shouldDisplayLogo={ true }
          loggedIn={this.props.loggedIn} />

        <div className='main-content'>
          <div id="new-session-box">
            <h3>{this.props.formType}</h3>
    				<form onSubmit={ this.handleSubmit(asUser) } id="new-session-form">

    					<input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
    						value={this.state.f_name}
    						onChange={this.update("f_name")}
                placeholder='f_name' />

              <input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
    						value={this.state.l_name}
    						onChange={this.update("l_name")}
                placeholder='l_name' />

              <br/>

    					<input type="text"
    						value={this.state.email}
    						onChange={this.update("email")}
                placeholder='email' />

    					<br/>

    					<input type="password"
    						value={this.state.password}
    						onChange={this.update("password")}
                placeholder='password' />

    					<br/>

    					<input type="submit" value={this.props.formType} />
    				</form>
            
            <div className="session-form-btns">
              <form id="demo-mode-form" onSubmit={ this.handleSubmit(asGuest) }>
                <input
                  className="demo-mode-gray-btn"
                  type="submit"
                  value="Continue in demo mode" />
              </form>

              <button className="session-form-switch transparent-btn">
                <Link to={this.props.formType === 'login'
                  ? 'signup'
                  : 'login'}>
                  {this.props.formType === 'login'
                    ? 'New user? Create an account.'
                    : 'Already have an account? Sign in' }
                </Link>
              </button>
            </div>

    			</div>
  			</div>
      </div>
		);
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    prevBiz: state.businesses.featured
  };
};

const mapDispatchToProps = (dispatch, state) => {
  const pathname = state.location.pathname;
  const formType = (pathname.substring(0,1) === '/') ? pathname.slice(1) : pathname ;
  const processFormAsTrueUser = (formType === 'login') ? login : signup;

  return {
    processFormAsGuest: user => dispatch(login(user)),
    processFormAsTrueUser: user => dispatch(processFormAsTrueUser(user)),
    formType: formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
