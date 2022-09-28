import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User, Rol } from '../../models/user.interface'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { statusHttp } from 'src/app/core/helpers/utilities';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss']
})
export class UserActionComponent implements OnInit {

  public title:string; 
  public userForm:FormGroup;
  public isSubmit:boolean;
  public loading = false;
  public rols:Rol[];
  public params:Params;

  constructor(
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private _userService:UserService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  /**
   * Depending on the parameters get executes an action of the crud
   */
  private getParams(){
    this.activatedRoute.params.subscribe( params =>{
      this.params = params;
      switch (params['type']) {
        case 'edit':
          this.title = "Editar Usuario";
          this.getUser(params['id']);
          this.getRols();
          break;
        case 'add':
          this.title = "Agregar Usuario";
          this.setupForm();
          this.getRols();
          break;
        case 'view':
          this.title = "Ver Usuario";
          break;
      }
    });
  }

  /**
   * Load the data entry form for the user entity
   * @param user 
   */
  private setupForm( user?:User ){
    this.userForm = this.formBuilder.group({
      name: [ user?.name, Validators.required ],
      email: [ user?.email, [ Validators.required, Validators.email ] ],
      idRol: [ user?.idRol, Validators.required ],
      active: [ (user?.active) ? user?.active : false ],
    });
    this.loading = true;
  }

  /**
   * Save or update user data
   */
  public saveUser(){
    this.isSubmit = true;

    if(this.userForm.valid){
      this._userService.saveUser(this.userForm.value).subscribe((user:User)=>{
        const msg = ( this.params['type'] == "add") ? 'Datos guardados correctamente': 'Datos actualizados correctamente';
        this._snackBar.open(msg,'',
        {
          panelClass: 'alert-info',
          duration: 4000,
        });
      },(err)=>{
        this._snackBar.open(statusHttp(err.status,err.error.message),'',
        {
          panelClass: 'alert-error',
          duration: 4000,
        });
      }); 
    }
  }

  /**
   * Fetches a user's data by id and assigns it to the form
   * @param idUser 
   */
  private getUser( idUser:number ){
    this._userService.getUser( idUser ).subscribe((user:User) =>{
      this.setupForm(user);
      this.userForm.addControl('idUser', new FormControl(user.idUser));
    },(err)=>{
      this._snackBar.open(statusHttp(err.status,err.error.message),'',
      {
        panelClass: 'alert-error',
        duration: 4000,
      });
    }); 
  }

  /**
   * Get the list of roles
   */
  private getRols(){
    this._userService.getRols().subscribe((rols:Rol[])=>{
      this.rols = rols;
    })
  }

}
