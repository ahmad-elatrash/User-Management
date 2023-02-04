import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user-userslist',
    templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit, OnDestroy {
    imageWidth: number = 100;
    imageMargin: number = 2;
    displayAvatar: boolean = false;
    private _listFilter: string = ""
    filteredUsers: IUser[] = [];
    users: IUser[] = []; 
    sub!: Subscription;
    p: number = 1;
    itemsPerPage: number = 6;
    totalUser: any;
    public get listFilter(): string {
        return this._listFilter;
    } 
    
    public set listFilter(v : string) {
        this._listFilter = v;
        this.filteredUsers = this.doFilter(v);  
    }
    doFilter(filterBy: string): IUser[] {
        return this.users.filter((user: IUser) => 
                user.first_name.toLocaleLowerCase().includes(filterBy));
    }
    constructor(private userService: UserService){
        console.log('constructor ha been called')
    }
    ngOnInit(){
        this.sub = this.userService.getUsers().subscribe({
            next: users => {
                this.users = users;
                this.filteredUsers = this.users;
                this.totalUser = users.length;
            }
        });
    }
    ngOnDestroy(): void{
        this.sub.unsubscribe();
    }
    toggleAvatar(): void {
        this.displayAvatar = !this.displayAvatar;
        console.log('button has been clicked')
    }
}