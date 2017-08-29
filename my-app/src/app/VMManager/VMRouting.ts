import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VDIComponent} from './VDI.component';
import {VMManageLeft} from './app.VMManageLeft';
import {VMManageRight} from './app.VMManageRight';

const VMRoutes: Routes = [
  {
    path: '',
    component: VMManageLeft,
    children: [
      {
        path: 'VDI',
        component: VDIComponent,      
      },
	  {
        path: 'Farm',
        component: VMManageRight,      
      }
	  
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(VMRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class VMRoutingModule { }

