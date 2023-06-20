// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Composants
import { AppComponent } from './app.component';
import { SavingComponent } from './pages/saving/saving.component';
import { AlertComponent } from './pages/alert/alert.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AccountComponent } from './pages/account/account.component';
import { SidebarComponent } from './commons/sidebar/sidebar.component';
import { LinkToAccountComponent } from './commons/link-to-account/link-to-account.component';
import { HomeComponent } from './pages/home/pages/home.component';
import { AccountUpdateUsernameComponent } from './pages/account/account-update-username/account-update-username.component';
import { AccountUpdateEmailComponent } from './pages/account/account-update-email/account-update-email.component';
import { AccountUpdatePasswordComponent } from './pages/account/account-update-password/account-update-password.component';
import { AddAlertComponent } from './pages/alert/add-alert/add-alert.component';
import { AlertElementComponent } from './pages/alert/alert-element/alert-element.component';
import { BudgetIndicatorComponent } from './pages/budget/budget-indicator/budget-indicator.component';
import { BudgetTransactionComponent } from './pages/budget/budget-transaction/budget-transaction.component';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';
import { DeleteCategoryComponent } from './pages/categories/delete-category/delete-category.component';
import { ModifyCategoryComponent } from './pages/categories/modify-category/modify-category.component';
import { CategoryComponent } from './pages/categories/category/category.component';
import { DashboardIndicatorComponent } from './pages/dashboard/dashboard-indicator/dashboard-indicator.component';
import { DashboardTransactionComponent } from './pages/dashboard/dashboard-transaction/dashboard-transaction.component';
import { DashboardProjectComponent } from './pages/dashboard/dashboard-project/dashboard-project.component';
import { AddSavingModalComponent } from './pages/saving/add-saving-modal/add-saving-modal.component';
import { AddProjectModalComponent } from './pages/saving/add-project-modal/add-project-modal.component';
import { SavingProjectComponent } from './pages/saving/saving-project/saving-project.component';
import { DeleteProgramedSavingModalComponent } from './pages/saving/delete-programed-saving-modal/delete-programed-saving-modal.component';
import { DeleteSavingProjectModalComponent } from './pages/saving/delete-saving-project-modal/delete-saving-project-modal.component';
import { HomeheaderComponent } from './pages/home/components/homeheader/homeheader.component';
import { LoginModalComponent } from './pages/home/components/login-modal/login-modal.component';
import { SignupModalComponent } from './pages/home/components/signup-modal/signup-modal.component';
import { AddTransactionModalComponent } from './pages/budget/add-transaction-modal/add-transaction-modal.component';
import { UpdateTransactionComponent } from './pages/budget/update-transaction/update-transaction.component';
import { DialogComponent } from './pages/categories/dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SavingComponent,
    AlertComponent,
    DashboardComponent,
    BudgetComponent,
    CategoriesComponent,
    AccountComponent,
    SidebarComponent,
    LinkToAccountComponent,
    HomeComponent,
    AccountUpdateUsernameComponent,
    AccountUpdateEmailComponent,
    AccountUpdatePasswordComponent,
    AddAlertComponent,
    AlertElementComponent,
    BudgetIndicatorComponent,
    BudgetTransactionComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    ModifyCategoryComponent,
    CategoryComponent,
    DashboardIndicatorComponent,
    DashboardTransactionComponent,
    DashboardProjectComponent,
    AddSavingModalComponent,
    AddProjectModalComponent,
    SavingProjectComponent,
    DeleteProgramedSavingModalComponent,
    DeleteSavingProjectModalComponent,
    HomeheaderComponent,
    LoginModalComponent,
    SignupModalComponent,
    AddTransactionModalComponent,
    UpdateTransactionComponent,
    DialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatDividerModule,
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatDialogModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  MatToolbarModule,
  MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
