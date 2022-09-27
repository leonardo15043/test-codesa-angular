import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss']
})
export class UserActionComponent implements OnInit {

  public title:string; 

  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  private getParams(){
    this.activatedRoute.params.subscribe( params =>{
      switch (params['type']) {
        case 'edit':
          this.title = "Editar Usuario";
          break;
        case 'add':
          this.title = "Agregar Usuario";
          break;
        case 'view':
          this.title = "Ver Usuario";
          break;
      }
    });
  }

}
