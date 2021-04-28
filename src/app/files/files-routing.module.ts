import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { RegistrationComponent } from './registration/registration.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'templatedrivenform',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'manageusers',
    component: ManageusersComponent
  },
  {
    path:'templatedrivenform',
    component: TemplatedrivenformComponent
  },
  {
    path:'parent',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
