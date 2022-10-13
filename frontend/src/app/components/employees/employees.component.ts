import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {}

  addEmployee(form?: NgForm) {
    this.employeeService.PostEmployee(form?.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html:'¡Guardado satisfactoriamente!'});
    })
  }

  resetForm(form?: NgForm) {
    // Límpia el formulario si recibe un formulario como parámetro.
    if(form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

}
