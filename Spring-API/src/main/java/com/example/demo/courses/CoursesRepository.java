package com.example.demo.courses;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CoursesRepository extends  CrudRepository<Courses,String> {
		public List<Courses> findByTopicId(String topicid);

}
