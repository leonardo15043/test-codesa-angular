import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private url = environment.service.url;
    private headers: HttpHeaders;

    constructor(
        private http: HttpClient
    ){
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Content-Type', 'application/json');
    }

    getUserAll():Observable<User[]>{
        return this.http.get<User[]>(`/api/user`, {  headers: this.headers  }).pipe( map( data => data ));
    }
}