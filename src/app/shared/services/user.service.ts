import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject(["User 1"]);

  public AddUser(user: string): void {
    this.users.value.push(user);
    this.users.next(this.users.value);
  }


  constructor() { }
}
