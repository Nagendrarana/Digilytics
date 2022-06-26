package com.example.demo.topics;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class TopicService {
	@Autowired
	private TopicRepository topicrepository;

	/*
	 * private List<Topic> topics = new ArrayList<>(Arrays.asList( new
	 * Topic("Spring","Spring framework","Spring framework desc"), new
	 * Topic("Spring2","Spring framework2","Spring framework desc2"), new
	 * Topic("Spring3","Spring framework3","Spring framework desc3") ));
	 */
	public List<Topic> getallTopics(){
		//return topics;
		List<Topic> topics = new ArrayList<>();
		topicrepository.findAll().forEach(topics::add);
		return topics;
	}
	public Optional<Topic> gettopic(String id) {
		//return topics.stream().filter(t->t.getId().equals(id)).findFirst().get();
		return topicrepository.findById(id);
	}
	public void add(Topic topic) {
		// TODO Auto-generated method stub
		//topics.add(topic);
		topicrepository.save(topic);
		
	}
	public void update(Topic topic, String id) {
		topicrepository.save(topic);

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
		topicrepository.deleteById(id);
		
	}
	
}
