import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "./user";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    userUrl = 'api/users/users.json';
    constructor(private http: HttpClient){
        
    }
    getUsers() : Observable<IUser[]> {
        return this.http.get<IUser[]>(this.userUrl);
    
    }
    // private usersUrl = 'https://reqres.in/api/users?page=1';
    // constructor(private http: HttpClient){
    // }
    // getUsers() : Observable<IUser[]> {
    //     return this.http.get<IUser[]>(this.usersUrl);
    // }
}