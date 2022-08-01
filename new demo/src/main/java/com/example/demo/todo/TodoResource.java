package com.example.demo.todo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4300")
public class TodoResource {

    private ToDoHardCodedService todoService;

    public TodoResource(ToDoHardCodedService todoService) {
        this.todoService = todoService;

    }

    @GetMapping(path = "/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoService.findAll();
    }

    @GetMapping(path = "/users/{username}/todos/{id}")
    public Todo AllTodos(@PathVariable String username, @PathVariable long id) {
        return todoService.findById(id);}


    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
    @PathVariable String username, @PathVariable long id) {
        Todo todo = todoService.deleteById(id);
        if (todo != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping ("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username,
                                           @PathVariable long id, @RequestBody Todo todo){
        Todo todoUpdated = todoService.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);

    };
    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> createdATodo(@PathVariable String username,
                                            @RequestBody Todo todo){

        Todo createdTodo = todoService.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();

    };
}



