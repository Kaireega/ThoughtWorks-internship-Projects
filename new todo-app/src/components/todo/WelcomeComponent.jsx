import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "./api/todo/HelloWorldService";


class WelcomeComponent extends Component {
  constructor(props){
    super(props)
    this.retrieveWelcomeMesssage = this.retrieveWelcomeMesssage.bind(this)
    this.handlesuccessfulResponse = this.handlesuccessfulResponse.bind(this)
    this.handleError = this.handleError.bind(this)
    this.state= {
      welcomeMessage:''
    }
  }

    render() {
      return (
        <>
        <h1>Welcome !</h1>
        <div className="container">
        Welcome {this.props.params.name}. You can manage your todos{" "}
       <button className="btn btn-success btn-outline-dark">  <Link  to="/todos">here</Link></button>.
        </div>
        <div className="container">
        Click her to get a custumized welcome message
        <button onClick={this.retrieveWelcomeMesssage}className="btn btn-success btn-outline-light">Get Welcome Message</button>
        </div>
        <div className="container">
          {this.state.welcomeMessage}
        </div>
        </>
      );
      
    }
    
    
    
    retrieveWelcomeMesssage() {
  //   //   HelloWorldService.excuteHelloWorldService()
  //   //   .then(response => this.handlesuccessfulResponse(response))
   
  //     // HelloWorldService.excuteHelloWorldBeanService()
  //     // .then(response => this.handlesuccessfulResponse(response))
     
    
    HelloWorldService.excuteHelloWorldPathVariableService(this.props.params.name)
      .then(response => this.handlesuccessfulResponse(response))
      .catch(error => this.handleError(error))
  }
  
    handlesuccessfulResponse(response) {
      console.log(response)
      this.setState({welcomeMessage: response.data.message})
    }
    handleError(error) {
      console.log(error.response)
      let errorMessage ='';
      
      if (error.message)
        errorMessage += error.message
        
        if (error.response && error.response.data){
          errorMessage += error.response.data.message
        }
       
          
        

      this.setState({welcomeMessage: errorMessage})
    }
   }
  export default WelcomeComponent