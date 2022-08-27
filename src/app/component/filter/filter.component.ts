import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  posts:any =[];
  searched :any=[];
  nametofind:any = '';
  students:any = [];
  constructor(private service:GetDataService) { }

  ngOnInit(): void {
    this.findbyname();
  
  }


  findbyname(){
    if(this.nametofind==''){
      this.service.getPosts().subscribe(response => {
        this.posts = response;
       });
    }
    else{
      this.service.getByFirstName(this.nametofind).subscribe(response => {
        this.posts=[];
        this.posts.push(response);
      });
    }
    
      

    
  }
}
