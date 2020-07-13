import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shares/service/home.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {

    this.homeService.$userType = of('USER');
    this.homeService.$userType.subscribe(data => {
      console.log('LOGGGGGGGGGGGG 1 userType>>>:', data);
      // if (data === undefined) {
      //   this.userType = 'ALL';
      // } else {
      //   this.userType = data;
      // }
    });
    this.router.navigate(['/user']);
  }
}
