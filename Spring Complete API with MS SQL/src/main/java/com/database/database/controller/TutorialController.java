package com.database.database.controller;

import com.database.database.model.TutorialModel;
import com.database.database.repository.TutorialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class TutorialController {
    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome";
    }
    @Autowired
    TutorialRepository tutorialrepository;
    @GetMapping("/tutorials")
    public ResponseEntity<List<TutorialModel>> getAllTutorials(@RequestParam(required=false) String title){
        List<TutorialModel> tutorials = new ArrayList<TutorialModel>();
        if (title == null) {

           /* ResponseEntity<List<TutorialModel>> responseEntity = new ResponseEntity<>(tutorialrepository.findAll(), HttpStatus.OK);
            return responseEntity;*/
            tutorialrepository.findAll().forEach(tutorials::add);
        }
        else{
            tutorialrepository.findByTitleContaining(title).forEach(tutorials::add);
        }
        if (tutorials.isEmpty()){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(tutorials,HttpStatus.OK);



    }
    @PostMapping("/tutorials")
    public ResponseEntity<TutorialModel> putTutorials(@RequestBody TutorialModel tm ) {
        /* return tm + " \n Should be saved in the database";*/
        try {
            TutorialModel tutorial = tutorialrepository.save(new TutorialModel(tm.getTitle(), tm.getDescription(), false));
            ResponseEntity<TutorialModel> responseEntity = new ResponseEntity<>(tutorial,
                    HttpStatus.OK);
            return responseEntity;

        } catch (Exception e) {
            ResponseEntity<TutorialModel> responseEntity = new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            return responseEntity;

        }
    }
    @GetMapping("/tutorials/{id}")
    public ResponseEntity<TutorialModel> gettutorials(@PathVariable long id){
        /*return "Should return Data on the basis of the id " +id;*/
        Optional<TutorialModel> tutorialdata = tutorialrepository.findById(id);
       ;
        if(tutorialdata.isPresent()){
            ResponseEntity<TutorialModel> responseEntity =  new ResponseEntity<>(tutorialdata.get(),HttpStatus.OK);
           return responseEntity;
        }
        else {
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }




    }
    @PutMapping("/tutorials/{id}")
    public ResponseEntity<TutorialModel> updateTutorial(@PathVariable long id ,@RequestBody TutorialModel tm){
        /*System.out.println("Added "+ tm );
        return;*/
        Optional<TutorialModel> tutorialdata = tutorialrepository.findById(id);
        if(tutorialdata.isPresent()){
            TutorialModel tutorial = tutorialdata.get();
            tutorial.setTitle(tm.getTitle());
            tutorial.setDescription((tm.getDescription()));
            tutorial.setPublished(tm.isPublished());
            return new ResponseEntity<>(tutorialrepository.save(tutorial),HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/tutorials/{id}")
    public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
        try {
            tutorialrepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/tutorials")
    public ResponseEntity<HttpStatus> deleteAllTutorials() {
        try {
            tutorialrepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/tutorials/published")
    public ResponseEntity<List<TutorialModel>> findByPublished() {
        try {
            List<TutorialModel> tutorials = tutorialrepository.findByPublished(true);
            if (tutorials.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(tutorials, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}

