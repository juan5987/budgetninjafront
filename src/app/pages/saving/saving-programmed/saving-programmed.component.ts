import {Component, Input, OnInit} from '@angular/core';
import {ApiServiceService} from "../saving-service/api-service.service";
import {MatDialog} from "@angular/material/dialog";
import {AddSavingModalComponent} from "../add-saving-modal/add-saving-modal.component";

@Component({
  selector: 'app-saving-programmed',
  templateUrl: './saving-programmed.component.html',
  styleUrls: ['./saving-programmed.component.css']
})
export class SavingProgrammedComponent implements OnInit{

  @Input() proProject : any;

  constructor(private api : ApiServiceService, public dialog : MatDialog) {
  }

  ngOnInit() {
  }


  getAllProgrammedSaving(){
    this.api.getProgrammedSaving()
      .subscribe({
        next:(res)=>{
          console.log(res)
        },
        error:()=>{
          console.log("Erreur concernant la récupération des données !")
        }
      })
  }

  editProgrammedSaving(row : any){
    this.dialog.open(AddSavingModalComponent, {
      width:'50%',
      data : row }).afterClosed().subscribe(val=>{
      if(val === 'mettre à jour'){
        this.getAllProgrammedSaving();
        this.api.emitSavingUpdated(); // on émet evenement de mise à jour
      }
    })

  }


  deleteProgrammedSaving(id : number){
    this.api.deleteProgrammedSaving(id)
      .subscribe({
        next:(res)=>{
          console.log("L'épargne programmée à été supprimée avec succès !");
          this.getAllProgrammedSaving();
          this.api.emitSavingUpdated(); // de meme mais pour la mise à jour
        },
        error:()=>{
          console.log("La suppression de l'épargne programmée n'a pas pu se valider")
        }
      })
  }





}
