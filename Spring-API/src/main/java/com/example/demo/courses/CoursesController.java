package com.example.demo.courses;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.topics.Topic;

@RestController
public class CoursesController {
	@Autowired
	private CoursesService coursesservices;
	
	@RequestMapping("/topics/{id}/courses")
	public List<Courses> getAllCourses(@PathVariable String id){
		return coursesservices.getallcourses(id);
		
	}
	@RequestMapping("/topics/{topicid}/courses/{id}")
	public Optional<Courses> GetCourses(@PathVariable String id) {
		return coursesservices.getcourses(id);
	}
	
	
	@RequestMapping(method=RequestMethod.POST,value="/topics/{topicid}/courses")
	public void addcourses(@RequestBody Courses courses,@PathVariable String topicid ) {
		courses.setTopic(new Topic(topicid,"",""));
		coursesservices.add(courses);
	}
	@RequestMapping(method=RequestMethod.PUT,value="/topics/{topicid}/courses/{id}")
	public void coursesupdate(@RequestBody Courses courses ,@PathVariable String topicid ,@PathVariable String id) {
		courses.setTopic(new Topic(topicid,"",""));
		coursesservices.update(courses, id);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/topics/{topicid}/courses/{id}")
	public void topicdelete(@PathVariable String id) {
		coursesservices.delete(id);
	}
	
	
	
	

}
