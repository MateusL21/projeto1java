package com.spring.java.resources;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.spring.java.models.Student;

import jakarta.annotation.PostConstruct;

@RestController
public class StudentController {

    private List<Student> students = Arrays.asList(new Student(1, "Mateus", "mateus@abutua.com", "(11) 9999-9999", 1, 1),
    new Student(2, "Jupter", "jupter@abutua.com", "(11) 9999-9999", 2, 2), 
    new Student(3, "Saturno", "saturno@abutua.com", "(11) 7777-9999", 3 ,3));



    @GetMapping("students/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id) {


        Student stud = students.stream()
                               .filter(s -> s.getId() == id)
                               .findFirst()
                               .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found"));

                               return ResponseEntity.ok(stud);
    }

    @GetMapping("students")
    public List<Student> getStudents() {
        return students;
    }

}
