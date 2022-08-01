import React, { Component } from 'react'
import TodoDataService from './api/todo/TodoDataService';
import authService from './authService';
import moment from 'moment';

class ListTodosComponent extends Component {
    constructor(props) {
      super(props);
      this.handlesuccessfulResponse = this.handlesuccessfulResponse.bind(this)
      this.handleError = this.handleError.bind(this)
      this.state = {
        todos: [],
        message: null
      };
      this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
      this.refreshTodo = this.refreshTodo.bind(this)
      this.updateTodoClicked = this.updateTodoClicked.bind(this)
      this.addTodoClicked = this.addTodoClicked.bind(this)
    }
    
    componentDidMount(){
      
      this.refreshTodo();
      console.log(this.state)
    }
    refreshTodo(){
      let username = authService.getLoggedInUserName()
      TodoDataService.retriveAllTodo(username)
      .then(
        response => {
        // console.log(response);
        this.setState({todos : response.data})
      })
      
    }
  
    deleteTodoClicked(id){
      let username = authService.getLoggedInUserName()
      // console.log(id + " " + username);
      TodoDataService.deleteTodo(username, id)
      .then(
        response =>{
          this.setState({message : `Delete of todo ${id} Successful`});
          this.refreshTodo();
        }
      )
    }
  
    updateTodoClicked(id) {
      // console.log(id)
      this.props.navigate(`/todos/${id}`)
    }


   addTodoClicked() {
      // console.log(id)
      this.props.navigate('/todos/-1')
    }
    
    
  handlesuccessfulResponse(response) {
    console.log(response)
    this.setState({todos: response.data})
  }
  handleError(error) {
    console.log(error.response)
  }
    render() {
      return (
        <div>
          <h1>todo list </h1>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
          <div className="container">
          <div className="container">
        </div>
          <table className="table">
            <thead>
              <tr>
                <th>description</th>
                <th>Is Completed ?</th>
                <th>Target Date</th>
                <th>Delete</th>
                <th>Update</th>

              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  {/* <td>{todo.id}</td> */}
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                  <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                  <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row" >
            <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
          </div>
          </div>
        </div>
      );
    }
  }
  export default ListTodosComponent