import { ListUsersService } from './list-users.service';
import { ListUsersProxyService } from './list-users-proxy.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


const ROUTES: Routes = [
 {path: 'users', component: ListUsersComponent}
];

const config = {
                api_users: 'http://localhost:3033/restricted/1/list/users'
             };

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ListUsersComponent],
  providers: [ListUsersService,
              ListUsersProxyService,
              {provide: 'config', useValue: config}
             ]

})
export class ListUsersModule { }
