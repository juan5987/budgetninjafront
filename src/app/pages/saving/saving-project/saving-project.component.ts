import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../saving-service/api-service.service";
import {AddProjectModalComponent} from "../add-project-modal/add-project-modal.component";
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-saving-project',
  templateUrl: './saving-project.component.html',
  styleUrls: ['./saving-project.component.css']
})
export class SavingProjectComponent implements OnInit{


  constructor(private api : ApiServiceService, public dialog: MatDialog) {
  }


  ngOnInit() {
  }


  getAllSavingGoal(){
    this.api.getSavingGoal()
      .subscribe({
        next:(res)=>{
          console.log(res)
        },
        error:()=>{
          console.log("Erreur concernant la récupération des données !")
        }
      })
  }

  editSavingGoal(row : any){
    this.dialog.open(AddProjectModalComponent, {
      width:'50%',
      height:'87.8%',
      data : row }).afterClosed().subscribe(val=>{
      if(val === 'mettre à jour'){
        this.getAllSavingGoal();
      }
    })

  }


  deleteSavingGoal(id : number){
    this.api.deleteSavingGoal(id)
      .subscribe({
        next:(res)=>{
          console.log("L'épargne à été supprimée avec succès !");
          this.getAllSavingGoal();
        },
        error:()=>{
          console.log("La suppression de l'épargne n'a pas pu se valider")
        }
      })
  }



}
