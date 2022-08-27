import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../service/get-data.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  posts:any;
  current_id : number;
  img_url :String ;
  current_email :string;

  fees_button=false;
  attendence_button=true;
  result_button=false;
  home_button=false;
  constructor(private service:GetDataService, private router:Router) { 
  
  }

  ngOnInit(): void {
    this.current_email=this.service.getCurrentEmail();
    this.img_url="./../../assets/img/"+this.current_id+".png"
    this.service.getByEmail(this.current_email)
    .subscribe(response => {
      this.posts = response;
      
    });
  }

  fee(){
    this.fees_button=true;
    this.attendence_button=false;
    this.result_button=false;
    this.home_button=false;
  }
  result(){
    this.fees_button=false;
    this.attendence_button=false;
    this.result_button=true; 
    this.home_button=false;

   }
  attendence(){
    this.fees_button=false;
    this.attendence_button=true;
    this.result_button=false; 
    this.home_button=false;

   }
   home(){
    this.fees_button=false;
    this.attendence_button=false;
    this.result_button=false; 
    this.home_button=true;
   }
   logout(){
      this.router.navigate(['']);
   }

}
