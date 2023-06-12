import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  displayedColumns: string[] = ['id', 'categorieName', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private api: ApiService) {}
  ngOnInit(): void {
    this.getAllCategories();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '50%',
    }).afterClosed().subscribe(val=>{
      if(val==='Enregistrer'){
        this.getAllCategories();
      }
    });
  }
  getAllCategories() {
    this.api.getCategorie().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('error while fetching the Records ');
      },
    });
  }
  editCategorie(row: any){
    this.dialog.open(DialogComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllCategories();
      }
    })
  }
  deleteCategorie(id:number){
    this.api.deteleCategorie(id)
    .subscribe({
      next:(res)=>{
        alert("Product deleted ");
        this.getAllCategories();
      },
      error: ()=>{
        alert("Error while deleting")
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
