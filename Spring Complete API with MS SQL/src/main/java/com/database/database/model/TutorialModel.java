package com.database.database.model;

import javax.persistence.*;
//defining table
@Entity
@Table(name = "tutorial")
public class TutorialModel {
    @Id
    //for private key
    @GeneratedValue(strategy = GenerationType.AUTO)
    //for generating auto incremented id
    private long id;
    //giving column name
    @Column(name="title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "published")
    private boolean published;
    //making a default constructor
    //making getter and setter
    //shortcut alt+insert

    public TutorialModel(){

    }
    public TutorialModel(String title, String description, boolean published) {
        this.title = title;
        this.description = description;
        this.published = published;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isPublished() {
        return published;
    }

    public void setPublished(boolean published) {
        this.published = published;
    }
}
