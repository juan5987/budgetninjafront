import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

import {AddAlertComponent} from "./add-alert/add-alert.component";
import {ApiService} from "./service/api.service";

import {AfterViewInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{

  title = 'Angular13Crud';

  displayedColumns: string[] = ['alertName', 'seuilAmount', 'periodInput', 'periodDropdown', 'commentaries', 'actions'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api : ApiService) {
  }

  ngOnInit(): void {
        this.getAllAlert();
    }



  openDialog() {
    this.dialog.open(AddAlertComponent, {
      width:'50%',
      height:'81%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllAlert();
      }
    })
  }
  getAllAlert(){
    this.api.getAlert()
      .subscribe({
        next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    },
        error:()=>{
          alert("Erreur pour aller récupérer les données !")
        }
      })
  }

editAlert(row : any){
  this.dialog.open(AddAlertComponent, {
    width:'50%',
    height:'81%',
    data : row }).afterClosed().subscribe(val=>{
      if(val === 'mettre à jour'){
        this.getAllAlert();
      }
  })

}


deleteAlert(id : number){
    this.api.deleteAlert(id)
      .subscribe({
        next:(res)=>{
          alert("L'alerte à été supprimée avec succès !");
          this.getAllAlert();
        },
        error:()=>{
          alert("La suppression de l'alerte n'a pas pu se valider")
        }
      })
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }






}
