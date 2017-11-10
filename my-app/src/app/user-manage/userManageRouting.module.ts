import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManageComponent } from './user-manage.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UserManageMain} from './userManageMain'



const userManageRoutes: Routes = [
  {
    path: '',
    component: UserManageMain,
    children: [
      {
        path: 'list',
        component: UserManageComponent,      
      },

    ]
  }



];

@NgModule({
  imports: [
    RouterModule.forChild(userManageRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class UserManageRoutingModule { }