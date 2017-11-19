import { Component, OnInit } from '@angular/core';
import { IUser } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeesDetailComponent implements OnInit {

  pageTitle :string = "Employee Details";
  employee: IUser;
  _employeeService:EmployeeService;
  _errorMessage:string = null;

  constructor(private _route: ActivatedRoute, private _router: Router, employeeService: EmployeeService) {
    this._employeeService = employeeService;
   }

  ngOnInit() {
    // the plus sign is shortcut to convert string into numeric id
    // thus this var is a number type
    const name:string = this._route.snapshot.paramMap.get('name');
    this._employeeService.getUserById(name)
    .subscribe(data => {
      this.employee = data;
    }, error => {
      // the <any> syntax indicate casting of class
      this._errorMessage = <any>error;
    });
  }

  onBack(): void {
    this._router.navigate(['/attendances']);
  }


 

}
