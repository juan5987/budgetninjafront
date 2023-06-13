import { Component, Inject, OnInit, ElementRef,Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, AbstractControl } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {ApiServiceService} from "../saving-service/api-service.service";

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.css']
})
export class AddProjectModalComponent implements OnInit {
  isSubmitClicked: boolean = false;

  savingForm!: FormGroup;
  minEndDate!: string;

  actionBtn : string = "Valider";



  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private renderer : Renderer2,
    private elementRef : ElementRef,
    private api : ApiServiceService,
    private dialogRef : MatDialogRef<AddProjectModalComponent>
  ) {}

  ngOnInit() {


    //FORMGROUP
    this.savingForm = this.formBuilder.group({
      objEpargne: ['', Validators.required],
      amountToGet: ['', Validators.required],
      yesOrNo: ['', Validators.required],
      endDate: ['']
    });


    if(this.editData){
      this.actionBtn = "Mettre à jour"
      this.savingForm.controls['objEpargne'].setValue(this.editData.objEpargne);
      this.savingForm.controls['amountToGet'].setValue(this.editData.amountToGet);
      this.savingForm.controls['yesOrNo'].setValue(this.editData.yesOrNo);
      this.savingForm.controls['endDate'].setValue(this.editData.endDate);

    }




    //DATE
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.minEndDate = this.formatDate(tomorrow); // Définit la valeur minimale comme étant la date de demain



  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }



  // pour date => si used alors checkbox disabled
  handleDateClick() {
    const checkbox = this.elementRef.nativeElement.querySelector('.checkboxNinja') as HTMLInputElement;
    this.renderer.setStyle(checkbox, 'pointer-events', 'none');




  }

  handleCheckoutClick() {
    const datePicker = this.elementRef.nativeElement.querySelector('#dateOfEndId') as HTMLInputElement;
    this.renderer.setStyle(datePicker, 'pointer-events', 'none');
  }




  addSavingGoal(){
    this.isSubmitClicked = true;

    if(!this.editData){
      if(this.savingForm.valid){
        this.api.postSavingGoal(this.savingForm.value)
          .subscribe({
            next:(res)=>{
              console.log("L'épargne a été produite avec succès !");
              this.savingForm.reset();
              this.dialogRef.close('save');
            },
            error:()=>{
              console.log("Erreur lors de la production de l'alerte")
            }
          })
      }
    } else{
      this.updateSavingGoal()
    }
  }


  updateSavingGoal(){
    this.api.putSavingGoal(this.savingForm.value,this.editData.id)
      .subscribe({
        next:(res)=>{
          console.log("L'épargne a été mis à jour avec succès ! ");
          this.savingForm.reset();
          this.dialogRef.close('mettre à jour');
        },
        error:()=>{
          console.log("Erreur lors de la mise à jour de l'épargne !")
        }
      })
  }





}
