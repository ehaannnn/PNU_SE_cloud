import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VMListView } from'./app.VMList';
import {VMSnapShot} from './app.SnapShotList';
import {SnapShotMain} from './SnapShotMain';
import {SnapShotSchedule} from './app.SnapShotSchedule';

const snapShotRoutes: Routes = [
  {
    path: '',
    component: SnapShotMain,
    children: [
      {
        path: 'manage',
        component: VMSnapShot,      
      },
      {
        path:'schedule',
        component:SnapShotSchedule
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(snapShotRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class SnapShotRoutingModule { }

