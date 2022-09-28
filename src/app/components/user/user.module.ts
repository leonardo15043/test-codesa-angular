import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserActionComponent } from './pages/user-action/user-action.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserListComponent,
    UserActionComponent
  ]
})
export class UserModule { }