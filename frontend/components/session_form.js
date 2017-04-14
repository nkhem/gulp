import React from 'react';
import { connect } from 'react-redux';
import { signIn, signUp, signOut } from '../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  handleSubmit(e) {
		e.preventDefault();

		this.props.processForm({user: this.state})
      .then( () => this.redirectIfLoggedIn );

    this.setState({
      f_name: '',
      l_name: '',
      email: '',
      password: ''
    });
	}

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
			<div className="signin-form">
        <h3>{this.props.formType}</h3>
				<form onSubmit={this.handleSubmit} className="signin-form">

					<input type="text"
						value={this.state.f_name}
						onChange={this.update("f_name")}
            placeholder='f_name' />

					<input type="text"
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
			</div>
		);
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, state) => {
  const formType = state.location.pathname.slice(1);
  const processForm = (formType === 'signin') ? signIn : signUp;
  return {
    processForm: user => dispatch(processForm(user)),
    formType: formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
