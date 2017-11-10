import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { VMRoutingModule } from './VMRouting';
import { HttpClientModule }    from '@angular/common/http';

import {  HttpModule } from '@angular/http';

import {VMManageRight} from './app.VMManageRight';
import {VMManageLeft} from './app.VMManageLeft';
import {VDIComponent} from './VDI.component';
import {Compute_Instance, HDaaS_VMList} from './Compute_Instance';
import {VMCreate} from './VMCreate';
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    VMRoutingModule,
    HttpModule
  ],
  declarations: [
    VMManageRight,VMManageLeft,VDIComponent,VMCreate
  ],
  providers: [Compute_Instance,HDaaS_VMList],
})
export class VMManagerModule {}