import {Injectable} from '@angular/core';
import {User} from './User';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';


@Injectable({

  providedIn: 'root'

})
export class UserService {

  private usersURL = 'http://localhost:8080/Controller?action=UserApp';
  private updateURL = 'http://localhost:8080/Controller?action=UpdateUser';

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Accept': 'application/json'
      })
  };

  constructor(private messageService: MessageService, private http: HttpClient)
  {

  }

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }


  getUsers(): Observable<User[]> {
    this.messageService.add('fetched users');
    return this.http.get<User[]>(this.usersURL);

  }

  getUser(id: string): Observable<User> {
    const url = `${this.usersURL}/${id}`;

    return this.http.get<User>(url, this.httpOptions)
      .pipe(tap(_ => this.log(`fetched user id=${id}`)));

  }

  updateUser(user: User): Observable<User> {
    let headers = new Headers();

    console.log(user);
    console.log(this.updateURL);

    const userID = user.userId;

    return this.http.put<User>(this.updateURL + '&userId=' + userID
      + '&firstName=' + user.firstName
      + '&lastName=' + user.lastName
      + '&role=' + user.role
      ,JSON.stringify(user), this.httpOptions);

  }
}
