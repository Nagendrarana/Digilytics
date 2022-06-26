package com.example.demo.courses;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class CoursesService {
	@Autowired
	private CoursesRepository courserepository
	;

	/*
	 * private List<Topic> topics = new ArrayList<>(Arrays.asList( new
	 * Topic("Spring","Spring framework","Spring framework desc"), new
	 * Topic("Spring2","Spring framework2","Spring framework desc2"), new
	 * Topic("Spring3","Spring framework3","Spring framework desc3") ));
	 */
	public List<Courses> getallcourses(String topicid){
		//return topics;
		
		  List<Courses> topics = new ArrayList<>();
		  courserepository.findByTopicId(topicid).forEach(topics::add); return topics;
		 
		
	}
	
	public Optional<Courses> getcourses(String id) {
		//return topics.stream().filter(t->t.getId().equals(id)).findFirst().get();
		return courserepository.findById(id);
	}
	public void add(Courses course) {
		// TODO Auto-generated method stub
		//topics.add(topic);
		courserepository.save(course);
		
	}
	public void update(Courses course, String id) {
		courserepository.save(course);

			//for(int i=0;i<topics.size();i++) {
			//	Topic t=topics.get(i);
			//	if(t.getId().equals(id)) {
			//		topics.set(i, topic);
			//	}
				return;
			//}
		
		
		
	}
	public void delete(String id) {
		// TODO Auto-generated method stub
		//topics.removeIf(t->t.getId().equals(id));
		courserepository.deleteById(id);
		
	}
	
}
