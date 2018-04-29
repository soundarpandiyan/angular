import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: any;
  angForm: FormGroup;
  title = 'Edit Employee';
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  updateEmployee(name, location) {
    this.route.params.subscribe(params => {
      this.employeeService.updateEmployee(name, location, params['id']).subscribe(res => {
        this.router.navigate(['index']);
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employee = this.employeeService.editEmployee(params['id']).subscribe(res => {
        console.log(res);
        this.employee = res[0];
      });
    });
  }
}
