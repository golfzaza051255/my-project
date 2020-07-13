import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UserHomeComponent, UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UserHomeComponent },
      { path: 'profile', component: UserProfileComponent },
    ]),
  ]
})
export class UserModule { }
