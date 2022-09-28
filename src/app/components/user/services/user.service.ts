import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User, Rol } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private url = environment.service.url; //TODO if the app is in a local environment, the data is captured from "proxy.conf.json" 👈
    private headers: HttpHeaders;

    constructor(
        private http: HttpClient
    ){
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Content-Type', 'application/json');
    }

    /**
     * Returns an array with the user list
     * @returns Observable<User[]>
     */
    getUserAll():Observable<User[]>{
        return this.http.get<User[]>(`/api/user`, { headers: this.headers }).pipe( map( data => data ));
    }

    /**
     * Returns a user by id
     * @param id_user 
     * @returns Observable<User>
     */
    getUser( id_user:number ){
        return this.http.get<User>(`/api/user/${id_user}`, {  headers: this.headers  }).pipe( map( data => data ));
    }

    /**
     * Save the user entity
     * @param user 
     * @returns Observable<User>
     */
    saveUser( user:User ) {
        const body = JSON.stringify(user);
        return this.http.post<User>(`/api/user`, body , { headers: this.headers });
    }

    /**
     * Update the user entity
     * @param user 
     * @returns 
     */
    updateUser( user:User ) {
        const body = JSON.stringify(user);
        return this.http.post<User>(`/api/user`, body , { headers: this.headers });
    }

    /**
     * Delete a user by id
     * @param id_user 
     * @returns Observable<Object>
     */
    deleteUser( id_user:number ) {
        return this.http.delete(`/api/user/${ id_user }`, { headers: this.headers });
    }

    /**
     * Return all users matching the submitted name
     * @param search 
     * @returns Observable<User[]>
     */
    searchUser( search:string ){
        return this.http.get<User[]>(`/api/user/query`, { params:{ name:search }, headers: this.headers }).pipe( map( data => data ));
    }

    /**
     * Return the list of roles
     * @returns Observable<Rol[]>
     */
    getRols():Observable<Rol[]>{
        return this.http.get<Rol[]>(`/api/rol`, { headers: this.headers }).pipe( map( data => data ));
    }
}