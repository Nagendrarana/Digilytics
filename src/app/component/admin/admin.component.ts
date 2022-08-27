import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  vs=false;
  va=false;
  vr=false;
  vt=true;
    
  view_student(){
    this.vs=true;
    this.va=false;
    this.vr=false;
    this.vt=false;
  }
  view_teacher(){
    
    this.vs=false;
    this.va=false;
    this.vr=false;
    this.vt=true;
  }
  view_result(){
    this.vs=false;
    this.va=false;
    this.vr=true;
    this.vt=false;
  }
  view_attendence(){
    this.vs=false;
    this.va=true;
    this.vr=false;
    this.vt=false;
  }

 logout(){
  this.router.navigate([''])
 }
}
