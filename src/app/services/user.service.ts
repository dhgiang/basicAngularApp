import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/User';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@gmail.com',
        isActive: true,
        registered: new Date('01-02-2018 08:30:00'),
        hide: true
      },
      {
        firstname: 'Kevin',
        lastname: 'Hart',
        email: 'Kevin.hart@hotmail.com',
        isActive: false,
        registered: new Date('08-03-2018 03:30:00'),
        hide: true
      },
      {
        firstname: 'Bob',
        lastname: 'Cat',
        email: 'bob.cat@yahoo.com',
        isActive: true,
        registered: new Date(),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next('testing duc');
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
