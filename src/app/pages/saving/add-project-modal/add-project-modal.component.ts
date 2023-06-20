import {Component, Inject, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators, AbstractControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiServiceService} from "../saving-service/api-service.service";

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.css']
})
export class AddProjectModalComponent implements OnInit {

  @Input() project!: any; //Input permet au composant de recevoir des valeurs du parent

  isSubmitClicked: boolean = false;

  savingForm!: FormGroup; // pour gérer les validations du formulaire

  // minEndDate!: string; // représente la date minimale de validation de la date butoire

  actionBtn: string = "Valider";



  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private api: ApiServiceService,
    private dialogRef: MatDialogRef<AddProjectModalComponent>
  ) {
  }


  /**
   * ngOnInit initialise les valeurs du formulaire si mise à jour*/
  ngOnInit() {


    // PRODUCTION D'UN FORMGROUP
    this.savingForm = this.formBuilder.group({
      name: ['', Validators.required],
      goal: ['', Validators.required],
      // endDate: ['']
    });

    /**
     * La valeur de editData sera fourni via dialog de MAT_DIALOG_DATA */
    if (this.editData) {
      this.actionBtn = "Mettre à jour"
      this.savingForm.controls['name'].setValue(this.editData.name);
      this.savingForm.controls['goal'].setValue(this.editData.goal)
      // this.savingForm.controls['endDate'].setValue(this.editData.endDate);

    }


    //DATE DE J+1
    // const tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // this.minEndDate = this.formatDate(tomorrow);

  }

  // formatDate(date: Date): string {
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const day = date.getDate().toString().padStart(2, '0');
  //   return `${year}-${month}-${day}`;
  // }


 /**
  * Si la checkbox est utilisée alors le datePicker est inutilisable et inversement*/
  // handleDateClick() {
  //   const checkbox = this.elementRef.nativeElement.querySelector('.checkboxNinja') as HTMLInputElement;
  //   this.renderer.setStyle(checkbox, 'pointer-events', 'none');
  //
  //
  // }

  // handleCheckoutClick() {
  //   const datePicker = this.elementRef.nativeElement.querySelector('#dateOfEndId') as HTMLInputElement;
  //   this.renderer.setStyle(datePicker, 'pointer-events', 'none');
  // }

/**
 * Pour ajouter une nouvelle épargne*/
  addProject() {
    this.isSubmitClicked = true;
console.log(this.savingForm.value);
    if (!this.editData) { // si ce n'est pas une mise à jours alors c'est un ajout
      if (this.savingForm.valid) {
        this.api.postProject(this.savingForm.value) // HTTP POST
          .subscribe({ // abonnement à l'observale de la requete
            next: (res) => {
              console.log("L'épargne a été produite avec succès !");
              this.dialogRef.close('save');
              this.savingForm.reset();
            },
            error: () => {
              console.log("Erreur lors de la production de l'alerte")
            }
          })
      }
    } else {
      this.updateProject()
    }
  }


  updateProject() { // http put
    this.api.updateProject(this.savingForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          console.log("L'épargne a été mis à jour avec succès ! ");
          this.savingForm.reset();
          this.dialogRef.close('mettre à jour');
        },
        error: () => {
          console.log("Erreur lors de la mise à jour de l'épargne !")
        }
      })
  }


}
