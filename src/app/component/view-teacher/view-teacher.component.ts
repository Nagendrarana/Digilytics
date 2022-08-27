import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {GetDataService} from '../../service/get-data.service'


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {


  posts : any;

  constructor(private service:GetDataService) { }

  ngOnInit(): void {

    this.service.getAllteacher()
    .subscribe(response => {
      this.posts = response;
      console.log("hitted");
     });
    
  }

}