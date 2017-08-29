import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { VMRoutingModule } from './VMRouting';

import {VMManageRight} from './app.VMManageRight';
import {VMManageLeft} from './app.VMManageLeft';
import {VDIComponent} from './VDI.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VMRoutingModule
  ],
  declarations: [
    VMManageRight,VMManageLeft,VDIComponent
  ],
})
export class VMManagerModule {}