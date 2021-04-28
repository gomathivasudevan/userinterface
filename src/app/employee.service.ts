import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private listEmployees: Employee[] = [
{
  id:1,
  name: 'Mark',
  gender: 'Male',
  email: 'mark@test.com',
  isActive: true
},
{
  id:2,
  name: 'Max',
  gender: 'Male',
  email: 'max@test.com',
  isActive: true
}
]
  constructor() { }

  getEmployee() : Employee[]{
    return this.listEmployees;
  }
}
