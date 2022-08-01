package com.example.demo.helloworld;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@CrossOrigin(origins = "http://localhost:4300")
public class HwController {
    // GET
    //URI
    //METHOD
    @GetMapping(path = "/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    ;

    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean HelloWorldBean() {
        return new HelloWorldBean("Hello World bean");
    }

    ;

    // hello-world/path-variable/in27min
    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//        throw new RuntimeException("sorry something went wrong");
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }

    ;

}

