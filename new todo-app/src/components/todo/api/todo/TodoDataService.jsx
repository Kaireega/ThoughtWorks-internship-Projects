import axios from "axios"
const header = { headers: {"Access-Control-Allow-Origin": "*"}}
class TodoDataService{
    

    retriveAllTodo(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }
    retriveTodo(name, id){
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
    }
    
    createTodo(name,todo){
        return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }
    
    updateTodo(name, id, todo){
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)
    }
}
export default new TodoDataService()