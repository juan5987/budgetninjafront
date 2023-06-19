import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiServiceService} from "../saving-service/api-service.service";

@Component({
  selector: 'app-add-saving-modal',
  templateUrl: './add-saving-modal.component.html',
  styleUrls: ['./add-saving-modal.component.css']
})
export class AddSavingModalComponent implements OnInit{

  @Input() programmedSaving! :any;

  isSubmitClicked: boolean = false;

  programmedSavingForm ! : FormGroup;
  actionBtn : string = "Valider";

  constructor(private formBuilder : FormBuilder,
              private api : ApiServiceService,
              @Inject(MAT_DIALOG_DATA) public editData : any,
              private dialogRef : MatDialogRef <AddSavingModalComponent>) {
  }

  ngOnInit() {
    this.programmedSavingForm = this.formBuilder.group({
      programmedAmount : ['', Validators.required],
      PeriodicityProgrammed: ['', Validators.required]

    });

    if(this.editData){
      this.actionBtn = "Mettre à jour"
      this.programmedSavingForm.controls['programmedAmount'].setValue(this.editData.programmedAmount);
      this.programmedSavingForm.controls['PeriodicityProgrammed'].setValue(this.editData.PeriodicityProgrammed)
    }

  }
  addProgrammedSaving(){
    this.isSubmitClicked = true;

    if(!this.editData){
      if(this.programmedSavingForm.valid){
        this.api.addProgrammedSaving(this.programmedSavingForm.value)
          .subscribe({
            next:(res)=>{
              console.log("L'épargne programmée été produite avec succès !");
              this.programmedSavingForm.reset();
              this.dialogRef.close('save');
            },
            error:()=>{
              console.log("Erreur lors de la production de l'épargne programmée")
            }
          })
      }
    } else{
      this.updateProgrammedSaving()
    }
  }

  updateProgrammedSaving(){
    this.api.updateProgrammedSaving(this.programmedSavingForm.value)
      .subscribe({
        next:(res)=>{
          console.log("L'épargne programmée a été mis à jour avec succès ! ");
          this.programmedSavingForm.reset();
          this.dialogRef.close('mettre à jour');
        },
        error:()=>{
          console.log("Erreur lors de la mise à jour de l'épargne programmée' !")
        }
      })
  }


}
