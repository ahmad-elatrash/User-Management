import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list.component';
import { UserDetailComponent } from './users/user-detail.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      // { path: 'acount',
      //   loadChildren: () =>
      //   import('./acount/acount.module').then(
      //     m => m.AcountModule
      //   )},
      { path: 'users' , component: UserListComponent},
      { path: 'users/:id' , component: UserDetailComponent},
      { path: '' , redirectTo: 'users', pathMatch: 'full'},
      { path: '**' , redirectTo: 'users', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
