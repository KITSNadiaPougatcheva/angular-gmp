import { Injectable } from '@angular/core';
import { IUser } from './../models/iuser';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
 public findAllUsers(): IUser[] {
    const items: User[] = [];
    items.push(new User('1', 'Anna', 'Ventura'));
    items.push(new User('2', 'J.P.', 'Morgan'));
    items.push(new User('3', 'Karl', 'Lagerfeld'));
    return items;
  }
}

