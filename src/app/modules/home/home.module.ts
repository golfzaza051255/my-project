import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent },
      { path: 'login', component: HomeLoginComponent },
    ]),
  ]
})
export class HomeModule { }
