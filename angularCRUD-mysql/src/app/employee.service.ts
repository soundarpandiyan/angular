import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
  addEmployee(name, location) {
    const uri = 'http://localhost:4000/employees/add';
    const obj = {
      name: name,
      location: location
    };
    return this.http.post(uri, obj)
      .map(res => {
        return res;
      });
  }

  getEmployees() {
    const uri = 'http://localhost:4000/employees';
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }

  editEmployee(id) {
    const uri = 'http://localhost:4000/employees/edit/' + id;
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }

  updateEmployee(name, location, id) {
    const uri = `http://localhost:4000/employees/update/`;

    const obj = {
      name: name,
      location: location,
      id: id
    };
    return this
      .http
      .post(uri, obj)
      .map(res => {
        return res;
      });
  }

  deleteEmployee(id) {
    const uri = 'http://localhost:4000/employees/delete/' + id;

    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }
}
