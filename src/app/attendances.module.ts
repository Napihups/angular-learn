import { NgModule } from "@angular/core";
import {AttendanceListComponent } from "./attendance-list/attendance-list.component";
import { EmployeesDetailComponent } from "./employees-detail/employees-detail.component";
import { TaskInboxComponent } from "./shared/TaskInbox.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { EmpdetailGuardServiceService } from "./employees-detail/empdetail-guard-service.service";
import { WelcomeComponent } from "./welcome/welcome.component";


const appRoutes: Routes = [
    { path: 'attendances', component: AttendanceListComponent},
    { path: 'users/:name',
    canActivate:[ EmpdetailGuardServiceService ], component: EmployeesDetailComponent},
] 

@NgModule({
    declarations: [
        AttendanceListComponent,
        EmployeesDetailComponent,
        TaskInboxComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [EmpdetailGuardServiceService],
  })

export class AttendancesModule {

}