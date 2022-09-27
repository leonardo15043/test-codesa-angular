import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserActionComponent } from './pages/user-action/user-action.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
  ],
  declarations: [
    UserListComponent,
    UserActionComponent
  ]
})
export class UserModule { }