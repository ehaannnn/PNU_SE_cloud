
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SnapShotMain} from './SnapShotManage/SnapShotMain';
import {testMain} from './app.testMain';
import {VMManageRight} from './app.VMManageRight';

const helloRoutes: Routes=[
    {path:'',component:testMain},
    {path:'vm_snapshot',loadChildren:'app/SnapShotManage/Snapshot.module#SnapShotModule'},
    {path:'vm_manage',component: VMManageRight}
]
const appRoutes: Routes =[
    ...helloRoutes
]
export const appRoutingProviders: any[]=[
    
];
export const AppRoutingModule: ModuleWithProviders =RouterModule.forRoot(appRoutes);