import { ModalModule } from 'ng2-modal-dialog/modal.module';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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

import {SelectedServer} from './SelectedServer-service';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,ModalModule, VMManagerModule ],
  declarations: [ Main , MenuDetailComponent, testMain, VMAddModalComponent ],
  bootstrap:    [ Main ],
  providers:[ appRoutingProviders, ServerList,FarmList,HDaasVMListService,OpenStackVMListService,SelectedServer]
})
export class AppModule {

}
