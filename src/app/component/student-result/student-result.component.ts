import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  	
  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Your Result Vs Average Result"
	  },
	  axisX: {
		labelAngle: -90
	  },
	  axisY: {
		title: "Percentage"
	  },
	  axisY2: {
		title: "Percentage"
	  },
	  toolTip: {
		shared: true
	  },
	  legend:{
		cursor:"pointer",
		itemclick: function(e: any){
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  }
		  else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{
		type: "column",	
		name: "Your Marks",
		legendText: "Your Marks",
		showInLegend: true, 
		dataPoints:[
		  {label: "sem1", y: 9.6},
		  {label: "sem2", y: 9},
		  {label: "sem3", y: 9.2},
		  {label: "sem4", y: 8.7},
		  {label: "sem5", y: 8.8},
		  {label: "sem6", y: 8.9},
		  {label: "sem7", y: 9.7},
		  {label: "sem8", y: 8.7},
		 
		]
	  }, {
		type: "column",	
		name: "Average Marks",
		legendText: "Average Marks",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints:[
			{label: "sem1", y: 8.2},
			{label: "sem2", y: 8.5},
			{label: "sem3", y: 8.6},
			{label: "sem4", y: 8.5},
			{label: "sem5", y: 8.7},
			{label: "sem6", y: 8.9},
			{label: "sem7", y: 8.2},
			{label: "sem8", y: 9},
		]
	  }]
	}

}
