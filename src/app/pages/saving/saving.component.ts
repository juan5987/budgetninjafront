import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProjectModalComponent} from "./add-project-modal/add-project-modal.component";
import {AddSavingModalComponent} from "./add-saving-modal/add-saving-modal.component";
import {ApiServiceService} from "./saving-service/api-service.service";
import {Saving} from "./models/saving";


@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent implements OnInit{

  selectedDate?: Date; //necessaire car pas de date  ?

saving! : Saving;

  // On récupère les savingGoal et on les assignent à projects
  projects!: any;

  // On récupère les programmedSaving et on les assignent à proProjects
  proProjects! : any;

  /**
   * Lors de l'initialisation du composant, la méthode getSavingGoal()
   * du service api, va etre appelée, il y aura un abonnement à l'observable
   * iisu de la méthode du service qui est data, on assigne la valeur à projects.*/

  ngOnInit() {



    this.api.getSavingGoal()
      .subscribe((data : any)=> {
        this.saving = data
      });
    this.api.getSavingUpdated().subscribe(() => {
      this.api.getSavingGoal().subscribe((data: any) => {
        this.projects = data;
      });
    });






    this.api.getProgrammedSaving()
      .subscribe((data : any)=> {
        this.proProjects = data
      });
    this.api.getSavingUpdated().subscribe(() => {
      this.api.getProgrammedSaving().subscribe((data: any) => {
        this.proProjects = data;
      });
    });

  }

  constructor(private dialog: MatDialog, private api : ApiServiceService) {


  }



/**
 * Si la valeur val retournée est égale à 'save' alors ngOninit affichera automatiquement les savingGoals */
  openDialog() {
    this.dialog.open(AddProjectModalComponent, {
      width: '50%',

    }).afterClosed().subscribe(val=> {
      if (val === 'save') {
        this.api.getSavingGoal().subscribe((data: any) => {
          this.projects = data;
        });
      }

    });
  }

  openSecondDialog(){
    this.dialog.open(AddSavingModalComponent, {
      width: '50%',

    }).afterClosed().subscribe(val=> {
      if (val === 'save') {
        this.api.getProgrammedSaving().subscribe((data: any) => {
          this.proProjects = data;
        });
      }
    });
  }
}
