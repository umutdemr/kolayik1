import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  role: any;
  userName: any;
  keycloakService: any;


  constructor(private keycloak: KeycloakService
    ,private router: Router) { }

  ngOnInit(): void {
    this.role = this.keycloak.getUserRoles();
    this.userName = this.keycloakService.getUsername();
  }
  managerLogin(){
    this.router.navigate(['/manager']);
  }
  employeeLogin(){
    this.router.navigate(['/employee'])
  }

  logout(){
    this.keycloakService.logout();
  }

}
