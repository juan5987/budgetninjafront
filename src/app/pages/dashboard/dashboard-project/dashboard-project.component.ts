import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard-project',
  templateUrl: './dashboard-project.component.html',
  styleUrls: ['./dashboard-project.component.css']
})
export class DashboardProjectComponent {
chart = new Chart({
    chart: {
      type: 'donut',
      height: 300
    },
    title: {
      text: 'Projet PC portable'
    },
    xAxis: {
      categories: [
        'Mars',
        'Avril',
        'Mai',
        'Juin',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Montant atteint',
          y: 57.8,
          color: '#044342',
          
        },
        {
          name: 'Montant restant',
          y: 42.2,
          color: '#7e0505',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }
  
}
