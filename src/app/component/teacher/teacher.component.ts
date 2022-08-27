import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  posts:any;
  currentid:number;
  current_email:string;
  student_data=false;
  attendence=false;
  chart=true;
  homebutton = false;
  constructor(private service: GetDataService,private router:Router) { }

  ngOnInit(): void {
      
       this.current_email=this.service.getCurrentEmail();
       this.service.getByEmail(this.current_email)
       .subscribe(response => {
         this.posts = response;
         
       });
       
  }
  view(){
     
      this.student_data=true;
      this.attendence=false;
      this.chart=false;
      this.homebutton=false;
  }
 attend(){
  this.attendence=true;
  this.chart=false;
  this.student_data=false;
  this.homebutton=false;

 }
 view_result(){
  
  this.chart = true;
  this.attendence=false;
  this.student_data=false;
  this.homebutton=false;

 }
 home(){
  this.chart = false;
  this.attendence=false;
  this.student_data=false;
  this.homebutton=true;

 }
  logout(){
    this.router.navigate([''])
  }
}
