import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'; 
import { GetDataService } from 'src/app/service/get-data.service';  

export interface UserData {
  id: number;
  name: string;
  email: string;
  phone_no :number;
  
}
@Component({
  selector: 'app-mat-teacher-filter',
  templateUrl: './mat-teacher-filter.component.html',
  styleUrls: ['./mat-teacher-filter.component.css']
})
export class MatTeacherFilterComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'firstname', 'email','phone_no'];
  dataSource: MatTableDataSource<UserData>;
  posts:any =[];
  users:any =[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service :GetDataService) {
   
  
  }
  ngOnInit(): void {
    this.service.getAllteacher().subscribe(response =>{
      this.posts=response;
      console.log(this.posts)
      for (const iterator of this.posts) {
        console.log(iterator);
        this.users.push(iterator);
       }
       this.dataSource = new MatTableDataSource(this.users);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
    });
   
   
   
  }

  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
 
  

}
