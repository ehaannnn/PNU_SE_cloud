import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';


import { UseraddComponent } from './useradd/useradd.component';
import { UserManageMain} from './userManageMain'
import { UserManageComponent } from './user-manage.component';
import { UserToken } from './userToken';
import { UserManageRoutingModule} from './userManageRouting.module';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    UserManageRoutingModule
  ],
  declarations: [
    UserManageComponent,
    UseraddComponent,
    UserManageMain
  ],
  providers: [UserToken],

})
export class UserManageModule {}