import { Component, OnInit } from '@angular/core';
declare var require: any;
var CanvasJS = require('../../../assets/canvasjs.min.js');
 
CanvasJS.addColorSet("customColorSet",["#ffcb06", "#ce1249", "#3a943c", "#7f3e83", "#812900", "#2078b6", "#df7f2e", "#e3e3e3"]);

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {


   classes = [];

  constructor() { }

  ngOnInit(): void {
  }
  chartOptions = {
    animationEnabled: true,
    theme: "dark2",
    colorSet: "customColorSet",
    title:{
      text: "Fees"
    },
    data: [{
      type: "doughnut",
      indexLabel: "{name}: {y}",
      innerRadius: "90%",
      yValueFormatString: "#,##0.00'%'",
      dataPoints: [
      { y: 75, name: "Submitted Fees" },
      { y: 25, name: "Remaining Fees" }
      
      ]
    }]
    }

}
