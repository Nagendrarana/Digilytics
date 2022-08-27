import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chart: any;
	
	chartOptions = {
	  animationEnabled: true,
	  theme: "light2",
	  title:{
		text: "Last year Vs Current year"
	  },
	 
	  axisY: {
		title: "Average Marrks"
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: "pointer",
		itemclick: function (e: any) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			} 
			e.chart.render();
		}
	  },
	  data: [{
		type: "line",
		showInLegend: true,
		name: "Last year Marks",
		
		dataPoints: [
			{ x: 1, y: 63 },
			{ x: 2, y: 69 },
			{ x: 3, y: 65 },
			{ x: 4, y: 70 },
			{ x: 5, y: 71 },
			{ x: 6, y: 65 },
			{ x: 7, y: 73 },
			{ x: 8, y: 86 }
			
		]
	  }, {
		type: "line",
		showInLegend: true,
		name: "Current year marks",
		dataPoints: [
			{ x: 1, y: 60 },
			{ x: 2, y: 57 },
			{ x: 3, y: 51 },
			{ x: 4, y: 56 },
			{ x: 5, y: 54 },
			{ x: 6, y: 55 },
			{ x: 7, y: 54 },
			{ x: 8, y: 69 }
			
		]
	  }]
	}

}
