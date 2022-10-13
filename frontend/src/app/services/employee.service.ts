import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
    selectedEmployee: Employee;
    Employees : Employee[];
    readonly URL_API = 'http://localhost:8080/api/Employees';
  
    constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
    this.Employees = [];
  }

  getEmployees(){
    return this.http.get(this.URL_API);
  }

  PostEmployee(Employee:Employee){
    return this.http.post(this.URL_API, Employee);
  }

  putEmployee(Employee:Employee){
    return this.http.put(this.URL_API + `/${Employee._id}`, Employee);//
  }

  deleteEmployee(_id: string) { // Solo se necesita el id, no todo lo del Employee
    return this.http.delete(this.URL_API + `/${_id}`);// utilizamos el método delete
  }
}
