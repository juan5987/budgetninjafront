import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProjectModalComponent} from "./add-project-modal/add-project-modal.component";


@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent {

  selectedDate?: Date;

  constructor(private dialog: MatDialog) {


  }

  openDialog() {
    this.dialog.open(AddProjectModalComponent, {
      width: '50%',
      height: '88.32%'
    });

  }
}
