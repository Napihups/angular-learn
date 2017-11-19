import { Injectable } from "@angular/core";
import { IEmployee } from "../model/employee";
import { IUser } from "../model/user";
import { IApiModelOne } from "../model/apiModelOne";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";


@Injectable()
export class EmployeeService {

    private _userListUrl = 'https://jsonplaceholder.typicode.com/posts';

    private _userUrlSpringBoot = 'http://localhost:8080/angular/user';

    private apiOneUrl = "http://www.mocky.io/v2/5a06e444320000852a0e56f5";

    getEmployeeAtt(): IEmployee[] {
        return [
            {
                'userAvatar':'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png',
                 'userId':'546548',
                 'name':'Hanafi',
                 'department':'Science',
                 'billable':true,
                 'type':'fulltime',
                 'dateIn':new Date(),
                 'workstatus': 'Completed',
                 'taskCompleted':this.getUserTaskCompleted()
                },
                {
                  'userAvatar':'https://i.pinimg.com/originals/af/25/49/af25490494d3338afef00869c59fdd37.png',
                  'userId':'456845',
                  'name':'Khairi',
                  'department':'IT',
                  'billable':false,
                  'type':'fulltime',
                  'dateIn':new Date(),
                  'workstatus': 'Completed',
                  'taskCompleted':this.getUserTaskCompleted()
                },
                {
                  'userAvatar':'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png',
                  'userId':'789456',
                  'name':'Nurin',
                  'department':'HR',
                  'billable':true,
                  'type':'Parttime',
                  'dateIn':new Date(),
                  'workstatus': 'Completed',
                  'taskCompleted':this.getUserTaskCompleted()
                }
        ]
    }


    //----------------------------------- REST CALL BEGIN HERE------------------------------//
    getUserListing():Observable<IUser[]> {

      return this._http.get<IUser[]>(this._userUrlSpringBoot, {
        headers: new HttpHeaders()
        .append('Access-Control-Allow-Origin', '*')
      })
      .catch(this.handleError);
      
    }

    getUserById(param: string): Observable<IUser> {
      return this._http.get<IUser>(this._userUrlSpringBoot + "/" + param)
      .catch(this.handleError);
    }

    getApiOne():Observable<IApiModelOne[]> {
      return this._http.get<IApiModelOne[]>(this.apiOneUrl)
      .catch(this.handleError);
    }


    //METHOD TO HANDLE THE ERROR WHEN RESTCALLED
    private handleError(err: HttpErrorResponse){
      console.log("Hello Wolrd" + err.message);
      return Observable.throw(err.message);
    }

    //UTILITIES
    getUserTaskCompleted(): number{
        return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    }

    constructor(private _http: HttpClient){}

    
    

    

}