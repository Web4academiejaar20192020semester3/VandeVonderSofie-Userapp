import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {UserService} from '../user.service';
import {timer} from 'rxjs';

@Component({  // = decorator function that specifies Angular metadata for component

  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
/*
* export so usercomponent can be imported elsewhere
* */
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;

  onSelect(user: User): void {

    this.selectedUser = user;

  }

  /*
  * defines private user service + identifies it as a user service injection site
  * when creating users component, the dependency injection system sets
  * userService parameter to instance of UserService
  * */
  constructor(private userService: UserService) {
  }

  getUsers(): void {
    //this.users = this.userService.getUsers(); before observable
    timer(0, 3000).subscribe(() => {
      this.userService.getUsers().subscribe(users => this.users = users);
    });
    //this.userService.getUsers().subscribe(users => this.users = users); // observable.subscribe --> async
  }

  /*
  * ngOnInit = lifecycle hook
  * angular calls this shortly after creating a component
  * place to put initialization logic
  * */
  ngOnInit() {

    console.log('init');
    this.getUsers();

  }

}
