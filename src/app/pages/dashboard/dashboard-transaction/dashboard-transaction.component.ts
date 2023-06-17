import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard-transaction',
  templateUrl: './dashboard-transaction.component.html',
  styleUrls: ['./dashboard-transaction.component.css']
})
export class DashboardTransactionComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 400,
      width: 700,
    },
    title: {
      text: 'Historique transactions'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Juin'
      ]
    },
    yAxis: {
      title: {
        text: 'en €'
      }
    },
    series: [
      {
        name: "Revenus",
        type: "line",
        color: '#044342',
        data: [2100, 1780, 2100, 2080, 1980]
      },
      {
        name: 'Dépenses',
        type: 'line',
        color: '#7e0505',
        data: [
          3000, 700, 615, 980
        ]
      },
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}
