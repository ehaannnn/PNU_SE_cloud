import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';

import {  HttpModule } from '@angular/http';

import {Compute_Instance, HDaaS_VMList} from '../VMManager/Compute_Instance';
import {LineChartDemoComponent} from "./chart.component";
import {ChartService} from "./chart.service";
import {ChartRoutingModule} from "./CharRouting";
import { ChartsModule } from 'ng2-charts';
import {VMManagerModule} from "../VMManager/VMRouting.module";
@NgModule({
  imports: [

    ChartRoutingModule,
    ChartsModule
  ],
  declarations: [
    LineChartDemoComponent,
  ],
  providers: [ChartService],
})
export class ChartModule{}
