import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from './services/car.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyCars';
  constructor(public authService: AuthService, private router: Router) { }
  /* ngOnInit () {
     let isloggedin:string | null;
     let loggedUser:string | null;
     isloggedin = localStorage.getItem('isloggedIn');
     loggedUser = localStorage.getItem('loggedUser');
     if (isloggedin!="true" || !loggedUser)
     this.router.navigate(['/login']);
     //else
     //this.authService.setLoggedUserFromLocalStorage(loggedUser);
     }*/
  ngOnInit() {
    let isloggedin: string | null;
    let loggedUser: string | null;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    this.authService.loadToken();
    if (isloggedin != "true" || !loggedUser) {
      if (this.authService.getToken() == null || this.authService.isTokenExpired()) {
        this.router.navigate(['/login']);
      }
    }

  }
  onLogout() {
    this.authService.logout();
  }

}
