import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {VMSnapShot} from './app.SnapShotList';
import {testMain} from './app.testMain';
import {VMManageRight} from './app.VMManageRight';

const helloRoutes: Routes=[
    {path:'vm_snapshot',component:VMSnapShot},
    {path:'',component:testMain},
    {path:'vm_manage',component: VMManageRight}
]
const appRoutes: Routes =[
    ...helloRoutes
]
export const appRoutingProviders: any[]=[
    
];
export const AppRoutingModule: ModuleWithProviders =RouterModule.forRoot(appRoutes);