
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SnapShotMain} from './SnapShotManage/SnapShotMain';
import {testMain} from './app.testMain';
import {VMManagerModule} from './VMManager/VMRouting.module';

import { LoginComponent }   from './login/login.component';
import { UserManageComponent }   from './user-manage/user-manage.component';



const helloRoutes: Routes=[
    //{path:'',component:testMain},
    { path: 'login',  component: LoginComponent },
    {path : 'usermanage', component: UserManageComponent },
    {path: 'vm_snapshot', loadChildren:'./SnapShotManage/Snapshot.module#SnapShotModule'},
    {path: 'vm_manage', loadChildren:'./VMManager/VMRouting.module#VMManagerModule'},
    { path: '', redirectTo: 'login' ,pathMatch:'full'},
]
const appRoutes: Routes =[
    ...helloRoutes
]
export const appRoutingProviders: any[]=[
    
];
export const AppRoutingModule: ModuleWithProviders =RouterModule.forRoot(appRoutes);