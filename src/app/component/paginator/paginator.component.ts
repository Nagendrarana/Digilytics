import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { GetDataService } from 'src/app/service/get-data.service';

export interface PeriodicElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  Name: string;
  Phone_no: string;
  emailId: string;
}

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  teachers: any = null;
  constructor(private service:GetDataService) { }

  ngOnInit(): void {

    this.service.getAllteacher()
    .subscribe( response => {
             this.teachers = response;
             
             this.dataSource.paginator = this.paginator;
             console.log("teachers")
            });
  }
  displayedColumns: string[] = ['Name','Phone_no','emailId'];
dataSource = new MatTableDataSource<PeriodicElement>(this.teachers);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    
  }
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
