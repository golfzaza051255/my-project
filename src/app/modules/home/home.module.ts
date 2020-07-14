import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
// import { HomeRoutingModule } from './home-routing.module';
// import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLoginComponent } from './home-login/home-login.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeLoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // RouterModule.forChild([
    //   { path: '', component: HomePageComponent },
    //   // { path: 'login', component: HomeLoginComponent },
    // ]),
  ]
})
export class HomeModule { }
