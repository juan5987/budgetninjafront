import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.css']
})
export class AddProjectModalComponent implements OnInit{

  savingForm ! : FormGroup;


  constructor(private formBuilder : FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData : any,){}


  ngOnInit() {
    this.savingForm=this.formBuilder.group({
      objEpargne:['', Validators.required],
      amountToGet:['', Validators.required],
      yesOrNo:['',Validators.required],
      endDate:['',Validators.required]

    })
  }


}
