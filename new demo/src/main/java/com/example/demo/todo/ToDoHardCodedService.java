package com.example.demo.todo;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Service
@CrossOrigin(origins = "http://localhost:4300")
public class ToDoHardCodedService {
    private static List<Todo> todos = new ArrayList();
    private static int idCounter= 0;
    static {
        todos.add(new Todo(++idCounter,"kairee","Go to the store and get some milk.",new Date(),false ));
        todos.add(new Todo(++idCounter,"kairee","Call my mom and tell her i love her.",new Date(),false ));
        todos.add(new Todo(++idCounter,"kairee","Read the first chapter in my text book.",new Date(),false ));
        todos.add(new Todo(++idCounter,"kairee","Danniie dan you the man",new Date(),false ));
        todos.add(new Todo(++idCounter,"kairee","ride bike on monday",new Date(),false ));
        todos.add(new Todo(++idCounter,"kairee","wash my car",new Date(),false ));
        todos.add(new Todo(++idCounter,"kairee","go to park",new Date(),false ));
    }

    public Todo save(Todo todo){
        if(todo.getId()==-1 ||todo.getId()== 0){
           todo.setId(++idCounter);
            todos.add(todo);
        }
        else{
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }
    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(Long id){
        Todo todo = findById(id);

        if(todo==null)return null;

        if (todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findById(Long id) {
        for(Todo todo: todos){
            if(todo.getId()== id){
                return  todo;
            }
        }
        return null;
    }

    ;

}
