import {Component, Input, OnInit, Output} from '@angular/core';
import {ApiServiceService} from "../saving-service/api-service.service";
import {AddProjectModalComponent} from "../add-project-modal/add-project-modal.component";
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
@Component({
  selector: 'app-saving-project',
  templateUrl: './saving-project.component.html',
  styleUrls: ['./saving-project.component.css']
})
export class SavingProjectComponent implements OnInit{

@Input() project : any;

chartOptions!: Options;
chartColors: string[] = ['#ff8c00', '#b7b7b7'];
Highcharts: typeof Highcharts = Highcharts;

timeRemaining!: number; // pour stocker le temps restant en secondes


  constructor(private api : ApiServiceService, public dialog: MatDialog) {
  }


  ngOnInit() {


    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: ''
      }, credits: {
        enabled: false
      },
      colors: this.chartColors,
      series: [{
        type: 'pie',
        name: 'Donut',
        data: [
          { name: 'Montant accumulé', y: 30 },
          { name: 'Reste à épargner', y: 20 }
        ]
      }]
    };







    // this.calculateTimeRemaining();
    // setInterval(() => {
    //   this.calculateTimeRemaining();
    // }, 1000); // Mettre à jour le temps restant toutes les secondes
  }

  // calculateTimeRemaining() {
  //   const endDate = new Date(this.project.endDate).getTime(); // Convertir la date d'échéance en millisecondes
  //   const now = new Date().getTime(); // Obtenir la date actuelle en millisecondes
  //   this.timeRemaining = Math.max(0, Math.floor((endDate - now) / 1000)); // Calculer le temps restant en secondes
  // }
  //
  //
  // formatTimeRemaining(): string {
  //   const days = Math.floor(this.timeRemaining / 86400);
  //   const hours = Math.floor((this.timeRemaining % 86400) / 3600);
  //   const minutes = Math.floor((this.timeRemaining % 3600) / 60);
  //   const seconds = this.timeRemaining % 60;
  //
  //   return `${days}j ${hours}h ${minutes}min ${seconds}s`;
  // }
  //
  //
  // isNoEndDateChecked(): boolean {
  //   return this.project.endDate === true;
  // }


  getAllProject(){
    this.api.getAllProject()
      .subscribe({
        next:(res)=>{
          console.log(res)
        },
        error:()=>{
          console.log("Erreur concernant la récupération des données !")
        }
      })
  }

  editProject(row : any){
    this.dialog.open(AddProjectModalComponent, {
      width:'50%',
      data : row }).afterClosed().subscribe(val=>{
      if(val === 'mettre à jour'){
        this.getAllProject();
        // this.api.emitSavingUpdated(); // on émet evenement de mise à jour
      }
    })

  }


  deleteProject(id : number){
    this.api.deleteProject(id)
      .subscribe({
        next:(res)=>{
          console.log("L'épargne à été supprimée avec succès !");
          this.getAllProject();
          // this.api.emitSavingUpdated(); // de meme mais pour la mise à jour
        },
        error:()=>{
          console.log("La suppression de l'épargne n'a pas pu se valider")
        }
      })
  }



}
