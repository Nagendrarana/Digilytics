import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  
  ID : number;
  Email :string;
  posts :any;
  rs:any;

  
  private url = "http://localhost:9000/student";
  
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
   
    return this.httpClient.get(this.url);
    
  }
 
  getById(id:number){
    this.ID = id;
   
   return this.httpClient.get("http://localhost:9000/student/"+id);

  }

  getAllteacher(){
    return this.httpClient.get("http://localhost:9000/teacher/");
  }

  getCurrentId(){
    this.rs  = this.httpClient.get("http://localhost:9000/studentbyemail/"+this.Email).subscribe(response => {
      this.posts = response;
      this.ID=this.posts.id;
    });
    
    return this.ID;
  }

  getByEmail(email:string){
    this.Email=email;
    return this.httpClient.get("http://localhost:9000/studentbyemail/"+email)
  }
  
  getCurrentEmail(){
   
      return this.Email;
    }
 
  getByFirstName(name:string){
    return this.httpClient.get("http://localhost:9000/studentbyfirstname/"+name);
  }

}
