import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Employee } from 'src/app/employee.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  //this is a input property, so need to decarate with @input.
  @Input() employee: Employee;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    //raise notify event here
    this.notify.emit(this.employee.name);
  }
}
