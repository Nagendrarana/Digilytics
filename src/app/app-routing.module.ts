import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TeacherComponent } from './component/teacher/teacher.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
 
  {
    path:"teacher",
    component:TeacherComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"home",
    component:HomeComponent
   
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"student",
    component:SidebarComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
