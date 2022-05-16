import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from "src/auth-module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CvComponent } from './cv/cv.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth-guard';
import { KeycloakAngularModule } from 'keycloak-angular';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manager',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['manager']
    }
  },
  {
    path: 'employee',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['employee']
    }
  }
]
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    CvComponent,
    ChatComponent,
    CalendarComponent,
    UsersComponent,
    SettingsComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScheduleModule,
    AuthModule,
    KeycloakAngularModule,
    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
