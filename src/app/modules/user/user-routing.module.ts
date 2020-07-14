import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { UserPageComponent } from '../user-page/user-page.component';

const routes: Routes = [
  { path: '', component: UserPageComponent },
  // { path: 'login', component: HomeLoginComponent },
  // { path: 'login', component: HomeLoginComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class UserRoutingModule { }
