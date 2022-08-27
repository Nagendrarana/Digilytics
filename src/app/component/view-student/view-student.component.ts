import { PositionStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../service/get-data.service'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
 var ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
  
];






@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
 
  posts:any;
  test :string;
  
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;


  constructor(private service:GetDataService) { }

  ngOnInit(): void {

    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
      console.log("hitted");
     });
    
  }
  

  

}
