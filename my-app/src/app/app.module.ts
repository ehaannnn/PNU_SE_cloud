import { ModalModule } from 'ng2-modal-dialog/modal.module';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import {SelectedServer} from './SelectedServer-service';
import {Token} from './Token';
import { ChartsModule } from 'ng2-charts';

import {LineChartDemoComponent} from "./Chart/chart.component";
import {ChartService} from "./Chart/chart.service";
import {ChartModule} from "./Chart/ChartRouting.module";
@NgModule({
  imports:      [ HttpClientModule,BrowserModule, AppRoutingModule,ModalModule, VMManagerModule,ChartsModule ],
  declarations: [ Main , MenuDetailComponent, testMain, VMAddModalComponent, ],
  bootstrap:    [ Main ],
  providers:[ appRoutingProviders, ServerList,FarmList,HDaasVMListService,OpenStackVMListService,SelectedServer,Token,ChartService]
})
export class AppModule {

}
