import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, AbstractControl } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.css']
})
export class AddProjectModalComponent implements OnInit {
  savingForm!: FormGroup;
  minEndDate!: string; // Stocke la valeur minimale pour la date de fin

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
  ) {}

  ngOnInit() {

    //DATE
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.minEndDate = this.formatDate(tomorrow); // Définit la valeur minimale comme étant la date de demain


    //FORMGROUP
    this.savingForm = this.formBuilder.group({
      objEpargne: ['', Validators.required],
      amountToGet: ['', Validators.required],
      yesOrNo: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
