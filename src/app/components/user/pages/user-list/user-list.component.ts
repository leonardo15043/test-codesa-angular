import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { statusHttp } from 'src/app/core/helpers/utilities';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 
  public users:User[];

  constructor(
    private _userService:UserService,
    private router:Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getUserAll();
  }

  /**
   * Get the list of users
   */
  public getUserAll(){
    this._userService.getUserAll().subscribe(( users:User[] )=>{
      this.users = users;
    },(err)=>{
      this._snackBar.open(statusHttp(err.status,err.error),'',
      {
        panelClass: 'alert-error',
        duration: 4000,
      });
    });
  }

  /**
   * Redirect to a CRUD action depending on the type action
   * @param type 
   * @param id 
   */
  public action( type:string, id?:number ){
    switch (type) {
      case 'add':
        this.router.navigate(['user','action','add']);
        break;
      case 'edit':
        this.router.navigate(['user','action','edit',id]);
        break;
      case 'view':
        this.router.navigate(['user','action','view',id]);
        break;
      case 'delete':
        this.deleteUser(id!);
        break;
    }
  }

  /**
   * Delete a user by id
   * @param id_user 
   */
  public deleteUser( id_user:number ){
    this._userService.deleteUser( id_user ).subscribe(( info:any ) =>{
      this.users = this.users.filter(data => data.idUser != id_user);
      this._snackBar.open(info.message,'',
        {
          panelClass: 'alert-info',
          duration: 4000,
        });
    },(err)=>{
      this._snackBar.open(statusHttp(err.status,err.error),'',
      {
        panelClass: 'alert-error',
        duration: 4000,
      });
    });
  }

  /**
   * Search users by name
   * @param search 
   */
  public search( search:HTMLInputElement ){
    this._userService.searchUser(search.value).subscribe(( users:User[] )=>{
      this.users = users;
    },(err)=>{
      this._snackBar.open(statusHttp(err.status,err.error),'',
      {
        panelClass: 'alert-error',
        duration: 4000,
      });
    });
  }

}
