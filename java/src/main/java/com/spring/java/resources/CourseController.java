package com.spring.java.resources;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.spring.java.models.Course;
import com.spring.java.models.Student;

@RestController
public class CourseController {
    private List<Course> courses = Arrays.asList(new Course(1, "Java"),
                                                 new Course(2, "Python"));


    @GetMapping("courses/{id}")
    public ResponseEntity<Course> getCourse(@PathVariable int id){

        Course cor = courses.stream()
                               .filter(s -> s.getId() == id)
                               .findFirst()
                               .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found"));

                               return ResponseEntity.ok(cor);
    }                                          

    @GetMapping("courses")
    public List<Course> getCourses() {
        return courses;
    }
    
}
