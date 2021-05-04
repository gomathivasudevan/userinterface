import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './posts.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss']
})
export class TemplatedrivenformComponent implements OnInit, OnDestroy {
  defaultUsername = 'Gomathi';
  @ViewChild('f') signupForm: NgForm;

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) { }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  ngOnInit(): void {
    this.errorSub = this.postsService.error.subscribe(errorMessge => {
      this.error = errorMessge;
    })
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, 
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );;
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // Alternative approach
  // onSubmit(){
  //   console.log(this.signupForm);
  // }

  //HTTP client implementation. So, i am overwriting this file
  // onSubmit(postData: {username: string; email: string}){
  //initially i dont declare the type for the postData. Now created the model for this.
  //So. commented the above line.
  onSubmit(postData: Post){
    this.postsService.createPost(postData.name, postData.email);
  }

  onFetch(){
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, 
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );;
  }

  onClear(){
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }

  onHandleError() {
    this.error = null;
  }
}
