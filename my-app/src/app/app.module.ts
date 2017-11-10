import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import {AppRoutingModule,appRoutingProviders} from './app.routing';

import { Main }  from './app.Main';
import { VMManagerModule } from './VMManager/VMRouting.module';

import {Farm} from './Data/farm';
import {FarmList} from './Data/farm-mock.service';
import {ServerList} from './Data/server-mock.service';

import { HDaasVMListService} from './Data/vm-mock.service';
import { OpenStackVMListService} from './Data/vm-mock.service';

import { MenuDetailComponent } from './menu-detail.component';

import { ChartsModule } from 'ng2-charts';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

import {LineChartDemoComponent} from "./Chart/chart.component";
import {ChartService} from "./Chart/chart.service";
import {ChartModule} from "./Chart/ChartRouting.module";

import {loginCheck} from "./Data/Login"
//import { VMAddModalComponent } from './VMManager/VMAddModal.component';

import {SelectedServer} from './SelectedServer-service';
import {Token} from './Token';

@NgModule({
  imports:      [ HttpClientModule,BrowserModule, AppRoutingModule,ChartsModule, VMManagerModule,FormsModule ],
  declarations: [ Main , MenuDetailComponent ,LoginComponent],
  bootstrap:    [ Main ],
  providers:[ appRoutingProviders, ServerList,FarmList,HDaasVMListService,OpenStackVMListService,SelectedServer,Token,LoginService,ChartService,loginCheck]
})
export class AppModule {

}
