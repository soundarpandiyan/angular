import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  employees: any
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }

  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe(res => {
      this.getEmployee();
      console.log('Deleted');
    });
  }
}
