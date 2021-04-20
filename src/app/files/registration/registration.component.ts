import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder ) { }
  registrationForm: FormGroup;
  isSubmitted  =  false;
  
  fullNameVal = '';
  emailVal = '';
  phoneVal = '';
  jobVal = '';
  createPasswordVal = '';
  repeatPasswordVal = '';

  ngOnInit(): void {
    this.registrationForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', Validators.required],
      jobtype: ['', ''],
      createpassword: ['', Validators.required],
      repeatpassword: ['',Validators.required]
  }, {
    validator: this.mustMatch('createpassword', 'repeatpassword')
});
  
  }
  get formControls() { return this.registrationForm.controls; }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

  createAccount(){
    console.log(this.registrationForm.value);
    this.isSubmitted = true;
    if(this.registrationForm.invalid){
      return;
    }

  }

}
