import React, { Component } from "react";
import {Link } from "react-router-dom";
import authService from './authService.jsx'
class HeaderComponent extends Component {
    render() {
      
     
  
      return (
        <header>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a  href="http://www.in28minutes.com" className="navbar-brand"> in27min</a></div>
            <ul className="navbar-nav">
              <li className="nav-link"><Link to="/welcome/in27min">Home</Link></li>
              <li className="nav-link"><Link to="/todos">Todos</Link></li>
            </ul>
             <ul className="navbar-nav navbar-collapse justify-content-end">
              <li className="nav-link"><Link to="/login">Login</Link></li>
              <li className="nav-link"><Link to="/logout" onClick={authService.logout} >Logout</Link></li>
            </ul>
         </nav>
        </header>
      
      
      );
    }
  }
  export default HeaderComponent