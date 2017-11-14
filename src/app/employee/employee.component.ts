import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee2.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    employeeTitle: string = "Employee Title";
    columnSpan: number = 2;
    firstName: string = 'Jenny';
    lastName: string = 'Pink Girl';
    gender: string = 'Male';
    age: number = 20;
}