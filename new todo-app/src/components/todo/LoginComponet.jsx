import React, { Component } from 'react'
import authService from './authService.jsx'


class LoginComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "in27min",
        password: " ",
        hasLoginFailed: false,
        showSuccessMessage: false,
        //  comment: " ",
      };
      // this.handleUserNameChange = this.handleUserNameChange.bind(this);
      // this.handlePasswordChange = this.handlePasswordChange.bind(this);
      //  this.handleCommentChange = this.handleCommentChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.loginClicked = this.loginClicked.bind(this);
    }
    handleChange(event) {
      // console.log(this.state);-- {username: 'in27min', password: 'ma'} in console
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
    // handleUserNameChange(event) {
    //   console.log(event.target.value);
    //   this.setState({ username: event.target.value });
    // }
    // handlePasswordChange(event) {
    //   console.log(event.target.value);
    //   this.setState({ password: event.target.value });
    // }
  
    //   handleCommentChange(event) {
    //     console.log(event.target.value);
    //     this.setState({ comment: event.target.value})
    // }
  
    loginClicked() {
      if (this.state.username === "kairee" && this.state.password === "maddog") {
        authService.registerSuccessfulLogin(this.state.username,this.state.password);
        this.props.navigate(`/welcome/${this.state.username}`);
      }
      // this.setState({ showSuccessMessage: true})
      // this.setState({ hasLoginFailed: false})
      else this.setState({ hasLoginFailed: true });
      this.setState({ showSuccessMessage: false });
      // console.log(this.state)}
    }
  
    render() {
      return (
        <div className= "container">
          {/* <ShowIvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
          {this.state.hasLoginFailed && <div className="alert alert- warning">Invalid credintals</div>}
          {/* <ShowloginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
          {this.state.showSuccessMessage && <div>login successful</div>}
          User Name:{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-success btn btn-outline-light" onClick={this.loginClicked}>login</button>
          {/*this is for a geniric text box */}
          {/* TextBox:{" "}
          <input
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          /> */}
        </div>
      );
    }
  }
  export default LoginComponent