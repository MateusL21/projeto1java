package com.spring.java.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.java.models.Student;

@RestController
public class StudentController {

    @GetMapping("student")
    public Student getStudent(){

        Student s = new Student();

        s.setEmail("mateus@abutua.com");
        s.setId(1);
        s.setIdCurso(1);
        s.setName("Mateus");
        s.setPeriod(1);
        s.setPhone("(11) 9999-9999");

        return s;
    }
    
}
