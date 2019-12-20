import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {FormsModule} from '@angular/forms';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
  ],

  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
