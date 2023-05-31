import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from "@angular/forms";
import {ApiService} from "../service/api.service";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.css']
})
export class AddAlertComponent implements OnInit{


  alertForm ! : FormGroup;
  actionBtn : string = "Valider";

 constructor(private formBuilder : FormBuilder,
             private api : ApiService,
             @Inject(MAT_DIALOG_DATA) public editData : any,
             private dialogRef : MatDialogRef<AddAlertComponent>) {
 }

 ngOnInit() {
   this.alertForm = this.formBuilder.group({
     alertName : ['', Validators.required],
     seuilAmount: ['', Validators.required],
     periodInput : ['', Validators.required],
     periodDropdown: ['', Validators.required],
     commentaries : ['', Validators.required]
   });

   if(this.editData){
     this.actionBtn = "Mettre à jour"
     this.alertForm.controls['alertName'].setValue(this.editData.alertName);
     this.alertForm.controls['seuilAmount'].setValue(this.editData.seuilAmount);
     this.alertForm.controls['periodInput'].setValue(this.editData.periodInput);
     this.alertForm.controls['periodDropdown'].setValue(this.editData.periodDropdown);
     this.alertForm.controls['commentaries'].setValue(this.editData.commentaries);

   }

 }
  addAlertAction(){
if(!this.editData){
  if(this.alertForm.valid){
    this.api.postAlert(this.alertForm.value)
      .subscribe({
        next:(res)=>{
          alert("L'alerte a été produite avec succès !");
          this.alertForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Erreur lors de la production de l'alerte")
        }
      })
  }
} else{
  this.updateAlert()
}
 }

  updateAlert(){
   this.api.putAlert(this.alertForm.value,this.editData.id)
   .subscribe({
     next:(res)=>{
       alert("L'alerte a été mis à jour avec succès ! ");
       this.alertForm.reset();
       this.dialogRef.close('mettre à jour');
     },
     error:()=>{
       alert("Erreur lors de la mise à jour de l'alerte !")
    }
   })
  }




}
