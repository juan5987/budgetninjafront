import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { AlertComponent } from './pages/alert/alert.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SavingComponent } from './pages/saving/saving.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'alerts', component: AlertComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'saving', component: SavingComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
