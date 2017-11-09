
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SnapShotMain} from './SnapShotManage/SnapShotMain';
import {testMain} from './app.testMain';
import {VMManagerModule} from './VMManager/VMRouting.module';

const helloRoutes: Routes=[
    {path:'', component:testMain},
    {path:'vm_snapshot', loadChildren:'app/SnapShotManage/Snapshot.module#SnapShotModule'},
    {path:'vm_manage', loadChildren:'app/VMManager/VMRouting.module#VMManagerModule'},
  {path:'vm_chart', loadChildren:'app/Chart/ChartRouting.module#ChartModule'}
]
const appRoutes: Routes =[
    ...helloRoutes
]
export const appRoutingProviders: any[]=[

];
export const AppRoutingModule: ModuleWithProviders =RouterModule.forRoot(appRoutes);
