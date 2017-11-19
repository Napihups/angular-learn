import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { TaskInboxComponent } from './shared/TaskInbox.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmpdetailGuardServiceService } from './employees-detail/empdetail-guard-service.service';



@NgModule({
  declarations: [
    AppComponent,
    AttendanceListComponent,
    TaskInboxComponent,
    WelcomeComponent,
    EmployeesDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: 'attendances', component: AttendanceListComponent},

      { path: 'users/:name',
      canActivate:[ EmpdetailGuardServiceService ], component: EmployeesDetailComponent},

      { path: 'welcome', component: WelcomeComponent},

      { path: '', redirectTo: 'welcome', pathMatch: 'full' },

      { path: '**', redirectTo:'welcome', pathMatch: 'full'}

    ]),
  ],
  providers: [EmpdetailGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
