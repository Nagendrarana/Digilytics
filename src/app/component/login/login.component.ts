import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GetDataService} from '../../service/get-data.service'
import { SidebarComponent } from '../sidebar/sidebar.component';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  posts:any;

  credentials={
    email: '',
    password:''
  }
  constructor(private service:GetDataService , private router:Router) { }
  
  ngOnInit(): void {
  }

  

  onSubmit() {

    this.service.getByEmail(this.credentials.email)
    .subscribe(response => {
      this.posts = response;
      
      console.log("hitted");
      
      
      
     if(this.posts.email===this.credentials.email && this.posts.password===this.credentials.password  ){
      if(this.posts.role=="other"){
        this.router.navigate(['student']);
        
      }
      if(this.posts.role=="teacher"){

        this.router.navigate(['teacher']);
      }

      if(this.posts.role=="admin"){
        this.router.navigate(['admin']);
      }


    }
    else{
     
      alert("Try Again with correct Credentials");
      
    }
     });

     
   }
    
  }

