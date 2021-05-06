import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./posts.model";

//this providedIn also we can do in app.module.ts providers instead of here.
@Injectable({providedIn: 'root'})
export class PostsService{

  error = new Subject<string>();
  
    constructor(private http: HttpClient) { }

    createPost(name: string, email: string) {
        const postData: Post = {name: name, email: email};
        this.http
        .post<{ name: string }>(
            'https://db---for---ng-default-rtdb.firebaseio.com/posts.json',
            postData,
            {
              observe: 'response'
            }
          )
          .subscribe(
            responseData => {
            console.log(responseData);
            },
            error => {
              this.error.next(error.message);
            }
            )
    }

    fetchPost() {
    return this.http
    .get<{[key: string]: Post }>(
      'https://db---for---ng-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-Headers': 'Hello'}),
        params: new HttpParams().set('print','pretty')
      }
    )
    .pipe(
      map(responseData => {
        console.log(responseData);
        //declaring a variable postsArray - array of type Post
        const postsArray: Post[] = [];
        for(const key in responseData){
          // ... is an operator to form a new object. This operator will work with key value pair
          if(responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key], id: key });
          }
        }
        return postsArray;
      }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    )
    }

    deletePosts() {
        return this.http
        .delete('https://db---for---ng-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events'
        })
        .pipe(
          tap(event => {
            console.log(event);
            if(event.type === HttpEventType.Sent) {
              //...
            }
            if(event.type === HttpEventType.Response) {
              console.log(event.body);
            }
          })
          );
    }
}