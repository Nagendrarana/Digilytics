import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  current_id :number;
  posts:any;
  current_email :string;

  constructor(private service :GetDataService) { }

  ngOnInit(): void {
    this.current_email= this.service.getCurrentEmail();
    this.service.getByEmail(this.current_email).subscribe(response => {
      this.posts = response;
      });
  }



  

 
  

}
