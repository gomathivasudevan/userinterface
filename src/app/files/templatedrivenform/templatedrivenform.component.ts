import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss']
})
export class TemplatedrivenformComponent implements OnInit {
  defaultUsername = 'Gomathi';
  @ViewChild('f') signupForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // Alternative approach
  onSubmit(){
    console.log(this.signupForm);
  }
}
