import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { VMRoutingModule } from './VMRouting';
import { HttpClientModule }    from '@angular/common/http';

import {VMManageRight} from './app.VMManageRight';
import {VMManageLeft} from './app.VMManageLeft';
import {VDIComponent} from './VDI.component';
import {Compute_Instance} from './Compute_Instance';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    VMRoutingModule
  ],
  declarations: [
    VMManageRight,VMManageLeft,VDIComponent
  ],
  providers: [Compute_Instance],
})
export class VMManagerModule {}