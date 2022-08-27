import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-attendence',
  templateUrl: './student-attendence.component.html',
  styleUrls: ['./student-attendence.component.css']
})
export class StudentAttendenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  chart: any;
	
  chartOptions = {
    title:{
      text: "Subject Wise attendence"  
    },
    animationEnabled: true,
    data: [{        
      type: "column",
      dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 95 },
        { x: 60, y: 68 },
        { x: 70, y: 28 },
        { x: 80, y: 34 },
        { x: 90, y: 14 }
      ]
    }]
  }

}
