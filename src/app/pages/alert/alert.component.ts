import {Component, OnInit, ViewChild,  HostListener} from '@angular/core';
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

  displayedColumns: string[] = ['alertName', 'seuilAmount', 'categorie', 'periodInput', 'periodDropdown', 'commentaries', 'actions'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isScreenLessThan985px: boolean = false;


  constructor(public dialog: MatDialog, private api : ApiService) {
  }

  ngOnInit(): void {
        this.getAllAlert();
    this.isScreenLessThan985px = window.innerWidth < 985;
    }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isScreenLessThan985px = window.innerWidth < 985;
  }

  openDialog() {
    this.dialog.open(AddAlertComponent, {
      width:'50%',
      height:'88.32%'
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
          console.log("Erreur concernant la récupération des données !")
        }
      })
  }

editAlert(row : any){
  this.dialog.open(AddAlertComponent, {
    width:'50%',
    height:'87.8%',
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
          console.log("L'alerte à été supprimée avec succès !");
          this.getAllAlert();
        },
        error:()=>{
          console.log("La suppression de l'alerte n'a pas pu se valider")
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
