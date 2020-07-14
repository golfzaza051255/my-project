import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { RegisterComponent } from './register/register.component';
import { BoxCardComponent } from './shares/component/box-card/box-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
