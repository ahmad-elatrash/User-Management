import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from './user';

@Component({
  //selector: 'user-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  title = 'User Detail: ';
  user: IUser | undefined;
  constructor(private route: ActivatedRoute,
              private router: Router){

  }
  ngOnInit(): void {
    this.title += this.route.snapshot.paramMap.get('id');
  }
  onBack(): void {
    this.router.navigate(['/users']);
  }
}
