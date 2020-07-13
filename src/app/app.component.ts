import { Component, OnInit } from '@angular/core';
import { HomeService } from './shares/service/home.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userType;
  constructor(
    private homeService: HomeService,
    private router: Router
  ) {
    homeService.$userType.subscribe(data => {
      this.userType = data;
    });
  }

  ngOnInit(): void {
    this.homeService.$userType = of('ALL');
  }

  logout() {
    this.homeService.$userType = of('ALL');
    this.router.navigate(['']);
  }
}
