/**
 * Created by hyeongjukim on 2017. 11. 9..
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VMManageLeft} from '../VMManager/app.VMManageLeft';
import {LineChartDemoComponent} from "./chart.component";
import {ChartsModule} from 'ng2-charts';
import {CommonModule} from "@angular/common";

const ChartRoute: Routes = [
  {
    path: '',
    component: LineChartDemoComponent,


  }
];

@NgModule({
  imports: [
     RouterModule.forChild(ChartRoute)
  ],
  exports: [
    RouterModule,CommonModule
  ],
})
export class ChartRoutingModule { }

