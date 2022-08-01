import React, { Component } from 'react';
import FirstComponent from './components/learning/FirstComponent'
import SecondComponent from './components/learning/SecondComponent'
import ThirdComponent from './components/learning/ThirdComponent'
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp'; 
 import './components/todo/bootstrap.css';
 		import logo from './logo.svg';
 		import './App.css';
     
     

 		class App extends Component {
         render() {
            return (
            <div className="App">
             <TodoApp/>
              {/* <Counter/> */}
             {/* <LearningComponents/> */}
               </div>
            )
         }
      }
 		
      class LearningComponents extends Component{
      render() {
         return (
          <div className="LearningComponents">
               Hello World
      
           
             <FirstComponent></FirstComponent>
             <SecondComponent></SecondComponent>
             <ThirdComponent></ ThirdComponent>
          </div>
         
         );
      }
   }

    
     
		export default App;

