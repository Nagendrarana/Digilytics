package com.example.demo.courses;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.example.demo.topics.Topic;

@Entity
public class Courses {
	@Id
	private String id;
	private String name;
	private String description ;
	@ManyToOne
	private Topic topic;
	public String getId() {
		return id;
	}
	public Courses() {
		
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Courses(String id, String name, String description,String ID) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.topic = new Topic(ID,"","");
	}
	public Topic getTopic() {
		return topic;
	}
	public void setTopic(Topic topic) {
		this.topic = topic;
	}
	

}
