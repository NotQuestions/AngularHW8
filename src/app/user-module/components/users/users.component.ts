import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(value => {
      this.users = value.fetchUsers;
    });
  }

  ngOnInit(): void {
  }

}
