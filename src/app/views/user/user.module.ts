import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/share.module';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    
  ],
  declarations: [UserComponent, UserListComponent]
})
export class UserModule { }
