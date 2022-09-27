import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './components/user/user.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/list',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => UserModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
