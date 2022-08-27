import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TeacherComponent } from './component/teacher/teacher.component';
import { AdminComponent } from './component/admin/admin.component';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatTableModule} from '@angular/material/table';
import { ViewStudentComponent } from './component/view-student/view-student.component';
import { ResultComponent } from './component/result/result.component';
import { AttendenceComponent } from './component/attendence/attendence.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';








import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { FeesComponent } from './component/fees/fees.component';
import { StudentResultComponent } from './component/student-result/student-result.component';
import { StudentAttendenceComponent } from './component/student-attendence/student-attendence.component';
import { ViewTeacherComponent } from './component/view-teacher/view-teacher.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PaginatorComponent } from './component/paginator/paginator.component';
import { FilterComponent } from './component/filter/filter.component';
import { MatFilterComponent } from './component/mat-filter/mat-filter.component';
import { MatTeacherFilterComponent } from './component/mat-teacher-filter/mat-teacher-filter.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    TeacherComponent,
    AdminComponent,
    ViewStudentComponent,
    ResultComponent,
    AttendenceComponent,
    CanvasJSChart,
    FeesComponent,
    StudentResultComponent,
    StudentAttendenceComponent,
    ViewTeacherComponent,
    ProfileComponent,
    PaginatorComponent,
    FilterComponent,
    MatFilterComponent,
    MatTeacherFilterComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatProgressBarModule,
    MatGridListModule,
    MatTableModule,
    NgCircleProgressModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
