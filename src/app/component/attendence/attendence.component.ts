import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
 
  firstname: string;
  Phone_no: string;
  emailId: string;
  attendence : string;
}


@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements AfterViewInit  {
  posts:any=null;
  constructor(private service:GetDataService) { }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
      console.log("hitted");
     });

  }
  displayedColumns: string[] = ['firstname','Phone_no','emailId','attendence'];
dataSource = new MatTableDataSource<PeriodicElement>(this.posts);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
  

}
