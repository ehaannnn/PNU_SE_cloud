import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule,appRoutingProviders} from './app.SnapShotRouter';
import { Main }  from './app.Main';
import { VMListView } from'./app.VMList';
import {VMSnapShot} from './app.SnapShotList';
import {SelectedServer} from './SelectedServer-service';

import {Farm} from './Data/farm';
import {FarmList} from './Data/farm-mock.service';
import {ServerList} from './Data/server-mock.service';

import { HDaasVMListService} from './Data/vm-mock.service';
import { OpenStackVMListService} from './Data/vm-mock.service';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ Main ,VMListView,VMSnapShot],
  bootstrap:    [ Main ],
  providers:[ appRoutingProviders, ServerList,FarmList,HDaasVMListService,OpenStackVMListService,SelectedServer]
})
export class AppModule {

}
