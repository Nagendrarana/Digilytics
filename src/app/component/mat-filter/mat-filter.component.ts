import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'; 
import { GetDataService } from 'src/app/service/get-data.service';  

export interface UserData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  father_name:string;
  address:string;
  phone_no :number;
  course : string;
}



@Component({
  selector: 'app-mat-filter',
  templateUrl: './mat-filter.component.html',
  styleUrls: ['./mat-filter.component.css']
})
export class MatFilterComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','father_name','address','phone_no','course'];
  dataSource: MatTableDataSource<UserData>;
  posts:any =[];
  users:any =[];
  newer = true;
  older = false;
  version_status = "newer"

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service :GetDataService) {
   
  
  }
  ngOnInit(): void {
    this.service.getPosts().subscribe(response =>{
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

  
 version(){
      this.newer = !this.newer;
      this.older = !this.older;
 }
  

}



