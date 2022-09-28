import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User, Rol } from '../models/user.interface';

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
        return this.http.get<User[]>(`/api/user`, { headers: this.headers }).pipe( map( data => data ));
    }

    getUser( id_user:number ){
        return this.http.get<User>(`/api/user/${id_user}`, {  headers: this.headers  }).pipe( map( data => data ));
    }

    saveUser( user:User ) {
        const body = JSON.stringify(user);
        return this.http.post<User>(`/api/user`, body , { headers: this.headers });
    }

    updateUser( user:User ) {
        const body = JSON.stringify(user);
        return this.http.post<User>(`/api/user`, body , { headers: this.headers });
    }

    deleteUser( id_user:number ) {
        return this.http.delete(`/api/user/${ id_user }`, { headers: this.headers });
    }

    searchUser( search:string ){
        return this.http.get<User[]>(`/api/user/query`, { params:{ name:search }, headers: this.headers }).pipe( map( data => data ));
    }

    getRols():Observable<Rol[]>{
        return this.http.get<Rol[]>(`/api/rol`, { headers: this.headers }).pipe( map( data => data ));
    }
}