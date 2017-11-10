
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SnapShotMain} from './SnapShotManage/SnapShotMain';
import {testMain} from './app.testMain';
import {VMManagerModule} from './VMManager/VMRouting.module';

import { LoginComponent } from './login/login.component';
import {UserManageMain} from './user-manage/userManageMain';

const helloRoutes: Routes=[
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'userManage', loadChildren: 'app/user-manage/userManage.module#UserManageModule' },
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