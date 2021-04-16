import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Userdetails } from './userdetails';


@Injectable({
  providedIn: 'root'
})
export class ManageusersService {

  private apiServer = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  create(profile): Observable<Userdetails> {
    return this.httpClient.post<Userdetails>(this.apiServer + '/profile/', JSON.stringify(profile), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id): Observable<Userdetails> {
    return this.httpClient.get<Userdetails>(this.apiServer + '/profile/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Userdetails[]> {
    return this.httpClient.get<Userdetails[]>(this.apiServer + '/profile/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, profile): Observable<Userdetails> {
    return this.httpClient.put<Userdetails>(this.apiServer + '/profile/' + id, JSON.stringify(profile), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Userdetails>(this.apiServer + '/profile/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}

