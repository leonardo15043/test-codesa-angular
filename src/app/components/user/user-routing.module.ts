import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserActionComponent } from './pages/user-action/user-action.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'action/:type',
    component: UserActionComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class UserRoutingModule {}