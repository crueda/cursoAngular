import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { ListUsersService } from './../list-users.service';
import { ListUsersProxyService } from './../list-users-proxy.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  sub: Subscription;
  users: string;

  constructor(@Inject(ListUsersService) private listUsersService: ListUsersService) { }

  getUsers() {
    // LLamar a la api
    this.sub = this.listUsersService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    )
  }

  ngOnInit() {
  }

}
