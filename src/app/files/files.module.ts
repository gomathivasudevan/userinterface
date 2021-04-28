import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { basicHighlightDirective } from '../basic-highlight/basic-highlight.directive';

@NgModule({
  declarations: [
    LoginComponent, 
    RegistrationComponent, 
    DashboardComponent, 
    ManageusersComponent, 
    TemplatedrivenformComponent, 
    ParentComponent, 
    ChildComponent, 
    basicHighlightDirective],
  imports: [
    CommonModule,
    FilesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FilesModule { }
