import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
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
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getUserAll();
  }

  public getUserAll(){
    this._userService.getUserAll().subscribe((users:User[])=>{
      this.users = users;
    });
  }

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
        
        break;
      default:
        break;
    }
  }

}
