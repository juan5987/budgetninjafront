import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProjectModalComponent} from "./add-project-modal/add-project-modal.component";
import {AddSavingModalComponent} from "./add-saving-modal/add-saving-modal.component";
import {ApiServiceService} from "./saving-service/api-service.service";


@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent implements OnInit{

  selectedDate?: Date;
  projects!: any;
  ngOnInit() {
    this.api.getSavingGoal()
      .subscribe((data : any)=> {
        this.projects = data
      })

  }

  constructor(private dialog: MatDialog, private api : ApiServiceService) {


  }




  openDialog() {
    this.dialog.open(AddProjectModalComponent, {
      width: '50%',
    });
  }

  openSecondDialog(){
    this.dialog.open(AddSavingModalComponent, {
      width: '50%',
    })
  }





}
