import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Properties
  user: User;

  constructor() {}

  ngOnInit() {
    this.user = {
      firstname: 'John',
      lastname: 'Doe',      
      email: 'john.doe@gmail.com'
    };
  }
}
