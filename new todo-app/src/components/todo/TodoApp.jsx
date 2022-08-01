import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import withNavigation from "./WithNavigation.jsx";
import withParams from "./withParams.jsx";
import AuthRoute  from './AuthRoute.jsx';
import LoginComponent from "./LoginComponet.jsx";
import ListTodosComponent from "./ListTodoComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import TodoComponent from "./TodoComponent.jsx";


class TodoApp extends Component {
  render() {
    const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
    const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent);
    return (
      <div className="TodoApp">
        <Router>
        <HeaderComponentWithNavigation/>
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigation />} />

            <Route path="/login" element={<LoginComponentWithNavigation />} />
            
            <Route path="/welcome/:name" element={
              <AuthRoute>
              <WelcomeComponentWithParams />
              </AuthRoute>
              } />

              <Route path="/todos/:id" element={ 
           <AuthRoute>
           <TodoComponentWithParamsAndNavigation />
           </AuthRoute>
            } />
            <Route path="/todos" element={
              <AuthRoute>
             <ListTodosComponentWithNavigation /> 
             </AuthRoute>
             } />

            <Route path="*" element={<ErrorComponent />} />
           
            <Route path="/logout" element={
            <AuthRoute>
            <LogoutComponent />
            </AuthRoute>
            } />

          </Routes>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}


export default TodoApp;
