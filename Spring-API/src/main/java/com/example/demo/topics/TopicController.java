package com.example.demo.topics;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TopicController {
	@Autowired
	private TopicService topicservices;
	
	@RequestMapping("/topics")
	public List<Topic> getAllTopics(){
		return topicservices.getallTopics();
		
	
		
		
	}
	@RequestMapping("/topics/{id}")
	public Optional<Topic> gettopic(@PathVariable String id) {
		return topicservices.gettopic(id);
	}
	@RequestMapping(method=RequestMethod.POST,value="/topics")
	public void addtopic(@RequestBody Topic topic ) {
		topicservices.add(topic);
	}
	@RequestMapping(method=RequestMethod.PUT,value="/topics/{id}")
	public void topicupdate(@RequestBody Topic topic ,@PathVariable String id) {
		topicservices.update(topic,id);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/topics/{id}")
	public void topicdelete(@PathVariable String id) {
		topicservices.delete(id);
	}
	
	
	
	

}
