import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
import { IUser } from '../model/user';
import { IApiModelOne } from '../model/apiModelOne';

@Component({
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css'],
  providers: [ EmployeeService ]
})
export class AttendanceListComponent implements OnInit {
  
  _employeeService:EmployeeService;
  
  avatarWidth:number = 100;
  avatarMargin:number = 10;

  _searchFilter:string;
  _userSearchFilter: string;
  stringContainer: string;
  showImage:boolean = false;

  panelTitle:string = "Attendance";
  
  errorMessage:string;
  
  filteredtEmployeeAtt:IEmployee[];
  
  employeesAtt:IEmployee[] = [];

  userList: IUser[] = [];

  filteredUserList: IUser[] = [];

  apiOneList: IApiModelOne[] = [];

  get userSearchFilter() {
    return this._userSearchFilter;
  }

  set userSearchFilter(value: string) {
    this._userSearchFilter = value;
    this.filteredUserList = this.userSearchFilter ? this.perFormUserFilter(this.userSearchFilter) : this.userList;
  }

  get searchFilter() {
    return this._searchFilter;
  }

  set searchFilter(value:string){
      this._searchFilter = value;
      this.filteredtEmployeeAtt = this.searchFilter ? this.perFormFilter(this.searchFilter) : this.employeesAtt;
  }

  getUserTaskCompleted(): number{
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  }

  perFormFilter(filterBy: string): IEmployee[] {
    filterBy = filterBy.toLocaleLowerCase();
    let result: IEmployee[] = null;
    result = this.filterByUserId(filterBy);
    if(result.length <= 0){
      result = this.filterByName(filterBy);
      if(result.length <= 0){
        result = this.filterByDepart(filterBy);
      }
    }
    return result;
  }

  filterByUserId(userId: string): IEmployee[] {
    return this.employeesAtt.filter((employee: IEmployee)=>
        employee.userId.toLocaleLowerCase().indexOf(userId) !== -1);
  }

  filterByName(name: string): IEmployee[] {
    return this.employeesAtt.filter((employee: IEmployee)=>
        employee.name.toLocaleLowerCase().indexOf(name) !== -1);
  }

  filterByDepart(department: string): IEmployee[] {
    return this.employeesAtt.filter((employee: IEmployee)=>
      employee.department.toLocaleLowerCase().indexOf(department) !== -1);
  }
  // ------------------------------------------//

  perFormUserFilter(filter: string): IUser[] {
    filter = filter.toLocaleLowerCase();
    return this.filterUserByID(filter); 

  }

  filterUserByUserId(userId: string): IUser[] {
    return this.userList.filter((user: IUser) => 
    user.userid.toString().toLocaleLowerCase().indexOf(userId) !== -1);
  }

  filterUserByID(userId: string): IUser[] {
    var num = Number.parseInt(userId);
    return this.userList.filter((user: IUser) => 
      user.userid == num);
  }

  


 
  toggleImage():void{
    this.showImage = !this.showImage;
  }



  updateUserInfo(){
    for(let i of this.employeesAtt){
      i.taskCompleted = this.getUserTaskCompleted();
    }
  }

  onTaskPanelClick(message: string):void{
    this.stringContainer = message;
  }

  buttonOneApi():void{
    this._employeeService.getApiOne()
    .subscribe(
      apiOneList => function (){
        this.apiModelOne = apiOneList;
      },
      error => this.errorMessage = <any>error
    );
  }


  constructor(employeeService: EmployeeService) {
    this._employeeService = employeeService;
    this.errorMessage = "empty";
  }

  // remember to use this hook for initialization of the component attribute and entity data.
  ngOnInit() {
    this.employeesAtt = this._employeeService.getEmployeeAtt();
    this._searchFilter = "";
    this.filteredtEmployeeAtt = this.employeesAtt;
    this.showImage = true;  
    this.initializeEmployee();
  }


  //METHODS
  initializeEmployee():void {
    this._employeeService.getUserListing()
    .subscribe(userListing => {
      this.userList = userListing;
      this.filteredUserList = this.userList;
    },
      error => this.errorMessage = <any>error
    );
  }

  



  
}


