import { Component, OnInit } from '@angular/core';
import {Employee } from 'src/app/employee.model';
import {EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  employees: Employee[];
  dataFromChild: string;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployee();
  }

  handleNotify(eventData: string) {
    this.dataFromChild = eventData;
  }
}
