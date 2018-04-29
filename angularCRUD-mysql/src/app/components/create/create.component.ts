import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Employee';
  angForm: FormGroup;
  constructor(private employeeService: EmployeeService, private fb: FormBuilder,
    private router: Router) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
  }
  addEmployee(name, location) {
    this.employeeService.addEmployee(name, location).subscribe(res => {
      this.router.navigate(['index']);
    });

  }
  ngOnInit() {
  }

}
