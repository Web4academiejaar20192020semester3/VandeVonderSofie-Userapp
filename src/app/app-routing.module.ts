import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import {UsersComponent} from './users/users.component';

const routes : Routes = [
  {path: 'users', component: UsersComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  ];

@NgModule({
  declarations: [],
  imports:
    [RouterModule.forRoot(routes)],
  exports:
    [RouterModule]

})
export class AppRoutingModule { }
