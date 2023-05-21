// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
