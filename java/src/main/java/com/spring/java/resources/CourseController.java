package com.spring.java.resources;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.java.models.Course;

@RestController
public class CourseController {
    private List<Course> courses = Arrays.asList(new Course(1, "Java"),
                                                 new Course(2, "Python"));

    @GetMapping("courses")
    public List<Course> getCourses() {
        return courses;
    }
    
}
