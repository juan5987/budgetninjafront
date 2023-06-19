import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  categorieForm!: FormGroup;
  actionBtn: string = 'Enregistrer';
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}
  ngOnInit(): void {
    this.categorieForm = this.formBuilder.group({
      categorieName: ['', Validators.required],
    });
    if (this.editData) {
      this.actionBtn = 'Update';
      this.categorieForm.controls['categorieName'].setValue(
        this.editData.categorieName
      );
    }
  }
  ajouterCategorie() {
    if (!this.editData) {
      if (this.categorieForm.valid) {
        this.api.postCategorie(this.categorieForm.value).subscribe({
          next: (res) => {
            this.categorieForm.reset();
            this.dialogRef.close('Enregistrer');
          },
          error: () => {
            alert('Error while adding the caté');
          },
        });
      }
    } else {
      this.updateCategorie();
    }
  }
  updateCategorie() {
    this.api.putCategorie(this.categorieForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        this.categorieForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record!!");
      }
    })
   
  }
}
