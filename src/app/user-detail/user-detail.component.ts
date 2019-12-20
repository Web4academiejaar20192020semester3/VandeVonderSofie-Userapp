import { Component, OnInit, Input } from '@angular/core';
import {User} from '../User';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {UserService} from '../user.service';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
/*
* The HeroDetailComponent
* template binds to the component's hero property which is of type Hero.*/


@Input() user: User; // error?
/*
* @Input is a decorator to make user property available for binding by external
* users component
* */
  constructor(
    // injection
    private route: ActivatedRoute, // info about route of this instance of user component
    private userService: UserService,
    private location: Location


  ) { }

  ngOnInit(): void {
    //this.getUser();
  }

 /* getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);

  }*/

  goBack(): void {
    this.location.back();
  }

  save(): void{
    console.log("save: " + this.user.userId + this.user.firstName + this.user.lastName+this.user.role);
    this.userService.updateUser(this.user).subscribe();
      //.subscribe(       (response) => console.log(response)  );
  }
}
