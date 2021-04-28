import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ManageusersService } from 'src/app/manageusers.service';
import { Userdetails } from 'src/app/userdetails';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {

  form: FormGroup;
  showCreateForm = false;
  showEditForm = false;
  User: any;
  OnButton: string = 'Add New User';

  checkoutForm = this.formBuilder.group({
    id: '',
    name: '',
    experience: '',
    designation: ''
  });

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private manageusersservice: ManageusersService) { }

  ngOnInit(): void {
    this.manageusersservice.getAll().subscribe((data: Userdetails[]) => {
      console.log(data);
      this.User = data;
    })
  }

  get f() {
    return this.form?.controls;
  }

  submit(f) {
    const newUser = f.value;
    // const existVal = this.User?.find(x => x.id == f.value.id);
    // if (existVal != undefined || existVal != null) {
    //   this.manageusersservice.update(f.value.id, f.value).subscribe((data) => { })
    // }
    // else {
      this.manageusersservice.create(newUser).subscribe((data) => {
        this.User = data;
      });
   // }
    this.manageusersservice.getAll().subscribe((data: Userdetails[]) => {
      this.User = data;
    })
    // this.showCreateForm = false;
    // this.OnButton = 'Add New User'
    this.checkoutForm.reset();
    this.checkoutForm.markAsPristine();
  }
  addUser() {
    this.checkoutForm.reset();
    if (this.showCreateForm) {
      this.showCreateForm = false;
      this.OnButton = 'Add New User'
    }
    else {
      this.showCreateForm = true;
      this.OnButton = 'Close'
    }
  }

  editUser(user) {
    this.showCreateForm = true;
    this.OnButton = 'Close'
    this.checkoutForm.get('name').patchValue(user.name);
    this.checkoutForm.get('experience').patchValue(user.experience);
    this.checkoutForm.get('designation').patchValue(user.designation);
    this.checkoutForm.get('id').patchValue(user.id);

  }
  deleteUser(userid) {
    this.manageusersservice.delete(userid).subscribe((data) => {
    });
    this.manageusersservice.getAll().subscribe((data: Userdetails[]) => {
      this.User = data;
    })
  }
}
