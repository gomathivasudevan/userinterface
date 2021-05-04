import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthInterceptorService } from './files/templatedrivenform/auth-interceptor.service';
import { LoggingInterceptorService } from './files/templatedrivenform/logging-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BetterHighlightDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    HttpClientModule, 
    EmployeeService, 
    //order is importent here
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: LoggingInterceptorService, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
