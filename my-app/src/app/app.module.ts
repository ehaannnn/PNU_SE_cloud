import { ModalModule } from 'ng2-modal-dialog/modal.module';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import {AppRoutingModule,appRoutingProviders} from './app.routing';

import { Main }  from './app.Main';
import { VMManagerModule } from './VMManager/VMRouting.module';
import {testMain} from './app.testMain';

import {Farm} from './Data/farm';
import {FarmList} from './Data/farm-mock.service';
import {ServerList} from './Data/server-mock.service';

import { HDaasVMListService} from './Data/vm-mock.service';
import { OpenStackVMListService} from './Data/vm-mock.service';

import { MenuDetailComponent } from './menu-detail.component';

import { VMAddModalComponent } from './VMManager/VMAddModal.component';

import { UserManageComponent } from './user-manage/user-manage.component';

import { UserAddComponent } from './user-manage/user-add/user-add.component'

import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';


import {SelectedServer} from './SelectedServer-service';
import {Token} from './Token';
@NgModule({
  imports:      [ HttpClientModule,BrowserModule, FormsModule,ModalModule, VMManagerModule,AppRoutingModule, ],
  declarations: [ LoginComponent,Main , MenuDetailComponent, testMain, VMAddModalComponent,UserManageComponent,UserAddComponent ],
  providers:[ LoginService,appRoutingProviders, ServerList,FarmList,HDaasVMListService,OpenStackVMListService,SelectedServer,Token],
  bootstrap:    [ Main ],
})
export class AppModule {

}
